import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  //clicking on bookstore application widget
  await page.locator('div:nth-child(6) > div > .card-up').click();
  //click in search bar to provide input
  await page.getByPlaceholder('Type to search').click();
  //entering search term 'You Don\'t Know JS'
  await page.getByPlaceholder('Type to search').fill('You Don\'t Know JS');
  //click on search icon
  await page.locator('#basic-addon2').click();
  //click on the searched link
  await page.getByRole('link', { name: 'You Don\'t Know JS' }).click();
  await page.goto('https://demoqa.com/books');
});