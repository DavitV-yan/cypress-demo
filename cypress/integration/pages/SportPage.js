const w1Market = ".marketContainer > div > span";
class SportPage {
  checkW1MarketOddsFormat(val) {
    cy.get(w1Market).should("contain.text", val);
  }
}

export default SportPage = new SportPage();
