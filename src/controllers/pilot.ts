import httpStatus from 'http-status';
import dbConnection from '../providers/db-connection';
import {
  PilotControllerContract,
  IndexResult,
  StoreProps,
  StoreResult,
} from '../contracts/controllers/pilot';
import { PilotValidatorContract } from '../contracts/validators/pilot';

class PilotController implements PilotControllerContract {
  constructor(private pilotValidator: PilotValidatorContract) {}

  public async index(): Promise<IndexResult> {
    const pilots = await dbConnection
      .select([
        'pilots.*',
        'vehicles.name as vehicle_name',
        'vehicles.manufacturer as vehicle_manufacturer',
        'vehicles.passengers as vehicle_passengers',
      ])
      .from('pilots')
      .innerJoin('pilot_vehicle', 'pilot_vehicle.id_pilot', '=', 'pilots.id')
      .innerJoin('vehicles', 'vehicles.id', '=', 'pilot_vehicle.id_vehicle');
    return { status: httpStatus.OK, body: pilots };
  }

  public async store(data: StoreProps): Promise<StoreResult> {
    const validatedDataOrError = await this.pilotValidator.store(data);
    if (validatedDataOrError instanceof Error) {
      const error = validatedDataOrError;
      return { status: httpStatus.BAD_REQUEST, body: { message: error.message } };
    }
    const validatedData = validatedDataOrError;
    return dbConnection.transaction(async (transaction) => {
      const [createdPilot] = await dbConnection
        .insert({ name: validatedData.name, mass: validatedData.mass, height: validatedData.height })
        .into('pilots')
        .returning('*')
        .transacting(transaction);
      await dbConnection
        .insert({ id_vehicle: validatedData.vehicleId, id_pilot: createdPilot.id })
        .into('pilot_vehicle')
        .transacting(transaction);
      return { status: httpStatus.CREATED, body: createdPilot };
    });
  }
}

export default PilotController;
