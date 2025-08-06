import { test, expect } from '@playwright/test';

test('API page loads and displays user data', async ({ page }) => {
  await page.goto('/api-example');
  const apiText = await page.locator('[data-testid="api-response"]');
  await expect(apiText).toBeVisible();
  await expect(apiText).toContainText('Yuma - Product Lead');
});
