import { test, expect } from '@playwright/test';

test('Fun test to play with selectors', async ({ page }) => {
    await page.goto('https://playwright.dev');

    // Find the main heading and check it says "Playwright"
    const heading = await page.locator('h1');
    await expect(heading).toContainText('Playwright');

    // Find the "Get Started" link and click it
    const getStartedLink = await page.locator('text=Get Started');
    await getStartedLink.click();

    // Check if the URL changed to the "Get Started" page
    await expect(page).toHaveURL('https://playwright.dev/docs/intro')
});

