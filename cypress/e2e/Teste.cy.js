// o comando abaixo "reference types='cypress", é para aparecer o popup, quando digitar um comando e vai aparecer a lista de opções
///  <reference types='cypress:' />     

// const { it } = require("mocha")

describe('Teste - Formulário', () => {
  // 1° caso de teste
  it('Preencher campos com sucesso', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')  // visitar o site a ser preenchido
    // formas para passar os dados para o campo
    // via id do campo #name e #phone, será escrito (type) o meu nome e o telefone
    cy.get('#name').type('Daniele de Oliveira') 
    cy.get('#phone').type('11994854856')
    cy.get('input[value="female"]').click()

    // via input do campo
    cy.get('input[placeholder="Enter EMail"]').type('daninagayama@gmail.com')

    // via class
    //cy.get('class["form-check-input"]').type('femea')                        ARRUMAR!!!!
    // cy.get('input[type="checkbox"]').check('tuesday') // para selecionar vários, cria uma função java script

    // formas para SELECIONAR
    cy.get('#country').select('Japan')
    cy.get('#colors').select('red')
    cy.get('#animals').select('deer')

    // selecionar vários
    // cy.get('select').select([0, 3]).invoke()                                  // ARRUMAR!!!!

    // selecionar campo de Data
     cy.get('#datepicker').click()     // selecionando o campo do calendário
     cy.get('a[data-date="27"]').click() // selecionando o dia 
       // comando should (deve ser tal coisa)
     //cy.get('#datapicker').first().should('have.value','08/27/2025')           //ARRUMAR!!!
     
     // selecionando uma imagem
     cy.get('#singleFileInput').selectFile('cypress\\fixtures\\imgTeste.png') // para descorbri a imagem selecionada
     cy.get('#singleFileInput').should('have.value','C:\\fakepath\\cypress\\fixtures\\imgTeste.png') // validando se a imagem é a certa. should('have.text'.'') - "espero que tenha"
          
  })

  // 2° caso de teste
  it.only('Validar botão START', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')  // visitar o site a ser preenchido
    cy.get('button[name="start"]').click()
    cy.get('button[name="stop"]').should('be.visible')
  })

   
})