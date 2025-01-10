export async function loadHomepage(page) {
    await page.goto('https://picsum.photos/images')
}
export async function assertTitle(page) {
    await page.waitForSelector('h1')
}