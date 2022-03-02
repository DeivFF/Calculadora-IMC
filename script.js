const calcular = document.getElementById("calcular")

function imc(){

    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const resposta = document.getElementById("resposta")

    if(nome !== '' && altura !== '' && peso !== ''){
        const calcImc = (peso / (altura ** 2)).toFixed(1)
        let classificacao = ''

        if(calcImc < 18.5){
            classificacao = "abaixo do peso";
        }else if(calcImc < 25){
            classificacao = "você está no peso ideal";
        }else if(calcImc < 30){
            classificacao = "levemente acima do peso"
        }else if(calcImc < 35){
            classificacao = "obesidade grau I"
        }else if(calcImc < 40){
            classificacao = "obesidade grau II"
        }else{
            classificacao = "obesidade grau III"
        }
        resposta.textContent = `${nome} seu imc é ${calcImc} e você está ${classificacao} `
    }else{
        resposta.textContent = "Preencha todos os campos!!"
    }

    resposta.classList.add("active")
}
calcular.addEventListener('click', imc)