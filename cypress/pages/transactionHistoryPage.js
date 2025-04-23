class TransactionHistoryPage {

    selectorsList() {
        const selectors = {
    
            mineButton:"[href='/personal']",
            transactionList: '.css-1lkof1e-MuiTypography-root', 
            headerTransactionDetail: "[data-test='transaction-detail-header']",
            noTransactionsAlert: '.css-mpyo7s-MuiTypography-root',
            friendsButton: '[data-test="nav-contacts-tab"]'

        }
        return selectors 
    }

        checktransactionsuccess(){
        cy.get(this.selectorsList().mineButton).click()
        cy.get(this.selectorsList().transactionList).eq(0).click()
        cy.get(this.selectorsList().headerTransactionDetail).contains('Transaction Detail')
        }

        checknotransaction() {
        cy.get(this.selectorsList().noTransactionsAlert).contains('No Transactions')
        }
}

    export default TransactionHistoryPage
