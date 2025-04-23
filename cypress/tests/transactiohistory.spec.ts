import LoginPage from '../pages/loginPage.js'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage()

const selectorsList = {
        mineButton: "[href='/personal']",
        transactionList: '.css-1lkof1e-MuiTypography-root', 
        headerTransactionDetail: "[data-test='transaction-detail-header']",
        noTransactionsAlert: '.css-mpyo7s-MuiTypography-root',
}

beforeEach(() => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    });

describe('check transaction history with success', () => {
    it('it should display users transaction history correctly', () => {
    
        cy.get(selectorsList.mineButton).click()
        cy.get(selectorsList.noTransactionsAlert).contains('No Transactions')
    
    });
  });

  describe('try to check transaction history without success', () => {
    it('it should display a message indicating that the user has no previous transactions', () => {
        cy.get(selectorsList.mineButton).click()
    });
  });