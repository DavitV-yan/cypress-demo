const emailField = "#userName";
const passwordField = "#password";
const signInTitle = "sign_in";
const errorMessage = ".danger > p";

class LoginPage {
  fillInEmailField(userEmail) {
    cy.get(emailField).type(userEmail);
  }
  fillInPasswordField(userPassword) {
    cy.get(passwordField).type(userPassword);
  }

  clickOnSignInBtn() {
    cy.contains(signInTitle).click();
  }
  checkErrorMessage() {
    cy.get(errorMessage).should("be.visible");
  }
}

export default LoginPage = new LoginPage();
