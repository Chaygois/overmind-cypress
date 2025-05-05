Feature: Validação Geral do Site Overmind.ai

  Cenário: CT-0001 – Navegação entre seções pelo menu principal
    Dado que o usuário acessa o site https://www.overmind.ai
    Quando o usuário clica nos itens do menu: "Automação Digital", "Revolução", "Efeito", "Conquistas", "Contato"
    Então o sistema deve rolar para a seção correspondente corretamente
    E os conteúdos de cada seção devem estar visíveis e acessíveis

  Cenário: CT-0002 – Tentativa de login com todos os campos vazios
    Dado que o usuário acessa a área de login
    Quando ele clica em "Entrar" sem preencher "usuário" e "senha"
    Então o sistema deve exibir mensagens de erro de obrigatoriedade para os dois campos

  Cenário: CT-0003 – Tentativa de login com usuário e senha incorretos
    Dado que o usuário acessa a área de login
    Quando ele preenche o campo "usuário" com "teste" e "senha" com "123"
    E clica em "Entrar"
    Então o sistema deve exibir a mensagem: "Usuário ou senha inválidos"

  Cenário: CT-0004 – Validação de conteúdo institucional
    Dado que o usuário acessa a página principal
    Então o sistema deve exibir as seguintes seções:
      | Automação Digital |
      | Revolução         |
      | Efeito            |
      | Conquistas        |
    E cada seção deve conter títulos e textos legíveis sem sobreposição

  Cenário: CT-0005 – Responsividade do site em múltiplas resoluções
    Dado que o usuário acessa o site em três resoluções:
      | 320x480 (mobile)  |
      | 768x1024 (tablet) |
      | 1280x800 (desktop) |
    Então todas as seções e menus devem se ajustar corretamente sem causar scroll lateral
    E o conteúdo deve permanecer visível e utilizável
