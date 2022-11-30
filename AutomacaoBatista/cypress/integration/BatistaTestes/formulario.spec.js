/// <reference types="Cypress" />






it('visita url...', () => {

    cy.visit('https://automacaocombatista.herokuapp.com/users/new')
    cy.get('#user_name').type('Tiago')
    cy.get('#user_lastname').type('Garcia')
    cy.get('#user_email').type('tiago@tiago.com')
    cy.get('#user_address').type('rua rui ramos 193')
    cy.get('#user_university').type('Uninter')
    cy.get('#user_profile').type('qa')
    cy.get('#user_gender').type('male')
    cy.get('#user_age').type('31')
    cy.get('.actions').click()
    cy.get('#notice').should('contain', 'Usuário Criado com sucesso')
    cy.xpath("//a[contains(text(),'Editar')]").should('be.visible')
    cy.get('.red').click()
})
it('links...', () => {

    cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/links')
    cy.get('[href="/buscaelementos/success"]').click()
    cy.get('.red-text').should('have.text', 'Success!!')
    cy.get('.btn').click()
    cy.get('[href="/buscaelementos/badrequest"]').click()

    cy.get('.red-text').should('contain', 'Bad Request!!')
    cy.get('.btn').click()
    cy.get('[href="/buscaelementos/notfound"]').click()
    cy.get('.red-text').should('be.visible')
    cy.get('.btn').click()
    cy.get('[href="/buscaelementos/internalservererror"]').click()
    cy.get('.red-text').should('have.text', 'Internal Server Error!!')
    cy.xpath('//img[@class="center"]').should('have.attr', 'src')
    cy.get('.btn').click()
    cy.get('h5.center').should('have.text', 'Links')
})

it('inouttextField...', () => {

    cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield')
    cy.get('#first_name').type('Tiago')
    cy.get('#last_name').type('Garcia')
    cy.get('#password').type('ola123')
    cy.get('#email').type('Tiago@123.com')
    cy.get('#textarea1').type('Tiago{enter}ola{enter}')
    cy.get('.btn').click()
})

it('botoes...', () => {

    cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/botoes')
    cy.title().should('be.equal', 'Automação com Batista')
    cy.get('#teste').click()
    cy.get('#div1').should('have.text', 'Você Clicou no Botão!')
    cy.xpath('//*[contains(@onclick,"ativaedesativa2()")]').click()
    cy.get('#div2').should('contain', 'Você Clicou no Botão!')
    cy.contains('Button').click()
    cy.get(':nth-child(5) > :nth-child(2) > div > h5').should('have.text', 'Você Clicou no Botão!')
    cy.xpath('//*[contains(@type,"submit")]').click()
    cy.get('#div4').should('contain', 'Você Clicou no Botão!')
    cy.xpath('//*[contains(@class,"btn-large disabled")]').should('be.visible')



})

it('Radio e Checkbox...', () => {

    cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/radioecheckbox')


    cy.xpath('//label[@for="red"]').click()
    //cy.get('form > :nth-child(2) > label').click().should('be.enabled')
    cy.xpath('//*[contains(@for,"yellow")]').click()
    cy.xpath('//label[@for="purple"]').click()
    cy.xpath('//label[@for="grey"]').click()
    cy.xpath('//label[@for="black"]').click()

})

it('dropdown e select...', () => {

    cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/dropdowneselect')
    cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/buscaelementos/dropdowneselect')
    cy.xpath('//*[h5="Dropdown"]').should('contain', 'Dropdown')
    cy.get('[data-activates=dropdown]').click()
    cy.xpath('//a[@onclick="ativaedesativadrop1()"]').click()
    cy.xpath('//*[contains(h5,"Você Clicou no Dropdown Inbox!")]').should('contain', 'Você Clicou')
    cy.xpath('//a[@id="dropdown2"]', { timeout: 1000 }).click()
    cy.xpath('//div[@id="div2"]').should('have.text', 'Você Clicou no Dropdown Unread!')
    cy.get('[data-activates=dropdown]').click()
    cy.xpath('//a[@id="dropdown3"]').click()
    cy.xpath('//div[@id="div3"]').should('have.text', 'Você Clicou no Dropdown Sent!')
    cy.get('[data-activates=dropdown]').click()
    cy.contains('Outbox').click()
    cy.get('#div4 > h5').should('contain', 'Você Clicou no Dropdown Outbox!')
    cy.get(':nth-child(1) > .select-wrapper > input.select-dropdown').click()
    cy.xpath('//*[span="Dragon Ball"]').click()
    //cy.get('[data-activates=select-options-47dd1d97-83ee-a757-0e81-f4072bc3ab34]').select(['Dragon Ball'])
    cy.get(':nth-child(2) > .select-wrapper > input.select-dropdown').click()
    cy.xpath('//*[span="Ronaldo"]').click()
    cy.get(':nth-child(2) > .select-wrapper > input.select-dropdown').should('have.class', 'active')
    cy.get('body > :nth-child(2)').click()
    cy.scrollTo('bottom')
    // cy.wait(1000)
    cy.xpath('//input[@value="Brasil"]').click()
    cy.xpath('//*[span="Alemanha"]').click()
    cy.xpath('//input[@value="Brasil"]').should('have.value', 'Alemanha')
    // cy.wait(1000)
    // cy.xpath('//*[@value="Gênero"]').select('')

    cy.get('[value="Gênero"]').click()
    //cy.wait(1000)
    cy.xpath('//span[contains(text(),"Homem")]').click()

    cy.get('[value="Gênero"]').should('have.value', 'Homem')

    cy.get('[value="Sexo"]').click()
    //cy.wait(1000)
    cy.xpath('//span[contains(text(),"Masculino")]').click()
    cy.get('[value="Sexo"]').should('have.value', 'Masculino')
    cy.wait(1000)
    cy.get('[class="browser-default"]').select('Chrome').should('have.value', '1')
})

