import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
	await page.goto('https://playground.bondaracademy.com/')
})

test.describe('forms tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.getByText('Forms').click()
	})

	test('form layout test', async ({ page }) => {
		await page.getByText('Form Layouts').click()
	})

	test('datepicker test', async ({ page }) => {
		await page.getByText('Datepicker').click()
	})
})

test.describe('charts tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.getByText('Charts', { exact: true }).click()
	})
	test('echarts test', async ({ page }) => {
		await page.getByText('Echarts', { exact: true }).click()
	})
})
