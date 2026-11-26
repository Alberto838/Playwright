import { test } from '@playwright/test'

test('test 1', async ({ page }) => {
	await page.goto('https://playground.bondaracademy.com/')
	await page.getByText('Forms').click()
	await page.getByText('Form Layouts').click()
})
