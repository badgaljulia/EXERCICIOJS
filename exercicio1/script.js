function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFatorial(numero - 1);
  }
}

function combinacao(n, k) {
  if (n < k) {
    return "n deve ser maior ou igual a k";
}

  const numerador = calcularFatorial(n);
  const denominador = calcularFatorial(n - k) * calcularFatorial(k);
  const resultado = numerador / denominador;

  return resultado;
}

function calcularCombinação() {
  const n = parseInt(document.getElementById("nInput").value);
  const k = parseInt(document.getElementById("kInput").value);

  const resultado = combinacao(n, k);
    document.getElementById("resultado").innerText = `C(${n}, ${k}) 
 = ${resultado};
}