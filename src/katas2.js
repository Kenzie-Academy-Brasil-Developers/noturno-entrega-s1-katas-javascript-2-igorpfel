//  ex 1 - Soma (1 ponto)
function add(a = 0, b = 0) {
  return a + b;
}
// EX 2 - Multiplicação (2 ponto)
function multiply(num1, num2) {
  let Resultado = 0;

  for (let index = 0; index < num2; index++) {
    Resultado += add(num1);
  }
  return Resultado;
}

console.log(multiply(6, 8));

// EX 3 Potência (2 pontos)
function POTENCIA(num1, num2) {
  let pot = 1;

  for (let index = 0; index < num2; index++) {
    pot *= num1;
  }

  return pot;
}

function power(x, n) {
  let Output = 0;

  for (let index = 1; index <= n; index++) {
    Output = POTENCIA(x, n);
  }

  return Output;
}
console.log(power(2, 9));

// EX 4 -  função factorial 

function Fact(num1) {
  let fat = 1;

  for (let index = num1; index >= 1; index--) {
    fat *= index;
  }

  return fat;
} 


function factorial(x) {
  let Output = 1;

  for (let index = x; index >=1; index--) {
    Output = Fact(x);
  }

  return Output;
}
console.log(factorial(8));

