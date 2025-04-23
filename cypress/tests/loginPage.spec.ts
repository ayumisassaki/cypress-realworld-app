import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

const selectorsList = {
    wrongCredentialAlert: '.MuiAlert-message',
    homePage: '.MuiListSubheader-sticky'
    }


describe('Login Success', () => { 
    it('login with a valid user', () => { 
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username,userData.userSuccess.password)
        cy.get(selectorsList.homePage).contains('Public')
    })
})   

describe('Login with invalid credential', () => {
    it('invalid username or password message should appear". ', ()  => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser (userData.userFail.username, userData.userFail.password)
        cy.get(selectorsList.wrongCredentialAlert)
    })

})


//     describe('Try to register with missing information', () => {
//         it('it should display error messages when trying to register a new user without filling in all mandatory information', () => {
            
//             cy.visit ('http://localhost:3000/signin')
//             cy.get(selectorsList.signUpButton).click()
//             cy.get(selectorsList.firstNameRegistrationField).type('firstName')
//             cy.get(selectorsList.usernameRegistrationField).type('usernameregister')
//             cy.get(selectorsList.passwordRegistrationField).type('password')
//             cy.get(selectorsList.passwordconfirmField).type('password')
//             cy.get(selectorsList.lastNameRegistrationField).click() 
//             cy.get(selectorsList.passwordconfirmField).click()
//             cy.get(selectorsList.lastNameAlert).should('contain', 'Last Name is required')
//         });
//       });

// })