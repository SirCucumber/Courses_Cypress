/// <reference types="Cypress" />

describe("Test File Upload via webdriveruni", () => {
  it("Upload a file....", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });

    cy.fixture("cucumber.png", "base64").then((fileContent) => {
      cy.get("#myFile").attachFile(
        {
          fileContent,
          fileName: "cucumber.png",
          mimeType: "image/png",
        },
        {
          uploadFile: "input",
        }
      );
    });
    cy.get("#submit-button").click();
  });

  it("Upload no file....", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
    cy.get("#submit-button").click();
  });
});
