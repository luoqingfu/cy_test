/// <reference types="Cypress" />
context('测试用', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('测试json文件', () => {
    var c = cy.fixture('example.json').as('name')
    cy.log(c)
  })
})