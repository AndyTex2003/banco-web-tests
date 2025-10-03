describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

   it('Deve transferir quando informo dados e valor válidos', () => {
        // Act
       
        cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '11')

        // Assert
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresntar erro quando tentar transferir mais que 5 mil sem o Token', () => {
        // Act
        
        cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '6000')
        
        // Assert
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})
