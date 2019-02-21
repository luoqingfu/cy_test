describe('百毒网站首页测试用例集', function() {
    beforeEach(() => {
          cy.visit('https://www.baidu.com')
        })
      it('百度一下按钮文本检查', function() {
        cy.get("#su").then($button_start_search=>{
            expect($button_start_search.attr("value")).to.eq("百度一下");
        })
      })
    })