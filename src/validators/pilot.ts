import * as yup from 'yup';
import { PilotValidatorContract } from '../contracts/validators/pilot';

class PilotValidator implements PilotValidatorContract {
  public async store(data: any) {
    try {
      const schema = yup.object().shape({
        name: yup.string().required(),
        mass: yup.number().required(),
        height: yup.number().required(),
        vehicleId: yup.string().uuid().required(),
      });
      const validatedData = await schema.validate(data);
      return validatedData;
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        return new Error(err.message);
      }
      throw err;
    }
  }
}

export default PilotValidator;
