import { createMeshConfig } from "@baditaflorin/mesh-common";

export const config = createMeshConfig({
  appName: "Round Counter",
  description: "A shared counter for rounds, prompts, and short group activities.",
  accentHex: "#8b5a20",
  version: __APP_VERSION__,
  commit: __GIT_COMMIT__,
});
