class AutoStore_HairCare_Homepage_PO {
  addHairCareProductsToBasket() {
    globalThis.data.productName.forEach(function (element) {
      cy.addProductToBasket(element).then(() => {
        // debugger;
      });
    });
    cy.get(".dropdown-toggle > .fa").click().debug();
  }
}

export default AutoStore_HairCare_Homepage_PO;
