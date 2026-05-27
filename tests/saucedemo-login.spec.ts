import { test, expect } from '@playwright/test';

test('Verify successful login for standard_user', async ({ page }) => {
  // Step 1: Navigate to the website
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Fill out the username field
  await page.fill('#user-name', 'standard_user');

  // Step 3: Fill out the password field
  await page.fill('#password', 'secret_sauce');

  // Step 4: Click the login button
  await page.click('#login-button');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');
});

test('Verify error message displays for invalid credentials', async ({ page }) => {
  // 1. ARRANGE
  await page.goto('https://www.saucedemo.com/');

  // 2. ACT
  await page.locator('#user-name').fill('wrong_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // 3. ASSERT
  const errorContainer = page.locator('[data-test="error"]');
  await expect(errorContainer).toBeVisible();
  await expect(errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
});