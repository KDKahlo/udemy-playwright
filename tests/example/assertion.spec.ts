import { test, expect } from '@playwright/test';

test('Testing Assertions', async ({page}) => {
    
    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName').fill("Test Username");
    await page.locator('#userEmail').fill("test@example.com");
    await page.locator('[placeholder="Current Address"]').fill("Current Address Test");
    await page.locator('#permanentAddress').fill("test");
    await page.locator('button:has-text("Submit")').click();

    const name = page.locator('#name');
    const email = page.locator('#email');
    const currentAddress = page.locator('[placeholder="Current Address"]');
    const permanentAddress = page.locator('textarea#permanentAddress');



    await expect(name).toBeVisible();
    await expect(name).toHaveText('Name:Test Username');
    await expect(email).toBeVisible();
    await expect(email).toHaveText('Email:test@example.com');
    await expect(currentAddress).toBeVisible();
    await expect(currentAddress).toHaveValue('Current Address Test');
    await expect(permanentAddress).toBeVisible();
    await expect(permanentAddress).toHaveValue('test');
})