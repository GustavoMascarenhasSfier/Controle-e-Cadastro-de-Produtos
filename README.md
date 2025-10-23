# 🛍️ Controle e Cadastro de Produtos (Minha Loja 1.0)

Este projeto é um sistema web básico de **Cadastro e Controle de Produtos (CRUD)** para uma loja, desenvolvido como uma forma prática de **adquirir conhecimento e estudar JavaScript Orientado a Objetos (Classes)** e a manipulação dinâmica de tabelas no DOM.

A aplicação permite ao usuário registrar novos produtos (nome e valor), listar todos os itens em uma tabela e realizar operações de edição e exclusão. Toda a lógica de estado e as regras de negócio são encapsuladas na `class Produto`.


## 🎯 Objetivo de Estudo (Foco em JavaScript Classes e DOM)

Este projeto foi concebido como uma prática fundamental para consolidar o conhecimento nos seguintes tópicos de JavaScript:

* **Programação Orientada a Objetos (POO):** Implementação de uma `class Produto` que gerencia atributos (`this.id`, `this.arrayProduto`) e encapsula todos os métodos da aplicação.
* **Gestão de Estado:** Utilização de um array (`this.arrayProduto`) como o modelo de dados central, onde todas as operações de CRUD são realizadas.
* **Manipulação de Tabela/DOM:** Criação da função `listaTabela()` para limpar o `tbody` e recriar dinamicamente as linhas (`tr.insertCell()`) com os dados atualizados.
* **Lógica CRUD Completa:** Implementação das operações Salvar (`salvar()`, `adicionar()`, `atualizar()`), Listar (`listaTabela()`) e Excluir (`deletar()`).
* **Eventos:** Uso de *event handlers inline* no HTML (`onclick`) e `setAttribute` no JS para vincular ações de edição e exclusão aos botões da tabela.

## ✨ Funcionalidades

* **Cadastro de Produto:** Formulário para inserir o nome do produto e seu preço.
* **Validação:** O método `validaCampo()` exibe um `alert()` caso o nome ou o preço do produto não sejam informados.
* **Listagem Dinâmica:** Exibição dos produtos cadastrados em uma tabela, atualizada após cada ação.
* **Edição:** O método `preparaEditacao()` preenche o formulário com os dados do produto selecionado e altera o texto do botão "Salvar" para "Atualizar".
* **Excluir:** Botão de exclusão com confirmação (`confirm()`) para remover o item do array e atualizar a tabela.
* **Cancelar:** Limpa os campos do formulário e retorna o sistema ao modo de cadastro (`this.editId = null`).

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Arquivo | Função Principal |
| :--- | :--- | :--- |
| **HTML5** | `index.html` | Estrutura do formulário de cadastro e da tabela de listagem. |
| **CSS3** | `style.css` | Estilização, layout (Grid para inputs) e tema de cores (cabeçalho em roxo). |
| **JavaScript (POO)** | `script.js` | Lógica da classe `Produto` e todas as operações CRUD/DOM. |

## ⚙️ Como Executar o Projeto

1.  Baixe ou clone os arquivos (`index.html`, `style.css`, `script.js`, e a pasta `img` com os ícones, se houver).
2.  Abra o arquivo **`index.html`** diretamente em seu navegador.
3.  O objeto `produto` (instância da classe `Produto`) será inicializado, e você poderá começar a cadastrar e controlar os produtos.

## 📁 Estrutura de Pastas <a id="estrutura-de-pastas"></a>

```
📦 Controle e Cadastro de Produtos
├── 📄 index.html 
├── 📄 style.css 
├── 📄 script.js
└── 📂 img/
    ├── botao-apagar.png
    └── escrever.png
```


## 👨‍💻 Autor <a id="autor"></a>

**Gustavo Mascarenhas**  
📍 Curitiba - PR  
💻 Estudante de Engenharia de Software | Desenvolvedor Front-End  
📧 gugab1249@gmail.com

🌐 [LinkedIn](https://www.linkedin.com/in/gustavo-mascarenhas-a3b570297/)  

---

## 📝 Licença

Este projeto é de código aberto e pode ser utilizado para fins educacionais e pessoais.  
Sinta-se à vontade para modificar e melhorar! 🚀
