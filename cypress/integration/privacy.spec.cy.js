it.only('teste direto na pagina privacy', function(){
    cy.visit('./src/privacy.html').contains('Talking About Testing')
})