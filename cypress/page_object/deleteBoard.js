class DeleteBoard {
    get settingsButton() {
      return cy.get(".vs-c-site-logo").eq(10);
    }
    get Header() {
      return cy.get(".vs-c-col__head");
    }
    get deleteButton() {
      return cy.get(".vs-c-btn--warning").last();
    }

    get confirmButton() {
        return cy.get(".vs-c-modal").find("button").last();
    }
  }
  
  export const deleteBoard = new DeleteBoard();
