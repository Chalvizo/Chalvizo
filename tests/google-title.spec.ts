import { expect, test } from '@playwright/test';

test('google.com loads in Chrome and has "Google" in the title', async ({ page }) => {
  await page.goto('https://www.google.com', { waitUntil: 'load' });
  await expect(page).toHaveTitle(/Google/);
});
