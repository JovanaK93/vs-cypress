/// <reference types = "Cypress" />

import { addBoard } from "../page_object/addBoard";
import { loginPage } from "../page_object/login";
import { deleteBoard } from "../page_object/deleteBoard";

describe("delete board", () => {
  beforeEach("My organization home page", () => {
    cy.visit("/login");
    loginPage.login(Cypress.env("loginEmail"), Cypress.env("loginPassword"));
    
  });
  it("delete board", () => {
    addBoard.organizationHomePage.click();
    deleteBoard.Header.should("be.visible");
    deleteBoard.settingsButton.click();
    cy.wait(2000);
    deleteBoard.deleteButton.click();
    deleteBoard.confirmButton.click();
  });
});
