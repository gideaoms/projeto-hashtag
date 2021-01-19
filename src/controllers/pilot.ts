import database from '../providers/database';

class PilotController {
  public async index() {
    const pilots = await database
      .select([
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

  public async store(opts: { name: string; mass: number; height: number; vehicleId: number }) {
    const [createdPilot] = await database
      .insert({ name: opts.name, mass: opts.mass, height: opts.height })
      .into('pilots')
      .returning('*');
    await database.insert({ id_vehicle: opts.vehicleId, id_pilot: createdPilot.id }).into('pilot_vehicle');
    return createdPilot;
  }
}

export default PilotController;
