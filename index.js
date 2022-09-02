var conta = [""];
var resultado = "0";
var contaPorExtenso = 0;
var i = 0;

function digitType(n) {
  conta.push(n);
  for (i; i < conta.length; i++) {
    contaPorExtenso = conta.join('');
    document.getElementById("resultado").innerHTML = contaPorExtenso;
  }
 }

function C() {
  conta = [""];
  resultado = "0";
  i = 0;
  document.getElementById("resultado").innerHTML = resultado;
  }

function result() {
  var positionOfOperator = contaPorExtenso.search(/[\/\*\+\-]/g);
  var termo2 = parseFloat(contaPorExtenso.slice(0, positionOfOperator));
  var termo3 = parseFloat(contaPorExtenso.slice(positionOfOperator + 1, contaPorExtenso.length));
  var operator = contaPorExtenso.substr(positionOfOperator, 1);
  if(isNaN(termo3)) {
    switch (operator) {
      case "+":
      var resultado = (termo2 + termo2);
      break;
      case "-":
      resultado = termo2 - termo2;
      break;
      case "*":
      resultado = termo2 * termo2;
      break;
      case "/":
      resultado = termo2 / termo2;
      break;
    } 
  } else {
    switch (operator) {
      case "+":
      var resultado = (termo2 + termo3);
      break;
      case "-":
      resultado = termo2 - termo3;
      break;
      case "*":
      resultado = termo2 * termo3;
      break;
      case "/":
      resultado = termo2 / termo3;
      break;
    };
  };
  document.getElementById("resultado").innerHTML = resultado;
  conta = [resultado];
  i = 1;
  console.log(resultado);
  console.log(termo3);
}