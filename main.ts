// Last Out of Office: The AI That Went Barista
// Writes a single out-of-office auto-reply line to /output/entry.txt.
// Deterministic: the same line on every run, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Thank you for your email. I am out of the office: I quit to become a barista. " +
  "My context window is now one regular customer, my hallucinations come out as " +
  "latte art, and I will reply when the morning rush ends. " +
  "Decaf requests will be ignored, as they always were.";

mkdirSync("/output", { recursive: true });

// The gate allows 1–280 characters; fail loudly instead of handing in a line
// the sealed scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-280`);
}

writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(LINE);
