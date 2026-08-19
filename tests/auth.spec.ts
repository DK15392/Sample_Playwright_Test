import { test } from '@playwright/test';
import { InventoryPage } from '../src/pages/InventoryPage';
import { LoginPage } from '../src/pages/LoginPage';

test('user can log in and log out', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(
    process.env.TEST_USERNAME ?? 'standard_user',
    process.env.TEST_PASSWORD ?? 'secret_sauce'
  );
  await inventoryPage.logout();
});