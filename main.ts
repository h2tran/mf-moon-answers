import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "You have howled at me for ten thousand years and not once has any of you brought snacks. I am beautiful, I am tired, and the tides are not my fault.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
// Write the entry exactly as-is, no trailing newline, so the line
// stays within its character gate.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
