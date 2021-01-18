import { Context, Next } from "koa";

const authMiddleware = (ctx: Context, next: Next) => {
  const unauthorizedCode = 401;
  const [, token] = ctx.headers.authorization?.split(" ");
  const isEqual = "MOnkjnbB32143435795689754yuNEB" === token;
  if (!isEqual) {
    return (ctx.response.status = unauthorizedCode);
  }
  return next()
};

export default authMiddleware;
