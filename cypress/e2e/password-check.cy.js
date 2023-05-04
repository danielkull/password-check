/// <reference types="cypress" />

describe("Password check", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Test to enter text in both input fields", () => {
    cy.get('[data-cy="first-password"]').should("have.value", "");
    cy.get('[data-cy="second-password"]').should("have.value", "");
    cy.get('[data-cy="first-password"]')
      .type("Test")
      .should("not.have.value", "");
    cy.get('[data-cy="second-password"]')
      .type("Test")
      .should("not.have.value", "");
  });

  it("Test if 'Show Password' toggle button is working", () => {
    // cy.get('[data-cy="password-form__btn-toggle"]').should("have.text", "Show Password")

    cy.get('[data-cy="first-password"]').should(
      "have.prop",
      "type",
      "password"
    );
    cy.get('[data-cy="second-password"]').should(
      "have.prop",
      "type",
      "password"
    );

    // cy.get('[data-cy="password-form__btn-toggle"]').should("have.text", 'Show\n                Password')
    cy.get('[data-cy="password-form__btn-toggle"]').click();

    cy.get('[data-cy="first-password"]').should("have.prop", "type", "text");
    cy.get('[data-cy="second-password"]').should("have.prop", "type", "text");
  });

  it("Passwords are equal", () => {
    const passwordTest = "ZuperDasTestPasswort";
    cy.get('[data-cy="first-password"]').type("passwordTest");
    cy.get('[data-cy="second-password"]').type("Test");
    cy.get('[data-cy="check-equal"]').should("have.text", "❌");
    cy.get('[data-cy="first-password"]').clear();
    cy.get('[data-cy="second-password"]').clear();

    cy.get('[data-cy="first-password"]')
      .type(passwordTest)
      .should("have.value", passwordTest);
    cy.get('[data-cy="second-password"]')
      .type(passwordTest)
      .should("have.value", passwordTest);
    cy.get('[data-cy="check-equal"]').should("have.text", "✅");
  });

  it("Password contains at least one lower case character", () => {
    cy.get('[data-cy="check-lower-case"]').should("have.text", "❌");
    cy.get('[data-cy="first-password"]').type("TEST");
    cy.get('[data-cy="second-password"]').type("TEST");
    cy.get('[data-cy="check-lower-case"]').should("have.text", "❌");
    cy.get('[data-cy="first-password"]').type("t");
    cy.get('[data-cy="second-password"]').type("t");
    cy.get('[data-cy="check-lower-case"]').should("have.text", "✅");
  });

  it("Password contains at least one upper case character", () => {
    cy.get('[data-cy="check-upper-case"]').should("have.text", "❌");
    cy.get('[data-cy="first-password"]').type("test");
    cy.get('[data-cy="second-password"]').type("test");
    cy.get('[data-cy="check-upper-case"]').should("have.text", "❌");
    cy.get('[data-cy="first-password"]').type("T");
    cy.get('[data-cy="second-password"]').type("T");
    cy.get('[data-cy="check-upper-case"]').should("have.text", "✅");
  });

  it("Password contains at least one number", () => {
    cy.get('[data-cy="check-numbers"]').should("have.text", "❌");
    cy.get('[data-cy="first-password"]').type("test");
    cy.get('[data-cy="second-password"]').type("test");
    cy.get('[data-cy="check-numbers"]').should("have.text", "❌");
    cy.get('[data-cy="first-password"]').type("2");
    cy.get('[data-cy="second-password"]').type("2");
    cy.get('[data-cy="check-numbers"]').should("have.text", "✅");
  });

  it("Passwort is at least 10 characters long", () => {
    cy.get('[data-cy="check-for-ten-characters"]').should("have.text", "❌");
    cy.get('[data-cy="first-password"]').type("Test5test");
    cy.get('[data-cy="second-password"]').type("Test5test");
    cy.get('[data-cy="check-for-ten-characters"]').should("have.text", "❌");
    cy.get('[data-cy="first-password"]').type("T");
    cy.get('[data-cy="second-password"]').type("T");
    cy.get('[data-cy="check-for-ten-characters"]').should("have.text", "✅");
  });
});
