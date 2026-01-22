const { test, describe, expect } = require('@playwright/test')

describe('Individual Pokemon', () => {
  test('ivysaur', async ({ page }) => {
    await page.goto('http://localhost:8080/pokemon/ivysaur')
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})