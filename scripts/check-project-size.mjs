import { readdir, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const root = process.cwd();
const warnMb = 80;
const blockMb = 95;
const ignored = new Set(['node_modules', 'dist', '.astro', '.git', '.vercel', '.tools']);

async function directorySize(dir) {
  let total = 0;
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (ignored.has(entry.name)) continue;
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      total += await directorySize(fullPath);
    } else {
      const info = await stat(fullPath);
      total += info.size;
    }
  }
  return total;
}

const bytes = await directorySize(root);
const mb = bytes / 1024 / 1024;
const label = `${mb.toFixed(2)} MB`;

if (mb >= blockMb) {
  console.error(`Project source is ${label}. Deployment is blocked above ${blockMb} MB.`);
  process.exit(1);
}

if (mb >= warnMb) {
  console.warn(`Project source is ${label}. Keep it below ${warnMb} MB where possible.`);
} else {
  console.log(`Project source size OK: ${label}.`);
}

console.log(`Checked ${relative(root, root) || 'project root'} excluding ${[...ignored].join(', ')}.`);
