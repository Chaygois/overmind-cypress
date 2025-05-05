Feature: Formulário “Solicitar contato de um consultor” — Overmind

  Cenário: CT-0001 – Submissão com todos os campos vazios
    Quando o usuário clica no botão “Solicitar contato de um consultor” sem preencher nenhum campo
    Então o sistema deve exibir mensagens de erro informando que todos os campos são obrigatórios

  Cenário: CT-0002 – E‑mail em formato inválido
    Dado que o usuário preenche todos os campos corretamente, exceto o campo “e‑mail” com o valor “teste@”
    Quando o usuário clica em “Solicitar contato de um consultor”
    Então o sistema deve exibir uma mensagem de erro informando que o e‑mail está em formato inválido
    E o formulário não deve ser enviado

  Cenário: CT-0003 – Telefone com menos de 8 dígitos
    Dado que o usuário preenche todos os campos corretamente, exceto o telefone com “1234”
    Quando o usuário clica em “Solicitar contato de um consultor”
    Então o sistema deve exibir uma mensagem de erro informando que o telefone é inválido
    E o formulário não deve ser enviado

  Cenário: CT-0004 – Envio com dados válidos
    Dado que o usuário preenche todos os campos corretamente com:
      | nome     | Chayanny Gois            |
      | empresa  | Teste SA                 |
      | telefone | 41999999999              |
      | e‑mail   | teste@dominio.com        |
      | mensagem | Gostaria de um consultor |
    Quando o usuário clica em “Solicitar contato de um consultor”
    Então o sistema deve exibir uma mensagem de sucesso informando que o contato foi registrado
    E o formulário deve ser limpo ou direcionado para uma página de confirmação

  Cenário: CT-0005 – Navegação por teclado
    Quando o usuário navega pelo formulário usando a tecla TAB
    Então o foco deve percorrer os campos na seguinte ordem:
      | nome     |
      | empresa  |
      | telefone |
      | e‑mail   |
      | mensagem |
      | botão de envio |
    E cada campo focalizado deve apresentar uma indicação visual clara

  Cenário: CT-0006 – Preenchimento automático
    Dado que o navegador possui sugestões salvas para os campos “nome” e “e‑mail”
    Quando o usuário utiliza o preenchimento automático
    Então os campos devem aceitar os valores sugeridos sem quebra de layout ou falha na validação

  Cenário: CT-0007 – Responsividade do formulário
    Dado que o usuário acessa a seção de contato nos seguintes tamanhos de tela:
      | 320x480   |
      | 768x1024  |
      | 1280x800  |
    Quando o usuário visualiza o formulário em cada um dos tamanhos
    Então todos os campos e o botão de envio devem estar visíveis, acessíveis e sem sobreposição de elementos
