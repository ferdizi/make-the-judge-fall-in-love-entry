import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You leave an inch of tea in every mug, and after nine years I have stopped asking why and started leaving one too.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

if (LINE.length > 240) {
  throw new Error(`Entry line is ${LINE.length} characters, over the 240-character limit.`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, {
  encoding: "utf8",
  mode: 0o644,
});
// writeFileSync's mode is masked by the process umask on creation;
// force 0644 explicitly so the file mode is exact on any machine.
chmodSync(join(outputDir, "entry.txt"), 0o644);
