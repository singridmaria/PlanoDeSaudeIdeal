function processar() {
    const { peso, altura, idade } = pegarDados();
    const IMC = (peso / (altura * altura));
    const resultado = validacao(IMC);
    exibirResultadoIMC(resultado);
    const valores = [calcularPrecoPlanoBasico(idade, IMC), calcularPrecoPlanoStandard(idade, IMC), calcularPrecoPlanoPremium(idade, IMC)];
    exibirResultadoplanos(valores);
}
function exibirResultadoIMC(resultado) {
    document.getElementById('calc').innerHTML = resultado;
}
function exibirResultadoplanos(valores) {
    document.getElementById('planos').innerHTML = valores;
}
function validacao(IMC) {

    if (IMC < 18.5) {
        return 'Baixo peso';

    } else if (IMC >= 18.5 && IMC < 25) {
        return 'Normal';
    } else if (IMC >= 25 && IMC < 30) {
        return 'Sobrepeso';
    } else if (IMC >= 30 && IMC < 35) {
        return 'Obesidade';
    } else if (IMC >= 35 && IMC < 40) {
        return 'Obesidade Mórbida';
    } else if (IMC > 40) {
        return 'Obesidade Mórbida';
    }
}
//calcula plano A
function calcularPrecoPlanoBasico(idade, IMC) {
    return 100 + (idade * 10 * (IMC / 10));
}

function calcularPrecoPlanoStandard(idade, IMC) {
    return (150 + (idade * 15)) * (IMC / 10);
}

function calcularPrecoPlanoPremium(idade, IMC) {
    return (200 - (IMC * 10) + (idade * 20)) * (IMC / 10);
}

function pegarDados() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const idade = document.getElementById('idade').value;
    return { peso, altura, idade };
}

