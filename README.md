# Documentação Técnica: Site da Igreja Presbiteriana de Macaé

Esta documentação descreve a estrutura, estilos, funcionalidades e procedimentos para manutenção do site da Igreja Presbiteriana de Macaé. O site foi desenvolvido com HTML, CSS e JavaScript, seguindo princípios de design responsivo para funcionar em dispositivos móveis e desktops.

## Índice

1. [Estrutura do Projeto](#1-estrutura-do-projeto)
2. [Sistema de Estilo](#2-sistema-de-estilo)
3. [Páginas do Site](#3-páginas-do-site)
4. [Sistema de Conteúdo Dinâmico](#4-sistema-de-conteúdo-dinâmico)
5. [Responsividade](#5-responsividade)
6. [Manutenção e Atualizações](#6-manutenção-e-atualizações)
7. [Boas Práticas](#7-boas-práticas)

---

## 1. Estrutura do Projeto

### 1.1 Organização de Arquivos

```
(raiz)
├── index.html                  # Página inicial
├── sobre.html                  # Página sobre a igreja
├── escalas.html                # Página de escalas de serviço
├── assets/
│   ├── styles/
│   │   ├── root.css            # Variáveis e configurações globais
│   │   ├── style.css           # Estilos principais do site
│   │   ├── sobre.css           # Estilos específicos da página sobre
│   │   └── escalas.css         # Estilos específicos da página de escalas
│   ├── js/
│   │   ├── menu.js             # Script do menu móvel
│   │   ├── atualizador-conteudo-dinamico.js # Sistema para atualizar conteúdo
│   │   ├── pix.js              # Script para funcionalidades de PIX
│   │   └── figurashistoricas.js # Scripts para a seção de figuras históricas
│   └── imagens/                # Pasta de imagens do site
└── (outras páginas específicas)
```

### 1.2 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica das páginas
- **CSS3**: Estilização avançada, variáveis CSS, flexbox e grid
- **JavaScript**: Interatividade, menu responsivo e atualizações de conteúdo
- **Fontawesome 6.5.1**: Ícones e elementos visuais
- **Google Fonts**: Fontes Roboto e Playfair Display

---

## 2. Sistema de Estilo

O site utiliza um sistema de estilo sustentável baseado em variáveis CSS para facilitar a manutenção e garantir consistência visual.

### 2.1 Variáveis CSS (root.css)

O arquivo `root.css` contém todas as variáveis CSS que definem cores, espaçamentos, transições e outras propriedades visuais do site:

#### Cores Principais
```css
--primary-color: #e94e1b;       /* Laranja vibrante */
--secondary-color: #9c27b0;     /* Roxo intenso */
--accent-color: #8bc34a;        /* Verde lima */
```

#### Cores Derivadas
```css
--primary-light: #f47249;
--primary-dark: #c73d0e;
--secondary-light: #b04fc0;
--secondary-dark: #7b1fa2;
--accent-light: #a2cf6e;
--accent-dark: #71a436;
```

#### Cores Neutras
```css
--text-color: #333;
--light-text: #fff;
--dark-bg: #2d2d2d;
--light-bg: #f5f3ee;            /* Fundo creme claro */
--gray-bg: #e6e1d6;             /* Fundo bege */
```

#### Espaçamentos
```css
--space-xs: 0.5rem;
--space-sm: 1rem;
--space-md: 1.5rem;
--space-lg: 2rem;
--space-xl: 3rem;
--space-xxl: 4rem;
--space-huge: 5rem;
```

### 2.2 Componentes Reutilizáveis

Os principais componentes reutilizáveis incluem:

- **Botões**: Classes `btn-primary`, `btn-secondary` e `btn-nav`
- **Contêineres**: Classe `container` para centralizar e limitar a largura do conteúdo
- **Cards**: Sistema de cards com efeitos de hover para notícias, eventos e ministérios
- **Grids**: Layouts flexíveis usando CSS Grid e Flexbox

### 2.3 Tipografia

O site utiliza duas fontes principais:
- **Roboto**: Para textos gerais e conteúdo
- **Playfair Display**: Para títulos e elementos de destaque

---

## 3. Páginas do Site

### 3.1 Página Inicial (index.html)

A página inicial contém as seguintes seções:

1. **Cabeçalho (Header)**: Logo, menu de navegação e barra de eventos
2. **Hero Section**: Banner principal com chamada para ação
3. **Seção do Pastor**: Apresentação do pastor e link para sua biografia
4. **Figuras Históricas**: Cards sobre reformadores importantes
5. **Agenda**: Próximos eventos e atividades da igreja
6. **Ministério**: Visão ministerial e áreas de atuação
7. **Localização**: Mapa integrado do Google Maps
8. **Dízimos e Ofertas**: Informações para contribuições
9. **Rodapé (Footer)**: Informações de contato, horários e redes sociais

### 3.2 Página Sobre (sobre.html)

A página Sobre contém:

1. **Banner da Página**: Título e subtítulo introdutório
2. **História da Igreja**: Informações sobre a origem e formação da igreja
3. **Crescimento**: Timeline com eventos importantes do desenvolvimento da igreja
4. **Cinco Solas**: Princípios fundamentais da fé reformada
5. **Visão e Propósito**: Identidade e missão da igreja
6. **Liderança**: Informações sobre o pastoreio e líderes
7. **Gratidão**: Mensagem final de agradecimento

### 3.3 Página de Escalas (escalas.html)

Página organizada em cards que mostram as escalas de serviço para diferentes áreas:

1. **Escala de Louvor**: Músicos e líderes para os cultos
2. **Escala de Recepção**: Equipes de recepção
3. **Escala de Escola Dominical**: Professores para as diferentes classes
4. **Escala de Sonoplastia**: Técnicos responsáveis pelo som
5. **Escala de Liturgia**: Presbíteros responsáveis pela condução dos cultos
6. **Escala de Ministério Infantil**: Equipes para trabalho com crianças

---

## 4. Sistema de Conteúdo Dinâmico

O site utiliza o arquivo `atualizador-conteudo-dinamico.js` para permitir que informações como eventos, horários e contatos sejam facilmente atualizados em todas as páginas.

### 4.1 Configuração do Conteúdo

O conteúdo é definido no objeto `dadosIgreja` dentro do arquivo JavaScript:

```javascript
const dadosIgreja = {
    nome: "Igreja Presbiteriana de Macaé",
    descricao: "Uma comunidade de fé...",
    
    // Eventos em destaque na barra superior
    eventosDestacados: [
        { 
            nome: "Escola Dominical", 
            horario: "Domingo às 9h",
            icone: "fas fa-users" 
        },
        // Outros eventos...
    ],
    
    // Horários de cultos para o footer
    cultos: [
        { nome: "Escola Dominical", horario: "Domingo às 9h" },
        // Outros cultos...
    ],
    
    // Informações de contato
    contato: {
        endereco: "R. Pref. Eduardo Serrano, 93...",
        telefone: "(22)20203678",
        email: "4igrejapresbiterianademacae@gmail.com"
    },
    
    // Redes sociais
    redesSociais: [
        { nome: "Facebook", url: "https://facebook.com/ipmacae", icone: "fab fa-facebook-f" },
        // Outras redes...
    ]
};
```

### 4.2 Atualizando o Conteúdo

Para atualizar o conteúdo do site, modificar o objeto `dadosIgreja` no arquivo `atualizador-conteudo-dinamico.js`. As alterações serão aplicadas automaticamente em todas as páginas que usam este script.

### 4.3 API JavaScript para Modificações

O sistema também expõe uma API que pode ser usada para atualizações dinâmicas:

```javascript
// Exemplo de uso da API
window.SiteAPI.atualizarDados({
    nome: "Novo Nome da Igreja",
    // Outros dados a serem atualizados
});
```

---

## 5. Responsividade

O site é totalmente responsivo, adaptando-se a diferentes tamanhos de tela, de smartphones a desktops.

### 5.1 Breakpoints Principais

Os principais pontos de quebra (breakpoints) definidos nos arquivos CSS são:

- **992px**: Tablets e desktops menores
- **768px**: Tablets e dispositivos móveis
- **480px**: Dispositivos móveis pequenos

### 5.2 Comportamento Responsivo

- **Menu**: Em telas menores, o menu de navegação é substituído por um botão hambúrguer que exibe um menu vertical quando clicado
- **Layout**: Os layouts em grid e flex são ajustados para exibição em coluna única em dispositivos móveis
- **Imagens**: Todas as imagens são responsivas com `max-width: 100%`
- **Tipografia**: Tamanhos de fonte são ajustados para melhor legibilidade em telas menores

### 5.3 Testes de Responsividade

Recomenda-se testar o site nos seguintes dispositivos/viewports:
- Desktop (1920×1080)
- Laptop (1366×768)
- Tablet (768×1024)
- Smartphone (375×667)

---

## 6. Manutenção e Atualizações

### 6.1 Atualizando o Conteúdo Básico

#### Eventos, Horários e Contatos
Editar o objeto `dadosIgreja` no arquivo `atualizador-conteudo-dinamico.js` para atualizar:
- Eventos em destaque
- Horários de cultos
- Informações de contato
- Links de redes sociais

#### Escalas de Serviço
Editar diretamente o arquivo `escalas.html`, modificando os elementos com a classe `escala-item`.

#### Figuras Históricas e Pastor
Atualizar as respectivas seções no arquivo `index.html`.

### 6.2 Modificando Estilos

Para alterar cores, espaçamentos ou outros elementos visuais:

1. Editar as variáveis CSS no arquivo `root.css`
2. As alterações serão aplicadas em todo o site automaticamente

### 6.3 Adicionando Novas Páginas

Para adicionar uma nova página ao site:

1. Copiar a estrutura básica de uma página existente
2. Manter os elementos de cabeçalho e rodapé
3. Incluir os links para os arquivos CSS e JavaScript necessários
4. Adicionar a página ao menu de navegação em todas as páginas existentes

---

## 7. Boas Práticas

### 7.1 Performance

- Otimizar imagens antes de fazer upload para o servidor
- Manter os scripts JavaScript no final do documento HTML
- Utilizar compressão de arquivos quando possível

### 7.2 Acessibilidade

- Manter bom contraste entre texto e fundo
- Usar elementos semânticos HTML
- Incluir atributos `alt` em todas as imagens
- Garantir que todos os formulários tenham labels adequados

### 7.3 SEO

- Utilizar títulos e meta descrições adequadas para cada página
- Estruturar o conteúdo com hierarquia de cabeçalhos (h1, h2, h3)
- Incluir textos alternativos em imagens
- Manter URLs amigáveis e descritivas

### 7.4 Versionamento

Recomenda-se utilizar um sistema de controle de versão (como Git) para manter o histórico de alterações e facilitar a reversão de mudanças quando necessário.

---

## Apêndice: Referência de Cores

| Variável           | Valor     | Descrição               |
|--------------------|-----------|-------------------------|
| --primary-color    | #e94e1b   | Laranja vibrante        |
| --secondary-color  | #9c27b0   | Roxo intenso            |
| --accent-color     | #8bc34a   | Verde lima              |
| --primary-light    | #f47249   | Laranja claro           |
| --primary-dark     | #c73d0e   | Laranja escuro          |
| --light-bg         | #f5f3ee   | Fundo creme claro       |
| --gray-bg          | #e6e1d6   | Fundo bege              |
| --dark-bg          | #2d2d2d   | Fundo escuro            |

---

**Documentação preparada em: Abril, 2025**