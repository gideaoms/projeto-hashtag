import { PilotModel } from '../models/pilot';

export type StoreProps = {
  name: string;
  mass: number;
  height: number;
  vehicleId: string;
};

export interface PilotRepositoryContract {
  index(): Promise<PilotModel[]>;

  store(data: StoreProps): Promise<PilotModel>;
}
