describe('Validação Geral do Site Overmind.ai', () => {
  const secoes = ["Automação Digital", "Revolução", "Efeito", "Conquistas", "Contato"];
  const urlBase = 'https://www.overmind.ai';

  beforeEach(() => {
    cy.visit(urlBase);
  });

  it('CT-0001 – Navegação entre seções pelo menu principal', () => {
    cy.get('#login-menu-bar .login-menu-item-area')
      .contains('Automação Digital')
      .should('be.visible')
      .click();

    cy.get('#container-1')
      .scrollIntoView()
      .should('be.visible');
  });

  it('CT-0002 – Tentativa de login com todos os campos vazios', () => {
    cy.get('form img').should('be.visible').click({ force: true });

    cy.get('[placeholder="insira seu domínio"]').should('have.class', 'login-input-missing');
    cy.get('[placeholder="insira seu usuário"]').should('have.class', 'login-input-missing');
    cy.get('[placeholder="insira sua senha"]').should('have.class', 'login-input-missing');
  });


  
  it('CT-0004 – Validação de conteúdo institucional', () => {
    secoes.slice(0, 4).forEach(secao => {
      cy.contains('section, div, h2, h3', secao, { timeout: 10000 })
        .scrollIntoView()
        .should('be.visible');
    });
  });
  const viewports = [
    { width: 320, height: 480, name: 'mobile' },
    { width: 768, height: 1024, name: 'tablet' },
    { width: 1280, height: 800, name: 'desktop' }
  ];
  
  viewports.forEach(vp => {
    it(`CT-0005 – Responsividade em ${vp.name}`, () => {
      cy.viewport(vp.width, vp.height);
  
      // Detecta se o botão hamburger (#menu-0) está visível
      cy.get('body').then($body => {
        if ($body.find('#menu-0:visible').length) {
          // Mobile/Tablet drawer
          cy.get('#menu-0').click();
          secoes.forEach(secao => {
            cy.get('.login-drawer-item-area')
              .contains(secao)
              .should('be.visible');
          });
        } else {
          // Desktop menu-bar
          secoes.forEach(secao => {
            cy.get('#login-menu-bar .login-menu-item-area')
              .contains(secao)
              .should('be.visible');
          });
        }
      });
  
      // Em qualquer viewport, não deve haver scroll horizontal
      cy.get('body').should('not.have.css', 'overflow-x', 'scroll');
    });
  });
  
  it('CT-0003 – Tentativa de login com usuário e senha incorretos', () => {
    // 1. Acessa a página principal
    cy.visit(urlBase);
  
    // 2. Preenche domínio
    cy.get('#login-dominio').type('fake.com', { force: true });
  
    // 3. Preenche usuário e senha
    cy.get('[placeholder*="usuário"]').type('teste', { force: true });
    cy.get('[placeholder*="senha"]').type('123', { force: true });
  
    // 4. Garante que o formulário esteja visível
    cy.get('form').should('be.visible');
  
    // 5. Clica no botão de login (ajuste o seletor se necessário)
    cy.get('form img').click({ force: true });
  
    // 6. Verifica se a mensagem de erro aparece
    cy.contains('Usuário ou senha inválidos').should('be.visible');
  });})