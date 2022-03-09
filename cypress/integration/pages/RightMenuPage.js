const logoutTitle = "[data-testid='logout']";

class RightMenuPage{

    clickOnLogout(){
        cy.get(logoutTitle).click();
    }

}

export default RightMenuPage = new RightMenuPage();