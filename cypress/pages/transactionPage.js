class  TransactionPage {

    selectorsList() {
        const selectors = {
            newTransactionButton: '.MuiButton-containedInherit',
            homePage: '.MuiListSubheader-sticky',
            userlist: '[data-test="user-list-item-uBmeaz5pX"]',
            amountField: "[name='amount']",
            noteField: "[placeholder='Add a note']",
            submitPayButton: "button[data-test='transaction-create-submit-payment']",
            sucessTransactionAlert: '[data-test="alert-bar-success"]',

            }
        
            return selectors 
        }

        sendMoneySuccess() {
            cy.get(this.selectorsList().homePage).contains('Public')
            cy.get(this.selectorsList().newTransactionButton).click()
            cy.get(this.selectorsList().userlist).click({force: true})
            cy.get(this.selectorsList().amountField).type('100')
            cy.get(this.selectorsList().noteField).type('note')
            cy.get(this.selectorsList().submitPayButton).click()
            
        }

        checkSuccessTransactionAllert() {
            cy.get(this.selectorsList().sucessTransactionAlert).contains('Transaction Submitted')
        }


}

export default TransactionPage