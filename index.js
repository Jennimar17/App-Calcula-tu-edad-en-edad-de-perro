// let edadDelUsusario = prompt("Decime tu edad")

// if (edadDelUsusario <= 0) {
//     alert("Edad Erronea")

// } else if (edadDelUsusario <= 5) {
//     alert("tu edad de Perro es: 2 Meses")
// } else {
//     alert("A mi no me engañas... Pón un número válido")
// }

const form = document.querySelector(".mini-form-container")
const inputEdad = document.getElementById("edad")
const edadDelUsusarioEnAñosPerro = document.getElementById("respuesta")

console.log(form)

form.onsubmit = (e) => {
    e.preventDefault();
    const edadDelUsusarioEnNumeros = Number(inputEdad.value)
    console.log(edadDelUsusarioEnNumeros)
    if (edadDelUsusarioEnNumeros <= 0) {
        edadDelUsusarioEnAñosPerro.textContent = ("0")
        console.log(edadDelUsusarioEnAñosPerro)
    } else if (edadDelUsusarioEnNumeros <= 5) {
        edadDelUsusarioEnAñosPerro.textContent = ("2 M")
    } else if (edadDelUsusarioEnNumeros <= 11) {
        edadDelUsusarioEnAñosPerro.textContent = ("6 M")
    } else if (edadDelUsusarioEnNumeros <= 13) {
        edadDelUsusarioEnAñosPerro.textContent = ("8 M")
    } else if (edadDelUsusarioEnNumeros <= 15) {
        edadDelUsusarioEnAñosPerro.textContent = ("10 M")
    } else if (edadDelUsusarioEnNumeros <= 23) {
        edadDelUsusarioEnAñosPerro.textContent = ("1 A")
    } else if (edadDelUsusarioEnNumeros <= 28) {
        edadDelUsusarioEnAñosPerro.textContent = ("2 A")
    } else if (edadDelUsusarioEnNumeros <= 31) {
        edadDelUsusarioEnAñosPerro.textContent = ("3 A")
    } else if (edadDelUsusarioEnNumeros <= 35) {
        edadDelUsusarioEnAñosPerro.textContent = ("4 A")
    } else if (edadDelUsusarioEnNumeros <= 39) {
        edadDelUsusarioEnAñosPerro.textContent = ("5 A")
    } else if (edadDelUsusarioEnNumeros <= 43) {
        edadDelUsusarioEnAñosPerro.textContent = ("6 A")
    } else if (edadDelUsusarioEnNumeros <= 47) {
        edadDelUsusarioEnAñosPerro.textContent = ("7 A")
    } else if (edadDelUsusarioEnNumeros <= 51) {
        edadDelUsusarioEnAñosPerro.textContent = ("8 A")
    } else if (edadDelUsusarioEnNumeros <= 55) {
        edadDelUsusarioEnAñosPerro.textContent = ("9 A")
    } else if (edadDelUsusarioEnNumeros <= 59) {
        edadDelUsusarioEnAñosPerro.textContent = ("10 A")
    } else if (edadDelUsusarioEnNumeros <= 63) {
        edadDelUsusarioEnAñosPerro.textContent = ("11 A")
    } else if (edadDelUsusarioEnNumeros <= 67) {
        edadDelUsusarioEnAñosPerro.textContent = ("12 A")
    } else if (edadDelUsusarioEnNumeros <= 71) {
        edadDelUsusarioEnAñosPerro.textContent = ("13 A")
    } else if (edadDelUsusarioEnNumeros <= 75) {
        edadDelUsusarioEnAñosPerro.textContent = ("14 A")
    } else if (edadDelUsusarioEnNumeros <= 79) {
        edadDelUsusarioEnAñosPerro.textContent = ("15 A")
    } else if (edadDelUsusarioEnNumeros <= 84) {
        edadDelUsusarioEnAñosPerro.textContent = ("16 A")
    } else if (edadDelUsusarioEnNumeros >= 85) {
        edadDelUsusarioEnAñosPerro.textContent = ("☠")
    }

}