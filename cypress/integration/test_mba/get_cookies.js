/// <reference types="Cypress" />
var test_ele = {
  "base_url": "http://www.eliteu.xyz/",
  "登录页": "/login?next=%2F",
  "账号输入框": "#login-email",
  "账号": "755682146@qq.com",
  "密码输入框": "#login-password",
  "密码": "123456",
  "登录按钮": "#login > button",
}


context('获取浏览器cookies', () => {
  
  
  beforeEach(() => {
    Cypress.Cookies.debug(true)
    cy.visit(test_ele.登录页)
    //cy.clearCookies()
  })
  it.skip('get_cookies', () => {
    cy.get(test_ele.账号输入框)
      .type(test_ele.账号).should('have.value', test_ele.账号)
    cy.get(test_ele.密码输入框)
      .type(test_ele.密码)
    cy.get(test_ele.登录按钮)
      .click()
    // cy.getCookie('experiments_is_enterprise')
    
    console.log(cy.getCookie('experiments_is_enterprise'), '测试')

    cy.setCookie('experiments_is_enterprise', 'true')
    //cy.setCookie('experiments_is_enterprise', c)
    // cy.getCookies().should('have.length', 1).should((cookies) => {

    //   // each cookie has these properties
    //   expect(cookies[0]).to.have.property('name', 'token')
    //   expect(cookies[0]).to.have.property('value', '123ABC')
    //   expect(cookies[0]).to.have.property('httpOnly', false)
    //   expect(cookies[0]).to.have.property('secure', false)
    //   expect(cookies[0]).to.have.property('domain')
    //   expect(cookies[0]).to.have.property('path')
    // })
    
    // cy.setCookie('edx-user-info', c)
    
  })


})