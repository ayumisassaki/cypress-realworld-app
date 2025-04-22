import LoginPage from '../pages/loginPage.js'
import RegistrationPage from '../pages/registrationPage'
import userData from '../fixtures/userData.json'


const loginPage = new LoginPage()
const  registrationPage = new RegistrationPage()

const selectorsList = {
    wrongCredentialAlert: '.MuiAlert-message',
    signInPage: '.css-nhtccy-MuiTypography-root',
    homePage: '.MuiListSubheader-sticky',

}

describe('Register success', () => {
    it('Register new user with valid credentials', () => {
        loginPage.accessLoginPage()
        registrationPage.fillUserRegistrationInfo ('firstname', 'lastname' ,'username', 's3cret', 's3cret')
        cy.get(selectorsList.signInPage).contains('Sign in')
    })

})

describe('Register fail', () => {
    it('error message trying to register with missing information', ()=> {
        loginPage.accessLoginPage()
        registrationPage.emptyUserRegistrationInfo()
        registrationPage.checkUserRegistrationFail()
    })
})


describe('register bank account', () => { 
    it('register bank credentials', () => { 
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.newUser.username,userData.newUser.password)
        registrationPage.formBankAccount()
    })
})   
