import dbConnection from '../providers/db-connection';
import { PilotRepositoryContract, StoreProps } from '../contracts/repository/pilot';
import { PilotModel } from '../contracts/models/pilot';

class PilotRepository implements PilotRepositoryContract {
  public async index(): Promise<PilotModel[]> {
    const pilots = await dbConnection
      .select<PilotModel[]>([
        'pilots.*',
        'vehicles.name as vehicle_name',
        'vehicles.manufacturer as vehicle_manufacturer',
        'vehicles.passengers as vehicle_passengers',
      ])
      .from('pilots')
      .innerJoin('pilot_vehicle', 'pilot_vehicle.id_pilot', '=', 'pilots.id')
      .innerJoin('vehicles', 'vehicles.id', '=', 'pilot_vehicle.id_vehicle');
    return pilots;
  }

  public async store(data: StoreProps): Promise<PilotModel> {
    return dbConnection.transaction(async (transaction) => {
      const [createdPilot] = await dbConnection
        .insert({ name: data.name, mass: data.mass, height: data.height })
        .into<PilotModel>('pilots')
        .returning('*')
        .transacting(transaction);
      await dbConnection
        .insert({ id_vehicle: data.vehicleId, id_pilot: createdPilot.id })
        .into('pilot_vehicle')
        .transacting(transaction);
      return createdPilot;
    });
  }
}

export default PilotRepository;
