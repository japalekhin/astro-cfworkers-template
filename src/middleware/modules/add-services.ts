import { loadServices } from "@/services/services";
import type { MiddlewareHandler } from "astro";

export const addServices: MiddlewareHandler = async (
  { locals, cookies },
  next,
) => {
  const { sql } = await loadServices({ locals, cookies });
  const response = await next();
  await sql.end();
  return response;
};
