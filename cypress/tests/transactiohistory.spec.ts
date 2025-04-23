import LoginPage from '../pages/loginPage.js'
import userData from '../fixtures/userData.json'
import TransactionHistoryPage from '../pages/transactionhistoryPage.js'

const loginPage = new LoginPage()
const transactionHistoryPage = new TransactionHistoryPage()
        
 
  const selectorsList = {

      mineButton:"[href='/personal']",
      friendsButton: '[data-test="nav-contacts-tab"]',
      transactionList: '.css-1lkof1e-MuiTypography-root', 
      headerTransactionDetail: "[data-test='transaction-detail-header']",
      noTransactionsAlert: '.css-mpyo7s-MuiTypography-root',
  }

describe('check transaction history with success', () => {
    it('it should display users transaction history correctly', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        cy.get(selectorsList.mineButton).click()
        cy.get(selectorsList.transactionList).eq(0).click()
        cy.get(selectorsList.headerTransactionDetail).contains('Transaction Detail')
        // loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        // transactionHistoryPage.checktransactionsuccess()
    
    });
  });

  describe('try to check transaction history without success', () => {
    it('it should display a message indicating that the user has no previous transactions', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.newUser.username, userData.newUser.password)
        cy.get(selectorsList.friendsButton).click()
        transactionHistoryPage.checknotransaction()

    });
  });