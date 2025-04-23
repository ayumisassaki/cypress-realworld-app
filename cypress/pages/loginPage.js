class LoginPage { 

        selectorsList() {
            const selectors = {
                usernameField: '#username',
                passwordField: '#password',
                signInButton: "[type='submit']",
                wrongCredentialAlert: '.MuiAlert-message',
                signUpButton: "[href='/signup']",
                homePage: '.MuiListSubheader-root',
               
            }

            return selectors 
        }
    
    

        accessLoginPage() {
            cy.visit('http://localhost:3000')
        }

        loginWithAnyUser(username, password) {
            cy.get(this.selectorsList().usernameField).type(username)
            cy.get(this.selectorsList().passwordField).type(password)
            cy.get(this.selectorsList().signInButton).click()

    
        
}

}

export default LoginPage