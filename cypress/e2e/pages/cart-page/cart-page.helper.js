import { CartPageElements } from "./cart-page.elements";


export class CartPageHelper{
 
    static validateAddedItem(){
        CartPageElements.elements.itemNameValidate.should('exist');
    }
}