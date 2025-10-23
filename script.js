class Produto{
    
    constructor(){ //funcao que vai contruir nosso projeto
        //atributos

        this.id = 1;
        this.arrayProduto = [];
        this.editId= null;

    }

    //definir metodos

    salvar(){
        let produto = this.lerDados();
        if(this.editId == null){
            this.adicionar(produto);

        }else{
            this.atualizar(this.editId, produto );
        }

        this.listaTabela();
        this.cancelar();

        
    }

    listaTabela(){
        var tbody = document.getElementById('tbody');
        //limpar os campos para n duplicar
        tbody.innerText = '';
        //percorrer a lista e adicionar as linhas
        for(let i = 0 ; i < this.arrayProduto. length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acao = tr.insertCell();

            td_id.innerText = this.arrayProduto[i].id
             td_produto.innerText = this.arrayProduto[i].nomeProduto;
              td_valor.innerText = this.arrayProduto[i].valor


              let imgEdit = document.createElement('img');
              imgEdit.src ='img/escrever.png';
              imgEdit.setAttribute("onclick", "produto.preparaEditacao(" + JSON.stringify(this.arrayProduto[i]) + ")")
            
              let imgEX = document.createElement('img');
              imgEX.src ='img/botao-apagar.png';
              imgEX.setAttribute("onclick", "produto.deletar(" + this.arrayProduto[i].id + ")")
                
            td_acao.appendChild(imgEdit)
              td_acao.appendChild(imgEX)
              //é um filho dentro do td


               

        }
    }

    adicionar(produto){
        produto.valor = parseFloat(produto.valor);
        this.arrayProduto.push(produto);
        this.id++;
    }


    atualizar(id, produto){
        for(let i= 0; i < this.arrayProduto.length; i++){
            if(this.arrayProduto[i].id == id){
                this.arrayProduto[i].nomeProduto = produto.nomeProduto;
                this.arrayProduto[i].valor = produto.valor;
            }
        }
    }



    preparaEditacao(dados){

        this.editId = dados.id;

       document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('valor').value = dados.valor;

         document.getElementById('btn1').innerText ='Atualizar';
    }

    lerDados(){
        let produto = {}
        //adicionei os proditos ao campo
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valor = document.getElementById('valor').value;

        return produto;
    }

    validaCampo(produto){
        let mensagem = '';
        if(produto.nomeProduto == ""){
            mensagem +='Informe o nome do produto \n';
}
            if(produto.valor === ''){
                mensagem +='Informe o preço  do produto \n';
            
        }
        //verifica se e vazia
        if(mensagem != ''){
            alert(mensagem);
            return false;
        }
        return true;
    }

    cancelar(){
        produto.nomeProduto = document.getElementById('produto').value = '';
        produto.valor = document.getElementById('valor').value = '';
        //volta pro texto original do botao
        document.getElementById('btn1').innerText = 'Salvar';
         this.editId = null; // volta para modo adicionar
    }


    deletar(id){
        if(confirm('Deseja realamete deletar o produto do ID' + id)){
            for(let i = 0; i < this.arrayProduto.length; i++ ){
            if(this.arrayProduto[i].id == id){
                this.arrayProduto.splice(i, 1);
                this.listaTabela(); // redesenha tabela
                 

            }
        }

        }
         
    }

}

 var produto = new Produto() //cria um objeto