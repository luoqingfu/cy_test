//所需要的元素
var test_ele = {
  "base_url": "http://www.eliteu.xyz/",
  "登录页": "/login?next=%2F",
  "账号输入框": "#login-email",
  "账号": "746832476@qq.com",
  "密码输入框": "#login-password",
  "密码": "123456",
  "登录按钮": "#login > button",
  "注册按钮": "#login-form > div.toggle-form > a",
  "注册提交": "#register > button",
  "e_error": "#register-form > div.js-form-feedback > div > ul > li:nth-child(1)",
  "au": "#register-form > div.js-form-feedback > div > ul > li:nth-child(2)",
  "u_e": "#register-form > div.js-form-feedback > div > ul > li:nth-child(3)",
  "pwd_e": "#register-form > div.js-form-feedback > div > ul > li:nth-child(4)",
  "c_e": "#register-form > div.js-form-feedback > div > ul > li:nth-child(5)",
  "首页": "body > div.window-wrap > header > div.main-header > h1 > a > img",
  "会员资格": "body > div.window-wrap > header > div.main-header > nav > div.main > div:nth-child(1)",
  "教授": "body > div.window-wrap > header > div.main-header > nav > div.main > div:nth-child(2)",
  "用户协议": "#register > div.required-fields > div.form-field.plaintext-honor_code > span > a:nth-child(1)",
  "免责声明": "#register > div.required-fields > div.form-field.plaintext-honor_code > span > a:nth-child(2)",
  "隐私政策": "#register > div.required-fields > div.form-field.plaintext-honor_code > span > a:nth-child(13)",
  "邮箱输入框": "#register-email",
  "全名输入框": "#register-name",
  "公开用户名输入框": "#register-username",
  "r_密码输入框": "#register-password",
  "r_country": "#register-country",
  "邮箱错误提示语": "#register-email-validation-error-msg",
  "全名错误提示语": "#register-name-validation-error-msg",
  "公开用户名错误提示语": "#register-username-validation-error-msg",
  "密码错误提示语": "#register-password-validation-error-msg",
  "国家选择框": "#register-country",
  "国家选择错误提示语": "#register-country-validation-error-msg",
  "邮箱默认提示": '#register > div.required-fields > div.form-field.email-email > label > span.label-text',
  "全名默认提示": '#register > div.required-fields > div.form-field.text-name > label > span.label-text',
  "公开用户名默认提示": '#register > div.required-fields > div.form-field.text-username > label > span.label-text',
  "密码默认提示": '#register > div.required-fields > div.form-field.password-password > label > span.label-text',
  "国家默认提示": '#register > div.required-fields > div.form-field.select-country > label > span.label-text',
  "选择提供信息": '#toggle_optional_fields',
  "性别": '#register > div.optional-fields > div.form-field.select-gender > label > span.label-text',
  "性别非必填": '#register-gender-optional-label',
  "出生年份": '#register > div.optional-fields > div.form-field.select-year_of_birth > label > span.label-text',
  "出生年份非必填": '#register-year_of_birth-optional-label',
  "最高受教育程度": '#register > div.optional-fields > div.form-field.select-level_of_education > label > span.label-text',
  "最高受教育程度非必填": '#register-level_of_education-optional-label',
  "告诉我们您为何对EliteMBA感兴趣": '#register > div.optional-fields > div.form-field.textarea-goals > label > span.label-text',
  "告诉我们您为何对EliteMBA感兴趣非必填": '#register-goals-optional-label',
  "已注册EliteMBA账号？": '#register-form > div.toggle-form > span',
  "使用以下方式创建账号": '#register > div.login-providers > div > h3 > span',
  "或在此创建一个新账号": '#register > div.section-title.lines > h3 > span',
  "注册即表示同意遵守英荔商学院的": '#register > div.required-fields > div.form-field.plaintext-honor_code > span',
  "提供-文字":'#register > div.form-field.checkbox-optional_fields_toggle > label > span',
  "登录-文字": '#register-form > div.toggle-form > a',

};
//第一次点击注册时的提示文本
var text_context = {
  "email_error": "请输入您的邮箱。",
  "ausername_error": "请输入您的全名。",
  "username_error": "请输入您的公开用户名。",
  "pwd_error": "请输入您的密码。",
  "country_error": "选择您的居住地国家或地区。"
}
//第二次点击登录时的提示文本
var text_context2 = {
  "email_error": "请输入有效的邮箱地址，不少于3个字符。",
  "ausername_error": "请输入您的全名。",
  "username_error": "用户名字符数2到30位。",
  "pwd_error": "这个密码太短了，它必须包含至少6个字符。",
  "country_error": "选择您的居住地国家或地区。"
}
//提示语检查
var text_context3 = {
  "email_e1": "邮箱地址无效。",
  "email_e2": " 已经被注册了。请更换邮箱重试。",
  "已经注册的邮箱": "746832476@qq.com",
  "全名没有填写错误提示": "请输入您的全名。",
  "公开用户名没有填写错误": "用户名字符数2到30位。",
  "重复的公开用户名": "luoqingfu",
  "重复公开用户名错误提示": "已经被注册了。请更换用户名重试。",
  "密码太短提示": "这个密码太短了，它必须包含至少6个字符。",
  "没有选择国家的错误提示": "选择您的居住地国家或地区。",
}

