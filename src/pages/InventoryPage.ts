import { expect, type Page } from '@playwright/test';

export class InventoryPage {
  private readonly menuButton;
  private readonly logoutLink;
  private readonly inventoryItems;

  constructor(private readonly page: Page) {
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
    this.inventoryItems = page.locator('.inventory_item');
  }

  async logout(): Promise<void> {
    await expect(this.inventoryItems).toHaveCount(6);
    await this.menuButton.click();
    await expect(this.logoutLink).toBeVisible();
    await this.logoutLink.click();
    await expect(this.page).toHaveURL(/\/$/);
    await expect(this.page.locator('[data-test="login-button"]')).toBeVisible();
  }
}