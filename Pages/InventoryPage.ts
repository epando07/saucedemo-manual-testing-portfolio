import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly backpackAddToCartButton: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    // Targeting the unique ID for the Sauce Labs Backpack button
    this.backpackAddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
    // Targeting the shopping cart badge class icon
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
  }

  async addBackpackToCart() {
    await this.backpackAddToCartButton.click();
  }
}