import {HomePageElements} from "./home-page.elements";
export class HomePageHelper{
    static navigateToDemoblaze(){
        cy.visit("https://www.demoblaze.com/");
    }

    static clickOnSignUp(){
        HomePageElements.topMenu.signUp.click();
    }

    static clickOnLogin(){
        HomePageElements.topMenu.login.click();
    }

    static clickOnPhoneSideMenu(){
        HomePageElements.sideMenu.optionPhones.click();
    }

    static clickOnCart(){
        HomePageElements.topMenu.cart.click();
    }
}