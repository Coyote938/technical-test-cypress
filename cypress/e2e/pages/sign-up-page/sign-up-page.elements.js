export class SignUpPageElements{
    static get elements(){
        return{
            get userName(){
                return cy.get('input#sign-username');
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