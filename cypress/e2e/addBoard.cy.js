/// <reference types = "Cypress" />

import { addBoard } from "../page_object/addBoard";
import { faker } from "@faker-js/faker";
import { loginPage } from "../page_object/login";
describe("add board", () => {
  beforeEach("My organization home page", () => {
    cy.visit("/login");
    loginPage.login(Cypress.env("loginEmail"), Cypress.env("loginPassword"));
  });
  it("add new board", () => {
    addBoard.organizationHomePage.click();
    loginPage.searchButton.should("be.visible").and("exist");
    addBoard.organizationHomePageHeading
    .should("exist")
    .and("have.css", "color", "rgb(255, 255, 255)");
    // u jednom trenutku je ovaj kod trebao a u drugom vec ne
    cy.get('button').contains("OK").click();
    addBoard.addNewBoard.click();
    addBoard.boardName.type(faker.name.firstName());
    addBoard.nextButton.click();
    addBoard.kanbanSelect.click();
    addBoard.nextButton.click();
    addBoard.nextButton.click();
    addBoard.nextButton.click();
  });
});
