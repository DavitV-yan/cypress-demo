/// <reference types="cypress" />

import mainPage from "../pages/MainPage";
import sportPage from "../pages/SportPage";

const language = ["arm", "eng", "rus"];
const footballTitle = ["Ֆուտբոլ", "Football", "Футбол"];
const oddsFormat = [
  "decimal",
  "fractional",
  "american",
  "hongKong",
  "malay",
  "indo",
];

describe("Change app language tests", () => {
  it("Change app language to Armenian", () => {
    mainPage.changeAppLanguage(language[0]);
    mainPage.getCompetitionTitle(footballTitle[0]);
  });
  it("Change app language to English", () => {
    mainPage.changeAppLanguage(language[1]);
    mainPage.getCompetitionTitle(footballTitle[1]);
  });
  it("Change app language to Russian", () => {
    mainPage.changeAppLanguage(language[2]);
    mainPage.getCompetitionTitle(footballTitle[2]);
  });
});

describe("Change app odds format", () => {
  //Overided before method
  beforeEach(() => {
    cy.visit("http://localhost:3000/sport/Soccer/Spain/545");
    window.sessionStorage.clear();
  });

  it("Change odds format to Decimal", () => {
    mainPage.changeOddsFormat(oddsFormat[0]);
    sportPage.checkW1MarketOddsFormat(".");
  });
  it("Change odds format to Fractional", () => {
    mainPage.changeOddsFormat(oddsFormat[1]);
    sportPage.checkW1MarketOddsFormat("/");
  });
  it("Change odds format to American", () => {
    mainPage.changeOddsFormat(oddsFormat[2]);
    sportPage.checkW1MarketOddsFormat("+");
  });
  it("Change odds format to HongKong", () => {
    mainPage.changeOddsFormat(oddsFormat[3]);
    sportPage.checkW1MarketOddsFormat(".");
  });
  it("Change odds format to Malay", () => {
    mainPage.changeOddsFormat(oddsFormat[4]);
    sportPage.checkW1MarketOddsFormat("-");
  });
  it("Change odds format to Indo", () => {
    mainPage.changeOddsFormat(oddsFormat[5]);
    sportPage.checkW1MarketOddsFormat("-");
  });
});
