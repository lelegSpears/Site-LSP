function conversao() {
  const pesoStr   = document.getElementById("peso").value.replace(/,/g, ".");
  const alturaStr = document.getElementById("altura").value.replace(/,/g, ".");

  const peso   = parseFloat(pesoStr);
  const altura = parseFloat(alturaStr);

  if (isNaN(peso) || isNaN(altura) || altura === 0) {
    document.getElementById("conta").innerText = "Insira valores válidos";
    return;
  }

  const resultado = peso / Math.pow(altura, 2);
  document.getElementById("conta").innerText = "IMC: " + resultado.toFixed(2);

  classificar_imc(resultado);
}

function classificar_imc(imc){
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Você está abaixo do peso.";
    } else if (imc <= 24.9) {
        classificacao = "Você está no peso normal.";
    } else if (imc <= 29.9) {
        classificacao = "Você está com Sobrepeso.";
    } else if (imc <= 34.9) {
        classificacao = "Você está com Obesidade Grau 1.";
    } else if (imc <= 39.9) {
        classificacao = "Você está com Obesidade Grau 2.";
    } else {
        classificacao = "Você está com Obesidade Grau 3.";
    }

    // Adiciona classificação abaixo do resultado
    document.getElementById("conta").innerHTML += "<br>" + classificacao;
}