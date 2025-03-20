import { test, expect } from '@playwright/test';


test('Testing Assertions', async ({ page }) => {

    await page.goto('https://demoqa.com.books');
    await page.locator('//div[contains(text(), "Book Store Application")]').click();
    await expect(page).toHaveURL(/books/);

    await page.locator('#searchBox').fill("Speaking JavaScript");
    await expect(page).toHaveTitle("Speaking JavaScript");

    
});