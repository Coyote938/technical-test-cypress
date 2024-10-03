import { ItemListPageConstants } from "../items-list-page/item-list-page.constants";

export class CartPageElements{
    static get elements(){
        return{
            get itemNameValidate(){
                return cy.contains('td', `${ItemListPageConstants.data.itemName}`);
            }
        }
      
    }

}