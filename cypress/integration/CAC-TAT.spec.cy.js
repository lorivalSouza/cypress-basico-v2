
describe('Central de Atendimento ao Cliente TAT', function() {

  beforeEach(function() {
    cy.visit('./src/index.html')
    
  })

  it('verifica o título da aplicação', function() {

    cy.title()
    .should('be.equals', 'Central de Atendimento ao Cliente TAT')   
    

  })

  it('Preencher os campos obrigatórios e enviar o formulário', function(){
const logTxt="Preencher os campos obrigatórios e enviar o formulário|||Preencher os campos obrigatórios e enviar o formulário"

    cy.get('#firstName')
    .should('be.visible')
    .type('Lorival')
    .should('have.value', 'Lorival')

    cy.get('#lastName')
    .should('be.visible')
    .type('Souza')
    .should('have.value', 'Souza')

    cy.get('#email')
    .should('be.visible')
    .type('lsouza@gmail.com')
    .should('have.value', 'lsouza@gmail.com')

    cy.get('#open-text-area')
    .type(logTxt, {delay:0})

    cy.get('button[type="submit"]')
    .click()

    cy.get('.success').should('be.visible')

  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){

    cy.get('#firstName')
    .should('be.visible')
    .type('Lorival')
    .should('have.value', 'Lorival')

    cy.get('#lastName')
    .should('be.visible')
    .type('Souza')
    .should('have.value', 'Souza')

    cy.get('#email')
    .should('be.visible')
    .type('lsouza#gmail.com')
    .should('have.value', 'lsouza#gmail.com')

    cy.get('#open-text-area')
    .type('Texto')

    cy.get('button[type="submit"]')
    .click()

    cy.get('.error').should('be.visible')

  })

  it('no campo telefone se for digitado valor não-numérico for digitado, seu valor continuará vazio.', function(){

    cy.get('#phone')
    .should('be.visible')
    .type('sdfsfsdfsd')
    .should('have.value', '')

  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário.', function(){

    
    cy.get('#firstName')
    .should('be.visible')
    .type('Lorival')
    .should('have.value', 'Lorival')

    cy.get('#lastName')
    .should('be.visible')
    .type('Souza')
    .should('have.value', 'Souza')

    cy.get('#email')
    .should('be.visible')
    .type('lsouza@gmail.com')
    .should('have.value', 'lsouza@gmail.com')

    cy.get('#phone-checkbox')
    .check()

    cy.get('#open-text-area')
    .type('Texto')

    cy.get('button[type="submit"]')
    .click()

    cy.get('.error').should('be.visible')

  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone.', function(){

    
    cy.get('#firstName')
    .should('be.visible')
    .type('Lorival')
    .should('have.value', 'Lorival')
    .clear()
    .should('have.value', '')

    cy.get('#lastName')
    .should('be.visible')
    .type('Souza')
    .should('have.value', 'Souza')
    .clear()
    .should('have.value', '')

    cy.get('#phone')
    .should('be.visible')
    .type('5345355345')
    .should('have.value', '5345355345')
    .clear()
    .should('have.value', '')

    cy.get('#email')
    .should('be.visible')
    .type('lsouza@gmail.com')
    .should('have.value', 'lsouza@gmail.com')
    .clear()
    .should('have.value', '')

    cy.get('#open-text-area')
    .type('Texto')
    .should('have.value', 'Texto')
    .clear()
    .should('have.value', '')

  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios.', function(){

    
    cy.get('button[type="submit"]')
    .click()

    cy.get('.error').should('be.visible')

  })

  it('envia o formuário com sucesso usando um comando customizado.', function(){

    
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')

  })

  
  it('usando cy.contains.', function(){

    
    cy.contains('button', 'Enviar')
    .click()

    cy.get('.error').should('be.visible')

    
  })

  it('selecionando a opção Youtube', function(){

    
    cy.get('select').select('YouTube')
    .should('have.value', 'youtube')

    
  })

  it('selecionando a opção Youtube', function(){

    
    cy.get('#product').select('Mentoria')
    .should('have.value', 'mentoria')

    
  })

  it('selecionando a opção Youtube', function(){

    
    cy.get('#product').select(1)
    .should('have.value', 'blog')

    
  })

  it('selecionando a opção Youtube', function(){

    
    cy.get('#product').select(1)
    .should('have.value', 'blog')

    
  })
  it('selecionando a opção Youtube', function(){

    
    cy.get('input[type="radio"]').check('feedback')
    .should('have.value', 'feedback')

    
  })

  it('selecionando a opção Youtube', function(){

    
    cy.get('input[type="radio"][value="feedback"]').check()
    .should('have.value', 'feedback')

    
  })

  it('selecionando a opção Youtube', function(){

    
    cy.get('input[type="radio"]').check('elogio')
    .should('have.value', 'elogio')

    
  })

  it('marca cada tipo de atendimento', function(){

    
    cy.get('input[type="radio"]')
    .should('have.length', 3)
    .each(function($radio){
      cy.wrap($radio).check()
      cy.wrap($radio)
      .should('be.checked')
    })

    
  })

  it('marca ambos checkboxes, depois desmarca o último', function(){

    
    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
    //cy.get('input[type="checkbox"][value="phone"]')
    //.uncheck()

    
  })

  it('efetua upload de arquivo', function(){

    cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.json')
    .then(input => {
      expect(input[0].files[0].name)
    .to.equal('example.json')
  })
    
  })

  it('efetua upload de arquivo usando drag-and-drop', function(){

    cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.json',{action:'drag-drop'})
    .then(input => {
      expect(input[0].files[0].name).to.equal('example.json')
  })
    
  })

  it('efetua upload de + de um arquivo', function(){

    cy.get('#file-upload')
    .selectFile(['cypress/fixtures/example.json','cypress/fixtures/example1.json','cypress/fixtures/example2.json'])
    .then(input => {
      expect(input[0].files[0].name).to.equal('example.json')
      expect(input[0].files[1].name).to.equal('example1.json')
      expect(input[0].files[2].name).to.equal('example2.json')
  })

    
  })

  it('efetua upload de + de um arquivo com drag-and-drop', function(){

    cy.get('#file-upload')
    .selectFile(['cypress/fixtures/example1.json'],{action:'drag-drop'})    
    .then(input => {
      expect(input[0].files[0].name).to.equal('example1.json')
  })

  })

  it('teste abre outra aba sem precisar fazer o click', function(){
    cy.get('#privacy a ')
    .should('have.attr','target', '_blank')
  })

  it.only('teste removendo o rtarget e fazendo o click no link', function(){
    cy.get('#privacy a ')
    .invoke('removeAttr','target')
    .click()
    cy.contains('Talking About Testing')
    .should('be.visible')
  })
  
})
