describe('Login de usuarios alura pic', () => {
    before(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('fazer login de usuario valido', () => {                  //.only para executar apenas os testes desejaveis
        cy.login('flavio', '123')
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login de usuario invalido', () => {
        cy.login('Wellington', '1234')
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
})