function CalcularFactorial() {
  const numberFactorial = document.getElementById("factorial");

  const resultado = document.getElementById("respuesta1");

  const num = parseInt(numberFactorial.value);
  console.log(num);

  if (isNaN(num) || num < 0) {
    resultado.textContent = "por favor, ingresa un numero valido o igual a 0";
    return;
  }
  if (num == 0 || num === 1) {
    resultado.textContent = "El factorial de " + num + "es 1.";
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  resultado.textContent = "El factorial de " + num + "es " + factorial;

  function verificarPalindromo() {
    const inputpalindromo = document.getElementById("inputpalindromo");
    const respuesta = document.getElementById("respuesta2");
    const texto = inputpalindromo.value.toLowercase().replace(/[^a-z]/g, "");

    if (texto === "") {
      respuesta.textContent("por favor, ingresa una palabra valida");
      return;
    }

    const reverse = texto.split("").reverse().join("");

    if (texto === reverse) {
      respuesta.textContent =
        "si, la palabra" + inputpalindromo.value + ". es un palindromo";
    } else {
      respuesta.textContent =
        "No, la palabra: " + inputpalindromo.value + ". No es un palindromo";
    }
  }
}
