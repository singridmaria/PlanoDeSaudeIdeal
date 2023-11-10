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
        return 'Classificação: Baixo peso - Risco de Comorbidade: Baixo';

    } else if (IMC >= 18.5 && IMC < 25) {
        return 'Classificação: Normal - Risco de Comorbidade: Normal';
    } else if (IMC >= 25 && IMC < 30) {
        return 'Classificação: Sobrepeso - Risco de Comorbidade: Aumentado';
    } else if (IMC >= 30 && IMC < 35) {
        return 'Classificação: Obesidade - Risco de Comorbidade: Moderado';
    } else if (IMC >= 35 && IMC < 40) {
        return 'Classificação: Obesidade Mórbida - Risco de Comorbidade: Grave';
    } else if (IMC > 40) {
        return 'Classificação: Obesidade Mórbida - Risco de Comorbidade: Muito Grave';
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

