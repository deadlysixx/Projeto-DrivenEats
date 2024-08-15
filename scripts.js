let { pratoSelecionado, bebidaSelecionado, sobremesaSelecionado, precoPrato, precoBebida, precoSobremesa, precoFinal, nomeCliente, enderecoCliente } = inicioDados();

function inicioDados() {
    let nomeCliente = null;
    let enderecoCliente = null;
    let pratoSelecionado = null;
    let bebidaSelecionado = null;
    let sobremesaSelecionado = null;
    let precoPrato = null;
    let precoBebida = null;
    let precoSobremesa = null;
    let precoFinal = null;
    return { pratoSelecionado, bebidaSelecionado, sobremesaSelecionado, precoPrato, precoBebida, precoSobremesa, precoFinal, nomeCliente, enderecoCliente };
    
}

function ativarBotaoFechar() {
    if (pratoSelecionado !== null && bebidaSelecionado !== null && sobremesaSelecionado !== null) {
    const botao = document.querySelector('.fecharPedido');
    if (botao !== null) {
        botao.classList.add('fechar');
        botao.classList.remove('fecharPedido');
        botao.innerHTML = 'Fechar pedido'; 
        }
    }
}

function selecionarPrato(classePrato, preco, nomePrato) {
    const pratoAtual = document.querySelector(".comidas .selecao");
    if (pratoAtual !== null) {
        pratoAtual.classList.remove("selecao");
    }

    const opcaoPrato = document.querySelector("." + classePrato);
    if (opcaoPrato !== null) {
        opcaoPrato.classList.add("selecao");
    }

    pratoSelecionado = nomePrato;
    precoPrato = preco;
    ativarBotaoFechar();
}

function selecionarBebida(classeBebida, preco, nomeBebida) {
    const bebidaAtual = document.querySelector(".bebidas .selecao");
    if (bebidaAtual !== null) {
        bebidaAtual.classList.remove("selecao");
    }
    const opcaoBebida = document.querySelector("." + classeBebida);
    if (opcaoBebida !== null) {
        opcaoBebida.classList.add("selecao");
    }

    bebidaSelecionado = nomeBebida;
    precoBebida = preco;
    ativarBotaoFechar();
}

function selecionarSobremesa(classeSobremesa, preco, nomeSobremesa) {
    const sobremesaAtual = document.querySelector(".sobremesas .selecao");
    if (sobremesaAtual !== null) {
        sobremesaAtual.classList.remove("selecao");
    }

    const opcaoSobremesa = document.querySelector("." + classeSobremesa);
    if (opcaoSobremesa !== null) {
        opcaoSobremesa.classList.add("selecao");
    }

    sobremesaSelecionado = nomeSobremesa;
    precoSobremesa = preco;
    ativarBotaoFechar();
}

function caixaConfirmar() {
    if (pratoSelecionado != null && bebidaSelecionado != null && sobremesaSelecionado != null) {
        const selecionar = document.querySelector(".caixaEscondida");
        selecionar.classList.remove("caixaEscondida");
        precoFinal = precoPrato + precoBebida + precoSobremesa;
        document.querySelector('.opcaoPrato').innerHTML = pratoSelecionado;
        document.querySelector('.precoPrato').innerHTML = precoPrato.toFixed(2).toString().replace('.', ',');
        document.querySelector('.opcaoBebida').innerHTML = bebidaSelecionado;
        document.querySelector('.precoBebida').innerHTML = precoBebida.toFixed(2).toString().replace('.', ',');
        document.querySelector('.opcaoSobremesa').innerHTML = sobremesaSelecionado;
        document.querySelector('.precoSobremesa').innerHTML = precoSobremesa.toFixed(2).toString().replace('.', ',');
        document.querySelector('.precoTotal').innerHTML = precoFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }
}

function cancelar() {
    const confirmar = document.querySelector('.caixaConfirmacao');
    confirmar.classList.add('caixaEscondida');
}

function pedir() {
    let confirmacao = `Olá, gostaria de fazer o pedido:\n-Prato: ${pratoSelecionado}\n-Bebida: ${bebidaSelecionado}\n-Sobremesa: ${sobremesaSelecionado}\nTotal: R$ ${precoFinal.toFixed(2).replace('.', ',')}`;
    let mensagemCodificada = encodeURIComponent(confirmacao);
    window.open(`https://wa.me/5571999999999?text=${mensagemCodificada}`);
}
