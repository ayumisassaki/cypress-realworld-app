class RegistrationPage {
   
    selectorsList() {
    const selectors = {
        signUpButton: "[href='/signup']",
        firstNameRegistrationField: "#firstName", 
        lastNameRegistrationField: "#lastName",
        usernameRegistrationField: "[name='username']",
        passwordRegistrationField: "[name='password']",
        passwordconfirmField: "[name='confirmPassword']",
        registrationSubmitButton: '.MuiButton-root',
        firstNameAlert: '#firstName-helper-text',
        lastNameAlert: '#lastName-helper-text',
        userNameAlert: '#username-helper-text',
        passwordAlert: '#password-helper-text',
        confirmPasswordAlert: '#confirmPassword-helper-text',
        bankNameField:"[placeholder='Bank Name']",
        routingNumberField: "[placeholder='Routing Number']",
        accountNumberField: "[placeholder='Account Number']",
        bankAccountFormSubmitButton: ".BankAccountForm-submit",
        doneButton: ".MuiButton-colorPrimary",
        bankAccountButton:'[data-test="sidenav-bankaccounts"]',
        createbankAccountButton: '[data-test="bankaccount-new"]',
        bankaccountcheck: '.css-mpyo7s-MuiTypography-root'
    }

        return selectors
    }


    

    fillUserRegistrationInfo(firstName, lastName, username,password,confirmationpassword) {
        cy.get(this.selectorsList().signUpButton).click()
        cy.get(this.selectorsList().firstNameRegistrationField).type(firstName)
        cy.get(this.selectorsList().lastNameRegistrationField).type(lastName)
        cy.get(this.selectorsList().usernameRegistrationField).type(username)
        cy.get(this.selectorsList().passwordRegistrationField).type(password)
        cy.get(this.selectorsList().passwordconfirmField).type(password)
        cy.get(this.selectorsList().registrationSubmitButton).click()
                

    }

    emptyUserRegistrationInfo() {
        cy.get(this.selectorsList().signUpButton).click()
        cy.get(this.selectorsList().firstNameRegistrationField).click()
        cy.get(this.selectorsList().lastNameRegistrationField).click()
        cy.get(this.selectorsList().usernameRegistrationField).click()
        cy.get(this.selectorsList().passwordRegistrationField).click()
        cy.get(this.selectorsList().passwordconfirmField).click()
        cy.get(this.selectorsList().firstNameRegistrationField).click()

    }

    checkUserRegistrationFail() {

        cy.get(this.selectorsList().firstNameAlert)
        cy.get(this.selectorsList().lastNameAlert)
        cy.get(this.selectorsList().userNameAlert)
        cy.get(this.selectorsList().passwordAlert)
        cy.get(this.selectorsList().confirmPasswordAlert)
    }

    formBankAccount() {
        cy.get(this.selectorsList().bankAccountButton).click()
        cy.get(this.selectorsList().createbankAccountButton).click()
        cy.get(this.selectorsList().bankNameField).type('bankaccount')
        cy.get(this.selectorsList().routingNumberField).type(123456789)
        cy.get(this.selectorsList().accountNumberField).type(123456789)
        cy.get(this.selectorsList().bankAccountFormSubmitButton).click()
        cy.get(this.selectorsList().bankaccountcheck).contains('Bank Accounts')
        
    }





}

export default RegistrationPage 