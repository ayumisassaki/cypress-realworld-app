import userDATA from '../fixtures/userData.json'

describe('RWA login Page', () => { 

    const selectorsList = { 
        usernameField: '#username',
        passwordField: '#password',
        signInButton: "[type='submit']",
        wrongCredentialAlert: '.MuiAlert-message',
        signUpButton: "[href='/signup']",
        firstNameRegistrationField: "#firstName", 
        lastNameRegistrationField: "#lastName",
        usernameRegistrationField: "[name='username']",
        passwordRegistrationField: "[name='password']",
        passwordconfirmField: "[name='confirmPassword']",
        registrationSubmitButton: '.SignUpForm-form',
        lastNameAlert: '#lastName-helper-text'
    }

    const userData = {
        userSuccess: { 
            username: 'Arvilla_Hegmann' ,
            password: 's3cret'
        }, 
        
        userFail: {
            username: 'teste' ,
            password: 'fail'
        }

    }
    it('Login with success', () => { 
        cy.visit ('http://localhost:3000/signin')
        cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
        cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
        cy.get(selectorsList.signInButton).click()
 } )

    it('Login Fail', () => {
        cy.visit ('http://localhost:3000/signin')
        cy.get(selectorsList.usernameField).type(userData.userFail.username)
        cy.get(selectorsList.passwordField).type(userData.userFail.password)
        cy.get(selectorsList.signInButton).click()
        cy.get(selectorsList.wrongCredentialAlert)
    })

    it('Register new user with valid credentials', () => {
       
        cy.visit ('http://localhost:3000/signin')
        cy.get(selectorsList.signUpButton).click()
        cy.get(selectorsList.firstNameRegistrationField).type('firstName') 
        cy.get(selectorsList.lastNameRegistrationField).type('lastName')
        cy.get(selectorsList.usernameRegistrationField).type('usernameregister')
        cy.get(selectorsList.passwordRegistrationField).type('password')
        cy.get(selectorsList.passwordconfirmField).type('password')
        cy.get(selectorsList.registrationSubmitButton).click()
    });

    describe('Try to register with missing information', () => {
        it('it should display error messages when trying to register a new user without filling in all mandatory information', () => {
            
            cy.visit ('http://localhost:3000/signin')
            cy.get(selectorsList.signUpButton).click()
            cy.get(selectorsList.firstNameRegistrationField).type('firstName')
            cy.get(selectorsList.usernameRegistrationField).type('usernameregister')
            cy.get(selectorsList.passwordRegistrationField).type('password')
            cy.get(selectorsList.passwordconfirmField).type('password')
            cy.get(selectorsList.lastNameRegistrationField).click() 
            cy.get(selectorsList.passwordconfirmField).click()
            cy.get(selectorsList.lastNameAlert).should('contain', 'Last Name is required')
        });
      });

})