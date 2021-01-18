import * as Router from "koa-router";
import PilotController from "../controllers/pilot";

const router = new Router({ prefix: "/pilots" });
const pilotController = new PilotController();

router.get("/", async (ctx) => {
  const pilots = await pilotController.index();
  ctx.response.body = pilots;
});

router.post("/", async (ctx) => {
  const { name, mass, height, vehicleId } = ctx.request.body;
  const createdPilot = await pilotController.store({
    name,
    mass,
    height,
    vehicleId,
  });
  ctx.response.body = createdPilot;
});

export default router;
