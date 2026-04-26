import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "cloudflare:workers";
import type { AstroCookies } from "astro";
import type { ServicesContainer } from "@/shared/definitions/services";
import { ThemeService } from "@/services/theme";

export default function services(locals: App.Locals): ServicesContainer {
  return locals.services;
}

export async function loadServices({
  locals,
  cookies,
}: {
  locals: App.Locals;
  cookies?: AstroCookies;
}) {
  const sql = postgres(env.HYPERDRIVE.connectionString, {
    prepare: false,
    max: 1,
    idle_timeout: 1,
    max_lifetime: 30,
  });
  const db = drizzle(sql);

  locals.services = {
    db,
    theme: new ThemeService({ cookies }),
  } as ServicesContainer;

  return { sql };
}
