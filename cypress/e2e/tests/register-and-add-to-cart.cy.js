import { HomePageHelper } from "../pages/home-page/home-page.helper";
import { SignUpPageHelper } from "../pages/sign-up-page/sign-up-page.helper";
import { SignUpPageConstants } from "../pages/sign-up-page/sign-up-page.constants";
import { LoginPageElements } from "../pages/login-page/login-page.elements";
import { LoginPageHelper } from "../pages/login-page/login-page.helper";
import { ItemListPageHelper } from "../pages/items-list-page/item-list-page.helper";
import { ItemDetailHelper } from "../pages/item-detail/item-detail-page.helper";
import { CartPageHelper } from "../pages/cart-page/cart-page.helper";

describe('Register, login and add item to cart', () => {
  it('Register, login and add item to cart successful', () => {
    const userName = SignUpPageHelper.generateRandomUser();
    const userPass = SignUpPageConstants.data.userPass;

    HomePageHelper.navigateToDemoblaze();
    HomePageHelper.clickOnSignUp();
    
    cy.wait(2000);
    SignUpPageHelper.insertUserName(userName);
    cy.wait(2000);
    SignUpPageHelper.insertUserPassword(userPass);
    SignUpPageHelper.clickOnSignUp();

    HomePageHelper.clickOnLogin();
    cy.wait(2000);
    LoginPageHelper.insertUserName(userName);
    cy.wait(2000);
    LoginPageHelper.insertUserPassword(userPass);
    LoginPageHelper.clickOnLogin();

    HomePageHelper.clickOnPhoneSideMenu();
    ItemListPageHelper.clickItem();
    cy.wait(2000);
    ItemDetailHelper.clickOnAddToCart();

    HomePageHelper.clickOnCart();
    CartPageHelper.validateAddedItem();
  })
})