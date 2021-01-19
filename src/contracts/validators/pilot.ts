export interface PilotValidatorContract {
  store(dat: any): Promise<{ name: string; mass: number; height: number; vehicleId: string } | Error>;
}
