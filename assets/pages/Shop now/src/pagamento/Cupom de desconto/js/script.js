function calcular() {
    let NomeUsuario = document.querySelector('input#nometxt')
    let SobrenomeUsuario = document.querySelector ('input#sobrenometxt')
    let preçoJoia = document.querySelector('input#valorJ')
    let cupom = document.querySelector('input#cupomtxt')
    let resultado = document.querySelector('div#resultado')
    let imagem = document.querySelector('img.imagem')

    let nomeCliente = String(NomeUsuario.value)
    let sobrenomeCliente = String(SobrenomeUsuario.value)

    let valorJoia = Number(preçoJoia.value)
    let cupomCliente = String(cupom.value)
    let conversão = Number(preçoJoia.value)

    imagem.style.width = '300px'
    imagem.style.heigth = '300px'

    if (cupomCliente == '30%OFF') {
        conversão *= 30
        conversão /= 100
        valorJoia -= conversão

        resultado.innerHTML = `Olá, <strong>${nomeCliente} ${sobrenomeCliente}</strong>!!! Você recebeu <strong>30% de desconto</strong>. Total: <strong>R$${valorJoia.toFixed(2)}</strong>`
        imagem.src = '../image/cupom 1.jpg'
    } else if (cupomCliente == '20%OFF') {
        conversão *= 20
        conversão /= 100
        valorJoia -= conversão

        resultado.innerHTML = `Olá, <strong>${nomeCliente} ${sobrenomeCliente}</strong>!!! Você recebeu <strong>20% de desconto</strong>. Total: <strong>R$${valorJoia.toFixed(2)}</strong>`
        imagem.src = '../image/cupom 2.jpg'
    } else if (cupomCliente == '10%OFF') {
        conversão *= 10
        conversão /= 100
        valorJoia -= conversão

        resultado.innerHTML = `Olá, <strong>${nomeCliente} ${sobrenomeCliente}</strong>!!! Você recebeu <strong>10% de desconto</strong>. Total: <strong>R$${valorJoia.toFixed(2)}</strong>`
        imagem.src = '../image/cupom 3.jpg'
    } else if (cupomCliente == '5%OFF') {
        conversão *= 5
        conversão /= 100
        valorJoia -= conversão
        
        resultado.innerHTML = `Olá, <strong>R$${nomeCliente} ${sobrenomeCliente}</strong>!!! Você recebeu <strong>5% de desconto</strong>. Total: <strong>R$${valorJoia.toFixed(2)}</strong>`
        imagem.src = '../image/cupom 4.jpg'
    } else {
        resultado.innerText = `Cupom inválido!!`
        
    }
}