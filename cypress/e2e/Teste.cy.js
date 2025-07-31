describe('Teste - Formulário', () => {
  // 1° caso de teste
  it('Preencher campos com sucesso', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')  // visitar o site a ser preenchido
    // formas para passar os dados para o campo
    // via id do campo #name e #phone, será escrito (type) o meu nome e o telefone
    cy.get('#name').type('Daniele Alves Nagayama') 
    cy.get('#phone').type('11994854856')
    // via input do campo
    cy.get('input[placeholder="Enter EMail"]').type('daninagayama@gmail.com')
    // via class
    
  })
  // 2º caso de teste
})