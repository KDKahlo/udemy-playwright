import { test, expect } from '@playwright/test';
import {loadHomepage, assertTitle} from '../../helper'

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
test('Working with Inputs', async  ({page}) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')

    await page.fill('#user_login', 'some username')
    await page.fill('#user_password', 'some password')

    await page.click('text=Sign in')
    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

test.describe('My first test suite', () => { 
    test('URL and Title checks', async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
        await expect(page).toHaveTitle('Zero - Personal Banking - Loans - Credit Cards')
    })
    //assertions
    test( 'assertions @myTag', async ({page}) => {
        await page.goto('https://picsum.photos/images')
        await expect(page).toHaveURL('https://picsum.photos/images')
        await expect(page).toHaveTitle('Lorem Picsum - Images')
    
        const h1Element = await page.locator('h1')
        const h2Element = await page.locator('h2.text-2xl')
        const h2s = await page.locator('h2')
        console.log(await h2s.count())
    
        await expect(h1Element).toBeVisible()
        await expect(h1Element).toHaveText('Lorem Picsum')
        await expect(h2Element).toHaveText('The Lorem Ipsum for photos.')
        await expect(h1Element).toHaveCount(1)
        await expect(h2Element).toHaveCount(1)
    
        const nonExistingElement = await page.locator('h5')
        await expect(nonExistingElement).not.toBeVisible()
    })

})
test.describe.parallel('Hooks', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://picsum.photos/images')
    })
    test('screenshot', async ({page}) => {
        //Step 1: load website
        // await page.goto('https://picsum.photos/images')
        //Step 2: take screenshot of full page
        await page.screenshot({path: 'fullpageScreenshot.png', fullPage: true})
    })
    test('single element screenshot', async ({page}) => {
        // await page.goto('https://picsum.photos/images')
        const targetElement = await page.$('h1')
        await page.screenshot({path: 'targetElement.png'})
    })
})

test.describe.parallel('Example Tests', () => {
   const baseurl = 'https://the-internet.herokuapp.com/iframe';
    test('testing iframe', async ({page}) => {
        await page.goto(baseurl);
        const frametest = page.frameLocator('#mce_0').locator('html');
        // Locate the editable field inside the iframe
        const editor = frametest.locator('#tinymce');
        // Click inside the editor to focus
         await editor.click();
        // Fill text into the editor
        await editor.fill('This is an iframe test');
    })
    test('testing downloading file', async ({page}) => {
             await page.goto(baseurl);
       
            await page.goto('https://the-internet.herokuapp.com/');
            await page.getByRole('link', { name: 'File Download', exact: true }).click();
            const downloadPromise = page.waitForEvent('download');
            await page.getByRole('link', { name: 'test_file.txt' }).click();
            const download = await downloadPromise;
            // Wait for the download process to complete and save the downloaded file somewhere.
            await download.saveAs('/tests/example' + download.suggestedFilename());
    })
})
