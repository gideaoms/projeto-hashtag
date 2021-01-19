import httpStatus from 'http-status';
import {
  PilotControllerContract,
  IndexResult,
  StoreProps,
  StoreResult,
} from '../contracts/controllers/pilot';
import { PilotValidatorContract } from '../contracts/validators/pilot';
import { PilotRepositoryContract } from '../contracts/repository/pilot';

class PilotController implements PilotControllerContract {
  constructor(
    private pilotValidator: PilotValidatorContract,
    private pilotRepository: PilotRepositoryContract,
  ) {}

  public async index(): Promise<IndexResult> {
    const pilots = await this.pilotRepository.index();
    return { status: httpStatus.OK, body: pilots };
  }

  public async store(data: StoreProps): Promise<StoreResult> {
    const validatedDataOrError = await this.pilotValidator.store(data);
    if (validatedDataOrError instanceof Error) {
      const error = validatedDataOrError;
      return { status: httpStatus.BAD_REQUEST, body: { message: error.message } };
    }
    const validatedData = validatedDataOrError;
    const createdPilot = await this.pilotRepository.store(validatedData);
    return { status: httpStatus.CREATED, body: createdPilot };
  }
}

export default PilotController;
