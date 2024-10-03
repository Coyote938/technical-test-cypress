import { ItemListPageConstants } from "./item-list-page.constants";

export class ItemListPageElements{
    static get elements(){
        return{
            get itemNameButton(){
                return cy.contains('a', `${ItemListPageConstants.data.itemName}`);
            },
            get userPassword(){
                return cy.get('input#sign-password');
            },
            get signUpButton(){
                return cy.contains('button', 'Sign up');
            }
        }
      
    }

}