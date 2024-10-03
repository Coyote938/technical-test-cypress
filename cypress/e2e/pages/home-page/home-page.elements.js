export class HomePageElements{
    static get topMenu(){
        return{
            get signUp(){
                return cy.get('a[data-target="#signInModal"]');
            },
            get login(){
                return cy.get('a[data-target="#logInModal"]');
            },
            get cart(){
                return cy.get('a#cartur');
            }
        }
      
    }
    static get sideMenu(){
        return{
            get optionPhones(){
                return cy.contains('a', 'Phones');
            }
        }
    }
}