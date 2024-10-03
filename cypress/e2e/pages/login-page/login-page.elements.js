export class LoginPageElements{
    static get elements(){
        return{
            get userName(){
                return cy.get('input#loginusername');
            },
            get userPassword(){
                return cy.get('input#loginpassword');
            },
            get loginButton(){
                return cy.contains('button', 'Log in');
            },
            get userLogged(){
                return cy.get('a#nameofuser');
            }
        }
      
    }
}