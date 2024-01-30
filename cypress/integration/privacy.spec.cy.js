it.only('teste direto na pagina privacy', function(){
    cy.visit('./src/privacy1000.html').contains('Talking About Testing')
})