describe('Login e registro de usuarios alura pic', () => {
    before(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('verifica mensagens validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Usuário').should('be.visible'); //User name is required! AQUI forçando erro
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Nome is required!').should('be.visible'); //Full name is required! AQUI forçando erro
    })

    it('verifica mensagens de email invalido', () => {
        //cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('Wellington');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');       
    })

    it('verifica mensagens de senha com menos de 8 caracteres', () => {
        //cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');     
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

    const usuarios = require('../../fixtures/usuarios.json'); //Endereço do arquivo de massa de usuários
    usuarios.forEach(usuario => {

        it.only(`registra novo usuário ${usuario.userName} `, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullname);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
            cy.contains('a', 'Please, login!').click();
        })

    });

})