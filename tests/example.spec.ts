import { test, expect } from '@playwright/test';

test('Simple basic test', async ({page}) => {
    // Here goes the test code 
    await page.goto('http://www.example.com')
    const pageTitle = await page.locator('h1')
    await expect(pageTitle).toContainText('Example Domain')
})