it('tables...', () => {

    cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/table')
    cy.wait(1000)
    cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain', 'Arroz')
    cy.get('tbody > :nth-child(5) > :nth-child(1)').should('contain.text', 'Leite')
    cy.get('tbody > :nth-child(6) > :nth-child(2)').should('contain', '6')

})

it('Alert...', () => {

    cy.visit('https://automacaocombatista.herokuapp.com/mudancadefoco/alert')
    cy.wait(1000)
    cy.get('button[onclick="jsAlert()"]').click()
    cy.get('#result').should('contain.text', 'Você clicou no alerta com sucesso!!')
    cy.get('button[onclick="jsConfirm()"]').click()
    cy.get('#result').should('contain.text', 'Ok')
    cy.get(':nth-child(7) > .btn').click()
})

describe('Tutorialspoint Test', function () {
    // test case
    it("Scenario 1", function () {
        // URL launched
        cy.visit("https://automacaocombatista.herokuapp.com/mudancadefoco/alert")
        //fire confirm browser event
        cy.on("window:confirm", (s) => {
            return false;
        });
        // click on Click for JS Confirm button
        cy.get(':nth-child(4) > .btn').click()
        // verify application message on Cancel button click
        cy.get('#result').should('have.text', 'Você clicou: Cancel')


    })


})

describe('Iframes', () => {
    it.only('Deve preencher campo de texto', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/mudancadefoco/iframe')
        cy.get('#id_do_iframe').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#first_name')
                .type('Escrevendo no Iframe')
                .should('have.value', 'Escrevendo no Iframe')

            cy.wrap(body).find('#last_name')
                .type('Escrevendo no ultimo campo')
                .should('have.value', 'Escrevendo no ultimo campo')
        })

    })


})

it.only('Nova Janela...', () => {

    cy.visit('https://automacaocombatista.herokuapp.com/mudancadefoco/janela')
    cy.get('.col > [href="/mudancadefoco/newwindow"]').click()
    cy.get('.red-text').should('have.text', 'Você Abriu uma nova janela!!')
})


it.only('Modal', () => {

    cy.visit('https://automacaocombatista.herokuapp.com/mudancadefoco/modal')
    cy.xpath("//a[@href='#modal1']").click()
    cy.get('p').should('contains.text', 'Pensando mais a longo prazo')
    cy.get('.modal-close').click()

})


it.only('AutoComplete', () => {

    cy.visit('https://automacaocombatista.herokuapp.com/widgets/autocomplete')
    cy.get('#autocomplete-input').type('Rio Gra')

})

it.only('Data Picker!!', () => {

    cy.visit('https://automacaocombatista.herokuapp.com/widgets/datapicker')
    cy.get('#datepicker').click()
    cy.get('.month-next > svg').click()
    cy.xpath("//button[@data-pika-day='12']").click()
    cy.xpath("//button[@class='btn-flat datepicker-done waves-effect']").click()



})


describe('Drag and drop', () => {
    it.only('should dragndrop', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/iteracoes/draganddrop')

        cy.get('#winston').drag('#dropzone', { force: true })
    })
})



it.only('Mouseover', () => {
    cy.visit('https://automacaocombatista.herokuapp.com/iteracoes/mousehover')

    cy.get('.card-reveal').invoke('show').click({ force: true })

    cy.xpath("//div[contains(text(),'Parábens')]").should('contain.text','Parábens')
})


//npm run cypress:open
