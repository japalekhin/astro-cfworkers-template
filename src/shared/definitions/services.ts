import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import type { ThemeService } from "@/services/theme";

export interface ServicesContainer {
  db: PostgresJsDatabase;
  theme: ThemeService;
}
