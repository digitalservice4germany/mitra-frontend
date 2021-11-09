describe("Starting new contract", () => {
  it("should be reachable from start page", () => {
    cy.visit("/")
    cy.get("a").contains("Neuer Vertrag").click()
    cy.get("a").should("not.exist") // navigated away
    cy.contains("Abschnitt 1")
    cy.contains("Abschnitt 2")
  })
})
