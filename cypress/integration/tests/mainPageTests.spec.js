/// <reference types="cypress" />

import mainPage from "../pages/MainPage";

const language = ["arm", "eng", "rus"];
const footballTitle = ["Ֆուտբոլ", "Football", "Футбол"];
const oddsFormat = ["decimal", "fractional", "american", "hongKong", "malay", "indo"];


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
  it("CHange odds format to Decimal", () => {
    mainPage.changeOddsFormat(oddsFormat[0]);
  });
  it("CHange odds format to Fractional", () => {
    mainPage.changeOddsFormat(oddsFormat[1]);
  });
  it("CHange odds format to American", () => {
    mainPage.changeOddsFormat(oddsFormat[2]);
  });
  it("CHange odds format to HongKong", () => {
    mainPage.changeOddsFormat(oddsFormat[3]);
  });
  it("CHange odds format to Malay", () => {
    mainPage.changeOddsFormat(oddsFormat[4]);
  });
  it("CHange odds format to Indo", () => {
    mainPage.changeOddsFormat(oddsFormat[5]);
  });
});