context('测试注册功能', () => {
  beforeEach(() => {
    cy.visit(test_ele.登录页)
    cy.get(test_ele.注册按钮)
      .click()
  })

  it('测试注册页的文本信息', () => {
    // cy.get(test_ele.会员资格)
    //   .should('have.text', '会员资格')
    // cy.get(test_ele.教授)
    //   .should('have.text', '教授')
    cy.get(test_ele["已注册EliteMBA账号？"])
      .should('have.text', '已注册EliteMBA账号？')
    cy.get(test_ele["登录-文字"])
      .should('have.text', '登录')
    cy.get(test_ele.使用以下方式创建账号)
      .should('have.text', '使用以下方式创建账号')
    cy.get(test_ele.或在此创建一个新账号)
      .should('have.text', '或在此创建一个新账号')
    // cy.get(test_ele.注册即表示同意遵守英荔商学院的)
    //   .should('have.text', '注册即表示同意遵守英荔商学院的用户协议、免责声明和隐私政策')
    // cy.get(test_ele["提供-文字"])
    //   .should('have.text', '\**\n 提供您的其他信息，以支持我们的教育研究调查\n \**')
  })

  it('测试注册页面-注册提示（无填写任何信息）', () => {
    
    cy.get(test_ele.注册提交)
      .click()

    cy.get(test_ele.e_error)
      .should('have.text', text_context.email_error)
    cy.get(test_ele.au)
      .should('have.text', text_context.ausername_error)
    cy.get(test_ele.pwd_e)
      .should('have.text', text_context.pwd_error)
    cy.get(test_ele.c_e)
      .should('have.text', text_context.country_error)
    //第二次点击创建按钮
    cy.get(test_ele.注册提交)
      .click()
    cy.get(test_ele.e_error)
      .should('have.text', text_context2.email_error)
    cy.get(test_ele.au)
      .should('have.text', text_context2.ausername_error)
    cy.get(test_ele.pwd_e)
      .should('have.text', text_context2.pwd_error)
    cy.get(test_ele.c_e)
      .should('have.text', text_context2.country_error)
  })

  it('左上角标签回到首页', () => {
    cy.get(test_ele.首页)
      .click()
    // cy.url().should('not.have.value', 'login')
    cy.url()
      .should('eq', test_ele.base_url)
  })

  it('检查会员资格按钮', () => {
    cy.get(test_ele.会员资格)
      .click()
    cy.url()
      .should('include', 'vip')
  })

  it('检查教授按钮', () => {
    cy.get(test_ele.教授)
      .click()
    cy.url()
      .should('include', 'professors')
  })

  it('检查登录链接', () => {
    cy.get(test_ele["登录-文字"])
      .click()
      .url()
      .should('include','login')
  })

  it('检查错误提示', () =>{
    cy.log('检查邮件格式提示是否正确')
    cy.get(test_ele.邮箱输入框)
      .type('111111')
    cy.get(test_ele.全名输入框)
      .click()
    cy.get(test_ele.邮箱错误提示语)
      .should('contain', text_context3.email_e1)

    cy.log('检查邮件已经被注册的提示')
    var repeat_error = text_context3.已经注册的邮箱 + text_context3.email_e2
    console.log(repeat_error)
    cy.get(test_ele.邮箱输入框)
      .clear()
      .type(text_context3.已经注册的邮箱)
    cy.get(test_ele.全名输入框)
      .click()
    cy.get(test_ele.邮箱错误提示语)
      .should('have.text', repeat_error)

    cy.log('检查全名错误提示')
    cy.get(test_ele.全名输入框)
      .click()
    cy.get(test_ele.公开用户名输入框)
    cy.get(test_ele.全名错误提示语)
      .should('have.text', text_context3.全名没有填写错误提示)
    cy.log('公开用户名没有填写错误提示')
    cy.get(test_ele.公开用户名输入框)
      .click()
    cy.get(test_ele.r_密码输入框)
      .click()
    cy.get(test_ele.公开用户名错误提示语)
      .should('have.text', text_context3.公开用户名没有填写错误)
    
    cy.log('公开用户名重复错误')
    var repeat_error = text_context3.重复的公开用户名 + text_context3.重复公开用户名错误提示
    cy.get(test_ele.公开用户名输入框)
      .type(text_context3.重复的公开用户名)
    cy.get(test_ele.r_密码输入框)
      .click()
    cy.get(test_ele.公开用户名错误提示语)
      .should('have.text', repeat_error)
    
    cy.log('密码太短提示')
    cy.get(test_ele.r_密码输入框)
      .click()
    cy.get(test_ele.全名输入框)
      .click()
    cy.get(test_ele.密码错误提示语)
      .should('have.text', text_context3.密码太短提示)
    
    cy.log('没有选择国家的错误提示')
    cy.get(test_ele.国家选择框)
      .select('')
    cy.get(test_ele.r_密码输入框)
      .click()
    cy.get(test_ele.国家选择错误提示语)
      .should('have.text', text_context3.没有选择国家的错误提示)
    cy.log('错误提示检查完毕')
  })
  
  it('输入框中默认的提示语检查', () => {
    cy.get(test_ele.邮箱默认提示)
      .should('have.text', '邮箱')
    cy.get(test_ele.全名默认提示)
      .should('have.text', '全名')
    cy.get(test_ele.公开用户名默认提示)
      .should('have.text','公开用户名')
    cy.get(test_ele.密码默认提示)
      .should('have.text', '密码')
    cy.get(test_ele.国家默认提示)
      .should('have.text', '您所居住的国家或地区')
    cy.log('提示语检查完毕')
  })
  
  it('提供其他信息测试', () => {
    cy.get(test_ele.选择提供信息)
      .click()
    cy.get(test_ele.性别)
      .should('have.text', '性别')
    cy.get(test_ele.性别非必填)
      .should('have.text', '（非必填）')
    
    cy.get(test_ele.出生年份)
      .should('have.text', '出生年份')
    cy.get(test_ele.出生年份非必填)
      .should('have.text', '（非必填）')

    cy.get(test_ele.最高受教育程度)
      .should('have.text', '最高受教育程度')
    cy.get(test_ele.最高受教育程度非必填)
      .should('have.text', '（非必填）')
    
    cy.get(test_ele.告诉我们您为何对EliteMBA感兴趣)
      .should('have.text', '告诉我们您为何对EliteMBA感兴趣')
    cy.get(test_ele.告诉我们您为何对EliteMBA感兴趣非必填)
      .should('have.text', '（非必填）')
  })
  
})
