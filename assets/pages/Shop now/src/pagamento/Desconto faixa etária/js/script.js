function calcular() {
    let nome = document.getElementById('nometxt')
    let sobrenome = document.getElementById('sobrenometxt')
    let valorJoia = document.getElementById('valorJ')
    let idade = document.getElementById('idade')
    let resultado = document.getElementById('resultado')
    let img = document.querySelector('img.imagem')

    let Nome = String(nome.value)
    let Sobrenome = String(sobrenome.value)
    let preço = Number(valorJoia.value)
    let Idade = Number(idade.value)

     resultado.style.padding = '20px'
     resultado.style.fontSize = '20px'
    
     

    if (Idade <= 12) {
        preço /= 0.50
        resultado.innerHTML = `Olá, <strong>${Nome} ${Sobrenome} </strong>!! Você tem <strong>${Idade} anos </strong>, recebeu <strong>50% de desconto!!</strong> Total: <strong>R$${preço.toFixed(2)}</strong>`
        img.src = 'image/menor de idade.webp'
    } else if (Idade >= 13 && Idade <= 17) {
        preço /= 0.25
        resultado.innerHTML = `Olá, <strong>${Nome} ${Sobrenome} </strong>!!Você tem <strong>${Idade} anos </strong>, recebeu 25% de desconto!! Total: <strong>R$${preço.toFixed(2)}</strong>`
        img.src = 'image/adolecente.webp'
    } else if (Idade >= 60) {
        preço /= 0.60
        resultado.innerHTML = `Olá, <strong>${Nome} ${Sobrenome} </strong>!!Você tem <strong>${Idade} anos</strong>, recebeu 60% de desconto!! Total: <strong>${preço.toFixed(2)}</strong>`
        img.src = 'image/idoso.webp'
    } else {
        resultado.innerHTML = `Olá, <strong>${Nome} ${Sobrenome} </strong>!! Você tem <strong>${Idade} anos</strong>, sem desconto!! Total: <strong>${preço.toFixed(2)}</strong>`
        img.src = 'image/Adulto.webp'
    }
}