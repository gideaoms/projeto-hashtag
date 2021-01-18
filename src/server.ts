import Koa from "koa";
import * as bodyparser from "koa-bodyparser";
import authMiddleware from "./middlewares/auth";
import pilotRouter from "./routes/pilot";
import { PORT } from "./config/app";

const server = new Koa();

server.use(bodyparser());
server.use(authMiddleware);
server.use(pilotRouter.allowedMethods());
server.use(pilotRouter.routes());

server.listen(PORT, () => {
  console.log(`Server is running. Port: ${PORT}`);
});
