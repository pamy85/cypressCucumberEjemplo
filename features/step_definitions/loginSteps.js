import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the login page", () => {
  cy.visit("https://ejemploPruebaEntrevista.com/login");
});

When("I fill in the login form with valid credentials", () => {
  cy.get('input[name="username"]').type("usuarioEjemplo");
  cy.get('input[name="password"]').type("contraseñaSegura123");
  cy.get('button[type="submit"]').click();
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should("include", "/dashboard");
});

When("I fill in the login form with invalid credentials", () => {
  cy.get('input[name="username"]').type("usuarioFalso");
  cy.get('input[name="password"]').type("claveIncorrecta");
  cy.get('button[type="submit"]').click();
});

Then("I should see an error message", () => {
  cy.contains("Credenciales inválidas").should("be.visible");
});

When("I submit the login form without filling any fields", () => {
  cy.get('button[type="submit"]').click();
});

Then("I should see validation messages", () => {
  cy.contains("El usuario es obligatorio").should("be.visible");
  cy.contains("La contraseña es obligatoria").should("be.visible");
});