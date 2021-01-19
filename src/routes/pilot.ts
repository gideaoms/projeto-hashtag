import Router from 'koa-router';
import PilotController from '../controllers/pilot';
import PilotValidator from '../validators/pilot';

const router = new Router({ prefix: '/pilots' });
const pilotValidator = new PilotValidator();
const pilotController = new PilotController(pilotValidator);

router.get('/', async (ctx) => {
  const httpResponse = await pilotController.index();
  ctx.response.status = httpResponse.status;
  ctx.response.body = httpResponse.body;
});

router.post('/', async (ctx) => {
  const { name, mass, height, vehicleId } = ctx.request.body;
  const httpResponse = await pilotController.store({
    name,
    mass,
    height,
    vehicleId,
  });
  ctx.response.status = httpResponse.status;
  ctx.response.body = httpResponse.body;
});

export default router;
