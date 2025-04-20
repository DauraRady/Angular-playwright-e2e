import { test } from "@playwright/test";

test("Locator syntax rules", async ({ page }) => {
  // by tag name
  page.locator("", {});
  // by id
  await page.locator("#inputEmail").click();
  // by class name
  page.locator(".shape-rectangle");
  // by text
  page.locator("text=");
  // by role
  page.locator("role=");
  // by placeholder
  page.locator("placeholder=");
  // by attribute
  page.locator("[placeholder]");
  // by class value
  page.locator("[class='form-control']");
  //combination of locators
  page.locator("input#inputEmail.form-control");
  //by Xpath
  page.locator("//input[@id='inputEmail']"); // we can use Xpath as well but it is not recommended because it is not readable and maintainable
  // by partial text
  page.locator("text=Email*"); // we can use partial text as well but it is not recommended because it is not readable and maintainable
  // by exact text
  page.locator("text=Email*"); // we can use exact text as well but it is not recommended because it is not readable and maintainable
});

test("User-facing locators", async ({ page }) => {
  await page.goto("http://localhost:3000"); // Remplace par ton URL si nécessaire

  // 1. Sélection par rôle + nom visible (champ email)
  await page.getByRole("textbox", { name: "Email" }).first().click();

  // 2. Sélection par rôle + texte (bouton)
  await page.getByRole("button", { name: "Sign in" }).first().click();

  // 3. Sélection par label (champ avec <label>Email</label>)
  await page.getByLabel("Email").first().click();

  // 4. Sélection par placeholder
  await page.getByPlaceholder("Jane Doe").click();

  // 5. Sélection par texte visible exact
  await page.getByText("Using the Grid").click();

  // 6. Sélection par attribut data-testid (recommandé si bien géré dans le HTML)
  await page.getByTestId("SignIn").click();

  // 7. Sélection par title (utilisé parfois dans des icônes, boutons, etc.)
  await page.getByTitle("IoT Dashboard").click();
});

// Tu peux ensuite compléter ton test sur les éléments enfants ici
test("Locating child elements", async ({ page }) => {
  // Exemple : attendre la structure DOM d’un tableau, menu, etc.
});

test("locating child elements", async ({ page }) => {
  await page
    .locator("nb-card")
    .locator("nb-radio")
    .locator(':text-is("Option 1")')
    .click();
  await page.locator;
});

test("the second test", async ({ page }) => {
  await page.getByText("Datepicker").click();
});
