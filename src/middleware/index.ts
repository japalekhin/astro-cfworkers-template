import { sequence } from "astro:middleware";
import { addServices } from "@/middleware/modules/add-services";

export const onRequest = sequence(addServices);
