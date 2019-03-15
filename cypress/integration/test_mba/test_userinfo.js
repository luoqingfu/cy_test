/// <reference types="Cypress" />
var test_ele = {
  '选择': 'body > div.window-wrap > header > div.main-header > nav > div.secondary.login > div.nav-item.hidden-mobile.nav-item-dropdown > div.toggle-user-dropdown > span',
  '用户资料': '#user-menu > div:nth-child(2) > a',
  '选择年份': '#u-field-select-year_of_birth', 
  '账号设置页面': '#u-field-message-account_privacy > span.u-field-message-notification > a',
  '部分资料': '#u-field-select-account_privacy',
  '填写资料框': '#main > div > div > div.wrapper-profile-sections.account-settings-container > div.wrapper-profile-section-container-two > div.wrapper-profile-bio > div > div > div',
  '头像上传': '#main > div > div > div.wrapper-profile-sections.account-settings-container > div.wrapper-profile-section-container-one > div.wrapper-profile-section-one > div.profile-image-field > div > div > div > label > input'
}
context('测试用户资料', () => {
  // Cypress.Cookies.debug(true) 
  // var login = require('./test_login')
  before(() => {
    cy.login()
    
    Cypress.Cookies.preserveOnce('sessionid')
    })
  after(() => {
    cy.clearCookies()
  })
  it.skip('全部资料显示测试', () => {
    cy.log('修改年份为2015年')
    cy.visit('account/settings')
    cy.get(test_ele.选择年份)
      .select('2015')
    cy.get(test_ele.选择)
      .click()
      .get(test_ele.用户资料)
      .click()
    //查看部分资料是否为不能点击
    cy.get(test_ele.部分资料).should('be.disabled')
    cy.contains('账号设置页面。')
    cy.log('修改年份为1995年')
    cy.get(test_ele.账号设置页面)
      .click()
    cy.get(test_ele.选择年份)
      .select('1995')
      cy.get(test_ele.选择)
      .click()
      .get(test_ele.用户资料)
      .click()
    cy.log('显示全部资料')
    //查看部分资料是否为可点击
    cy.get(test_ele.部分资料).should('be.visible')
  })
  
  it.skip('填写资料测试', () => {
    cy.get(test_ele.选择)
      .click()
      .get(test_ele.用户资料)
      .click()
    var mess = parseInt(Math.random()*200,10)
    //这里暂时只做是否可点击处理。因为定位不到输入框
    cy.get(test_ele.填写资料框).should('be.visible')
    //   .click()
    // cy.get('#u-field-value-bio')
    //   .type(mess)
    //   .should('have.text', mess)

  })
  
  it.skip('图片上传', () => {
    cy.get(test_ele.选择)
      .click()
      .get(test_ele.用户资料)
      .click()
    //未能解决图片上传问题，
    var fileName = 'images/xiao.jpeg'
    var fileType = 'png/jpeg'
    var fileInput = test_ele.头像上传
    cy.upload_file(fileName, fileType, fileInput);
    })

})