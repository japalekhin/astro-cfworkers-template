import type { ServicesContainer } from "@/shared/definitions/services";

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {
		services: ServicesContainer;
	}
}

interface Env {
	HYPERDRIVE: Hyperdrive;
}
