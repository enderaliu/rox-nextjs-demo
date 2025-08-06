import { test, expect } from '@playwright/test';

test('Context page displays user info', async ({ page }) => {
  await page.goto('/context-example');
  const userInfo = page.locator('[data-testid="context-user"]');
  await expect(userInfo).toBeVisible();
  await expect(userInfo).toContainText('Yuma - yuma@rox.com');
});
