var test_ele = {
  
  "登录页": "/login?next=%2F",
  "账号输入框": "#login-email",
  "账号": "746832476@qq.com",
  "密码输入框": "#login-password",
  "密码": "******",
  "登录按钮": "#login > button",
}


it('测试登录功能', function login(){
  cy.visit(test_ele.登录页)
  cy.visit(test_ele.登录页)
  cy.get(test_ele.账号输入框)
    .type(test_ele.账号).should('have.value', test_ele.账号)
  cy.get(test_ele.密码输入框)
    .type(test_ele.密码)
  cy.get(test_ele.登录按钮)
    .click()
  cy.wait(1000)
  cy.url()
    .should('eq', 'http://www.eliteu.xyz/')
  cy.log('登录成功')
})

