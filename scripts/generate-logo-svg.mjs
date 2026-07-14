#!/usr/bin/env node
// Wraps public/brand/logo.png in a square SVG at public/logo.svg.
//
// IMPORTANT — BIMI caveat: this produces a *displayable* SVG, not a
// BIMI-certified one. The BIMI spec (SVG Tiny Portable/Secure) requires
// pure vector artwork with no embedded raster images, so mail providers
// that strictly validate against that profile will reject this file. Full
// BIMI support additionally requires a Verified Mark Certificate (VMC),
// an enforced DMARC policy, and a DNS BIMI TXT record — none of which
// this script can provide. Treat this as a placeholder until a real
// vector logo is available and a VMC is purchased.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.join(__dirname, "..", "public", "brand", "logo.png");
const outPath = path.join(__dirname, "..", "public", "logo.svg");

if (!fs.existsSync(srcPath)) {
  console.error(`Missing ${srcPath} — place the logo PNG there first.`);
  process.exit(1);
}

const base64 = fs.readFileSync(srcPath).toString("base64");
const size = 512;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <title>Mr. Drain Plumber</title>
  <image href="data:image/png;base64,${base64}" x="0" y="0" width="${size}" height="${size}" preserveAspectRatio="xMidYMid meet" />
</svg>
`;

fs.writeFileSync(outPath, svg);
console.log(`Wrote ${outPath} (${(svg.length / 1024).toFixed(0)} KB)`);
