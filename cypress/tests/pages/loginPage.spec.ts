describe('cypress-realworld-app', () => { 

    const selectorsList = { 
        usernameField: '#username',
        passwordField: '#password',
        signInButton: "[type='submit']",
        wrongCredentialAlert: '.MuiAlert-message',

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
    }

    )


})