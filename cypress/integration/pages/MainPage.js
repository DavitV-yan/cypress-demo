const loginTitle = "Login";
const userCurrancy = "[data-testid='balance-currency']";
const dropDown = "[data-testid='selectLabel']";
const footballCompetititon = "[href='/sport/Soccer']";
const liveEventsGroup = ".gamesGroup";
const casinoBlocks = ".listBlock";


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

  clickOnSeeAllTitleInLiveEventsBlock(rout){
    cy.get(liveEventsGroup).contains("See all").click();
      cy.location("pathname").should("equal", rout);
  }
  clickOnSeeAllTitleInLiveCasinoBlock(rout){
    cy.get(casinoBlocks).first().contains("See all").click();
      cy.location("pathname").should("equal", rout);
  }
  clickOnSeeAllTitleInCasinoBlock(rout){
    cy.get(casinoBlocks).last().contains("See all").click();
      cy.location("pathname").should("equal", rout);
  }

}

export default MainPage = new MainPage();
