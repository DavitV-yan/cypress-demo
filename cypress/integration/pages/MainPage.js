const loginTitle = "Login";
const userCurrancy = "[data-testid='balance-currency']";
const dropDown = "[data-testid='selectLabel']";
const footballCompetititon = "[href='/sport/Soccer']";

class MainPage {
  clickOnLoginBtn() {
    cy.contains(loginTitle).click();
  }
  clickOnUserCurrancy() {
    cy.get(userCurrancy).click();
  }
  getUserCurrancy(currency) {
    cy.get(userCurrancy).should("have.text", currency);
  }
  checkLoginTitle() {
    cy.contains(loginTitle).should("be.visible");
  }
  changeAppLanguage(lang) {
    cy.get(dropDown).first().click();
    cy.get(`[data-value="${lang}"]`).click();
  }
  getCompetitionTitle(competition) {
    cy.get(footballCompetititon).should("have.text", competition);
  }
  changeOddsFormat(oddsFormat) {
    cy.get(dropDown).last().click();
    cy.get(`[data-value="odds_${oddsFormat}"]`).click();
  }
}

export default MainPage = new MainPage();
