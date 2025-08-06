import { test, expect } from '@playwright/test';

test('Zustand counter should increase on click', async ({ page }) => {
    await page.goto('/zustand-example');
    await expect(page.getByText('Zustand Counter')).toBeVisible();

  // Check initial count is 0
  await expect(page.getByText('Current count: 0')).toBeVisible();

  // Click the increase button
  await page.getByRole('button', { name: 'Increase' }).click();

  // Check updated count
  await expect(page.getByText('Current count: 1')).toBeVisible();
});
