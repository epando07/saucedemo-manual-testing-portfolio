import { test, expect } from '@playwright/test';
// 1. Importing both page objects using capitalized 'Pages' pathing
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';

// ==========================================
// TEST 1: The Happy Path Login Test
// ==========================================
test('Verify successful login for standard_user using POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

// ==========================================
// TEST 2: The E2E Cart Workflow + Screenshot Test
// ==========================================
test('Verify standard_user can successfully add a product to the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  // ARRANGE: Log into the application completely
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // ACT: Interact with the inventory dashboard
  await inventoryPage.addBackpackToCart();

  // ASSERT: Prove the shopping cart icon updated to show "1" item inside
  await expect(inventoryPage.shoppingCartBadge).toHaveText('1');

  // VISUAL PROOF: Take a screenshot and save it to a project folder
  await page.screenshot({ path: 'screenshots/cart-success.png' });
});