export type IndexResult = {
  status: number;
  body: any;
};

export type StoreProps = {
  name: string;
  mass: number;
  height: number;
  vehicleId: number;
};

export type StoreResult = {
  status: number;
  body: any;
};

export interface PilotControllerContract {
  index(): Promise<IndexResult>;

  store(data: StoreProps): Promise<StoreResult>;
}
