import { SignUpPageElements } from "./sign-up-page.elements";


export class SignUpPageHelper{
    static generateRandomUser = (length = 7) =>{
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
        }
        return result;
    }

    static insertUserName(userName){
        SignUpPageElements.elements.userName.type(userName);
    }

    static insertUserPassword(userPass){
        SignUpPageElements.elements.userPassword.type(userPass);
    }

    static clickOnSignUp(){
        SignUpPageElements.elements.signUpButton.click();
    }
}