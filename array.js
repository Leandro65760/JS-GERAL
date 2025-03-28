//Ex 1 
function concatenarArrays(arr1, arr2) {
        return arr1.concat(arr2);
        }

//Ex 2
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(3, 8);

//Ex 3
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
frutas.splice(2, 2, 'Kiwi', 'Pêssego');

//Ex 4 
const menuPrincipal = ['Prato 1', 'Prato 2', 'Prato 3'];
const menuDeSobremesas = ['Sobremesa 1', 'Sobremesa 2'];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
