function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao_conteudo">
                <h3>${categoria}</h3>
                <div class="cartao_conteudo_perguta">
                    <p>${pergunta}</p>
                </div>
                <div class="cartao_conteudo_respota">
                    <p>${resposta}</p>
                </div>
              </div>
    `

    let respostaEstaVisivel = false
    
    function viraCatao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }

    cartao.addEventListener('click', viraCatao)

    container.appendChild(cartao)
}