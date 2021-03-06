// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('upload_file', (fileName, fileType = ' ', selector) => {
  cy.get(selector).then(subject => {
    cy.fixture(fileName, 'base64')
      .then(Cypress.Blob.base64StringToBlob)
      .then(blob => {
        const el = subject[0]
        const testFile = new File([blob], fileName, { type: fileType })
        const dataTransfer = new DataTransfer()
        dataTransfer.items.add(testFile)
        el.files = dataTransfer.files
      })
  })
})
//加入登录commands
Cypress.Commands.add('login', () =>{
  var test_ele = {
  
    "登录页": "/login?next=%2F",
    "账号输入框": "#login-email",
    "账号": "746832476@qq.com",
    "密码输入框": "#login-password",
    "密码": "******",
    "登录按钮": "#login > button",
  }
  cy.visit(test_ele.登录页)
  cy.get(test_ele.账号输入框)
    .type(test_ele.账号).should('have.value', test_ele.账号)
  cy.get(test_ele.密码输入框)
    .type(test_ele.密码)
  cy.get(test_ele.登录按钮)
    .click()
})
