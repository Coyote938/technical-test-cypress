import { LoginPageElements } from "./login-page.elements";

export class LoginPageHelper{
    static insertUserName(userName){
        LoginPageElements.elements.userName.type(userName);
    }

    static insertUserPassword(userPass){
        LoginPageElements.elements.userPassword.type(userPass);
    }

    static clickOnLogin(){
        LoginPageElements.elements.loginButton.click();
    }

    static validateLogin(){
        LoginPageElements.elements.userName.should('exist');
    }
}