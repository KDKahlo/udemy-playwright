import { test, expect } from "@playwright/test";

test.describe('Login / Logout flow', () => {
//before hook
test.beforeEach(async ({page}) => {
    await page.goto('http://zero.webappsecurity.com/')
})
//negative scenario
//positive scenario

})