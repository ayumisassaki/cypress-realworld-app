import LoginPage from '../pages/loginPage.js'
import userData from '../fixtures/userData.json'
import TransactionPage from '../pages/transactionPage.js'
   
const loginPage = new LoginPage()
const transactionPage =  new TransactionPage()

    
describe("RWA Tests", () => {

  const selectorsList = {
    newTransactionButton: '.MuiButton-containedInherit',
    homePage: '.MuiListSubheader-sticky',
    userlist: '[data-test="user-list-item-_XblMqbuoP"]',
    amountField: "[name='amount']",
    noteField: "[placeholder='Add a note']",
    submitPayButton: "button[data-test='transaction-create-submit-payment']",
    sucessTransactionAlert: '[data-test="alert-bar-success"]',
   }
  
    beforeEach(() => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        });



    describe('send money with sufficient funds', () => {
    
        it('send money success', () => {
        transactionPage.sendMoneySuccess()
        });

    // describe('send money without sufficient funds', () => {
    
    //         it('send money fail', () => {
    //             cy.get(selectorsList.homePage).contains('Public')
    //             cy.get(selectorsList.newTransactionButton).click()
    //             cy.get(selectorsList.userlist).click()
    //             cy. get(selectorsList.amountField).type('100')
    //             cy. get(selectorsList.noteField).type('note')
    //             cy.get(selectorsList.submitPayButton).click()
                
    //         });

    })




})