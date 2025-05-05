describe('Formulário “Solicitar contato de um consultor” - Overmind', () => {
  const url = 'https://www.overmind.ai';

  beforeEach(() => {
    cy.visit(url);
  });

  it('CT-0001 – Submissão com todos os campos vazios', () => {
    cy.get('.login-contato-button-text').click();
  });

  it('CT-0004 – Envio com dados válidos', () => {
    cy.get('[placeholder="nome"]').type('João Teste');
    cy.get('[placeholder="empresa"]').type('Empresa Teste');
    cy.get('[placeholder="telefone"]').type("859890076543");
    cy.get('[placeholder="e-mail"]').type('joao@teste.com');
    cy.get('textarea').type('Gostaria de saber mais sobre os serviços.');

    cy.get('.login-contato-button-text').click();
  });
});


// NOVO BLOCO: Responsividade
describe('Responsividade do formulário - Overmind', () => {
  const url = 'https://www.overmind.ai';

  const viewports = [
    { device: 'iPhone X', size: 'iphone-x' },
    { device: 'iPad 2', size: 'ipad-2' },
    { device: 'Desktop 1280x720', size: [1280, 720] }
  ];

  viewports.forEach(({ device, size }) => {
    context(`Exibição no dispositivo: ${device}`, () => {
      beforeEach(() => {
        if (Array.isArray(size)) {
          cy.viewport(size[0], size[1]);
        } else {
          cy.viewport(size);
        }
        cy.visit(url);
      });

      it('Deve exibir o formulário corretamente', () => {
        cy.get('.login-contato-email-area', { timeout: 10000 })
          .scrollIntoView()
      });
    });
  });
});
