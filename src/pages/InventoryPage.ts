import { expect, type Page } from '@playwright/test';

export class InventoryPage {
  private readonly menuButton;
  private readonly logoutLink;

  constructor(private readonly page: Page) {
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async logout(): Promise<void> {
    await this.menuButton.click();
    await expect(this.logoutLink).toBeVisible();
    await this.logoutLink.click();
    await expect(this.page).toHaveURL(/\/$/);
  }
}