/// <reference types="cypress" />

import mainPage from "../pages/MainPage";
import loginPage from "../pages/LoginPage";
import rightMenuPage from "../pages/RightMenuPage";

const userEmail = "davit.vardanyan@betconstruct.com";
const userPassword = "Test1234";
const amdCurrancy = "AMD";

describe("Login tests", () => {
  it("Login with valid cregentials", () => {
    mainPage.clickOnLoginBtn();
    loginPage.fillInEmailField(userEmail);
    loginPage.fillInPasswordField(userPassword);
    loginPage.clickOnSignInBtn();
    mainPage.getUserCurrancy(amdCurrancy);
    mainPage.clickOnUserCurrancy();
    rightMenuPage.clickOnLogout();
    mainPage.checkLoginTitle();
  });

  it("Login with invalid username and valid password", () => {
    mainPage.clickOnLoginBtn();
    loginPage.fillInEmailField(userPassword);
    loginPage.fillInPasswordField(userPassword);
    loginPage.clickOnSignInBtn();
    loginPage.checkErrorMessage();
  });

  it("Login with valid username and invalid password", () => {
    mainPage.clickOnLoginBtn();
    loginPage.fillInEmailField(userEmail);
    loginPage.fillInPasswordField(userEmail);
    loginPage.clickOnSignInBtn();
    loginPage.checkErrorMessage();
  });
});
