describe('Testando a tela inical', () => {
    before(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    /*Novos casos de teste*/
    it('Verifica mensagens da tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
    })

})