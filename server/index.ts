import { spawn } from 'child_process';

const port = process.env.PORT || '5000';

console.log(`Starting Next.js development server on port ${port}...`);

const next = spawn('npx', ['next', 'dev', '-p', port], {
  cwd: process.cwd(),
  env: { ...process.env },
  stdio: 'inherit',
});

next.on('error', (error) => {
  console.error('Failed to start Next.js:', error);
  process.exit(1);
});

next.on('close', (code) => {
  console.log(`Next.js process exited with code ${code}`);
  process.exit(code || 0);
});

process.on('SIGINT', () => {
  next.kill('SIGINT');
});

process.on('SIGTERM', () => {
  next.kill('SIGTERM');
});
