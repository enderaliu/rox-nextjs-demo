import { test, expect } from '@playwright/test';

test('Home page should have welcome text', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Welcome to Next\.js/i })).toBeVisible();
});
