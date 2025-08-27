import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const response = await next();
  response.headers.set("Content-Type", "text/html; charset=utf-8");
  return response;
};
