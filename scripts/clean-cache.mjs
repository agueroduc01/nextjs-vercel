import { rmSync, existsSync } from 'fs';
import { join } from 'path';

const projectRoot = join(import.meta.dirname, '..');
const nextCacheDir = join(projectRoot, '.next');

if (existsSync(nextCacheDir)) {
  console.log('Removing .next cache directory...');
  rmSync(nextCacheDir, { recursive: true, force: true });
  console.log('.next cache removed successfully.');
} else {
  console.log('No .next cache directory found.');
}
