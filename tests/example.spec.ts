import { test, expect } from '@playwright/test';

test('Simple basic test', async ({page}) => {
    // Here goes the test code 
    await page.goto('http://www.example.com')
    const pageTitle = await page.locator('h1')
    await expect(pageTitle).toContainText('Example Domain')
})
test('Clicking on elements', async ({page}) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')
    await page.click('text = Sign in')

    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})
test('Selectors', async ({page}) => {
//text
await page.click('text = Select')
//CSS selectors
await page.click('button')
//ID selectors
await page.click('#id')
//class selectors
await page.click('.class')

//Only visible CSS selectors
await page.click('.submit-button:visible')

//combination in selector to be more precise in testing, targeting better performance
await page.click('#username .first-name')

//XPath
await page.click('//button')

})