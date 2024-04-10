// Adicionando funções matemáticas adicionais
function soma(x, y) {
    return x + y;
}

function subtracao(x, y) {
    return x - y;
}

function divisao(x, y) {
    if (y === 0) {
        return 'Erro: divisão por zero';
    }
    return x / y;
}

function multiplicacao(x, y) {
    return x * y;
}

function porcentagem(x, y) {
    return (x * y) / 100;
}

function logaritmo(x, base) {
    return Math.log(x) / Math.log(base);
}

function exponenciacao(x, y) {
    return Math.pow(x, y);
}

function radiciacao(x) {
    return Math.sqrt(x);
}

function fatorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * fatorial(x - 1);
}

function seno(x) {
    return Math.sin(x);
}

function coseno(x) {
    return Math.cos(x);
}

function tangente(x) {
    return Math.tan(x);
}

function tangenteHiperbolica(x) {
    return Math.tanh(x);
}

// Função principal de cálculo
function calculate() {
    try {
        const expression = document.getElementById('display').value;
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

// Adicionando essas funções aos botões da calculadora
function addMathFunction(value) {
    document.getElementById('display').value += value + '(';
}

// Limpar o visor
function clearDisplay() {
    document.getElementById('display').value = '';
}
