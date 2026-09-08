import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: { timeout: 15_000 },
  reporter: 'list',
  use: {
    ...devices['Desktop Chrome'],
    headless: false,
    // CHROME_PATH targets a Chrome install Playwright cannot discover itself
    // (e.g. Chrome for Testing); otherwise use the installed Chrome channel.
    ...(process.env.CHROME_PATH
      ? { launchOptions: { executablePath: process.env.CHROME_PATH } }
      : { channel: 'chrome' }),
  },
  projects: [{ name: 'google-chrome' }],
});
