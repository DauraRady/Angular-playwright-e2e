import { test, expect } from "@playwright/test";
import { getBasicForm, fillForm } from "./helpers/formHelpers";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layout").click();
});

test("Remplir et soumettre le formulaire", async ({ page }) => {
  const basicForm = await getBasicForm(page);
  const emailField = await fillForm(basicForm, "test@test.com", "Welcome123");

  await expect(emailField).toHaveValue("test@test.com");
});

test("Vérifier le texte du bouton", async ({ page }) => {
  const basicForm = await getBasicForm(page);
  const buttonText = await basicForm.locator("button").textContent();

  expect(buttonText).toBe("Submit");
});

// No explicit page close needed; Playwright handles it automatically.
