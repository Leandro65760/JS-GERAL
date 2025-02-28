/**
 * Demonstrates various JavaScript operators.
 * 
 * 1. Operadores Aritméticos:
 * - Adição: a + b
 * - Subtração: a - b
 * - Multiplicação: a * b
 * - Divisão: a / b
 * - Módulo: a % b
 * - Incremento: ++a
 * - Decremento: --b
 * 
 * 2. Operadores de Atribuição:
 * - Atribuição simples: c = 20
 * - Atribuição de Adição: c += 10
 * - Atribuição de Subtração: c -= 5
 * - Atribuição de Multiplicação: c *= 2
 * - Atribuição de Divisão: c /= 5
 * - Atribuição de Módulo: c %= 3
 * 
 * 3. Operadores de Comparação:
 * - Igual: a == 11
 * - Não igual: a != 10
 * - Estritamente igual: a === 11
 * - Estritamente não igual: a !== 10
 * - Maior que: a > 5
 * - Maior ou igual que: a >= 11
 * - Menor que: b < 5
 * - Menor ou igual que: b <= 4
 * 
 * 4. Operadores Lógicos:
 * - E lógico:  x  &&  y 
 * - Em python, o operador E lógico é `and`
 * - OU lógico: x  ||  y
 * - Em python, o operador OU lógico é `or`
 * - NÃO lógico:   !   x
 * - Em python, o operador NÃO lógico é `not` e representa o contrário do valor ou condição original.
 * 
 * 5. Operadores de String:
 * - Concatenação: str1 + " " + str2
 * - Concatenação e atribuição: str1 += " Everyone"
 * 
 * 6. Operadores Ternários:
 * - Condicional: (age >= 18) ? "Yes" : "No"
 *
 * Explicação dos Operadores Ternários:
 * - Operadores ternários são usados para avaliar uma expressão condicionalmente.
 * - A sintaxe é: `condição ? expressão1 : expressão2`.
 * - Se a condição for verdadeira, a expressão1 é avaliada; caso contrário, a expressão2 é avaliada.
 * 
 * - ? é o operador ternário, também conhecido como operador condicional.
 * - : é o separador de expressão.
 * - O operador ternário é uma forma abreviada de uma instrução if...else.
 * 
 * 
 * 7. Operadores Bit a Bit:
 * - E bit a bit: d & e
 * - OU bit a bit: d | e
 * - OU exclusivo bit a bit: d ^ e
 * - NÃO bit a bit: ~d
 * - Deslocamento à esquerda: d << 1
 * - Deslocamento à direita: d >> 1
 * - Deslocamento à direita sem sinal: d >>> 1
 * 
 * 8. Operadores Unários:
 * - Tipo de: typeof str1
 * - Deletar: delete obj.name
 * - Void: void 0
 * 
 * Explicação dos Operadores Unários:
 * - Operadores unários são aqueles que operam em um único operando.
 * - `typeof`: Retorna uma string indicando o tipo do operando.
 * - `delete`: Remove uma propriedade de um objeto.
 * - `void`: Avalia uma expressão e retorna undefined.
 */

// 1. Operadores Aritméticos:
let a = 10;
let b = 5;
console.log(a + b); // Adição: 15
console.log(a - b); // Subtração: 5
console.log(a * b); // Multiplicação: 50
console.log(a / b); // Divisão: 2
console.log(a % b); // Módulo: 0
console.log(++a);   // Incremento: 11
console.log(--b);   // Decremento: 4

// 2. Operadores de Atribuição:
// Atribuição simples:
let c = 20; // Atribui o valor 20 à variável c

// Atribuição de Adição (+=):
c += 10; // Equivalente a c = c + 10; c agora é 30

// Atribuição de Subtração (-=):
c -= 5; // Equivalente a c = c - 5; c agora é 25

// Atribuição de Multiplicação (*=):
c *= 2; // Equivalente a c = c * 2; c agora é 50

// Atribuição de Divisão (/=):
c /= 5; // Equivalente a c = c / 5; c agora é 10

// Atribuição de Módulo (%=):
c %= 3; // Equivalente a c = c % 3; c agora é 1

// 3. Operadores de Comparação:
console.log(a == 11);  // Igual: true
console.log(a != 10);  // Não igual: true
console.log(a === 11); // Estritamente igual: true
console.log(a !== 10); // Estritamente não igual: true
console.log(a > 5);    // Maior que: true
console.log(a >= 11);  // Maior ou igual que: true
console.log(b < 5);    // Menor que: false
console.log(b <= 4);   // Menor ou igual que: true

// 4. Operadores Lógicos:
let x = true;
let y = false;
console.log(x && y); // E lógico: false
console.log(x || y); // OU lógico: true
console.log(!x);     // NÃO lógico: false

// 5. Operadores de String:
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // Concatenação: "Hello World"
str1 += " Everyone";
console.log(str1); // Concatenação e atribuição: "Hello Everyone"

// 6. Operadores Ternários:
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Condicional: "Yes"

// 7. Operadores Bit a Bit:
let d = 5;  // 0101 em binário
let e = 3;  // 0011 em binário
console.log(d & e);  // E bit a bit: 1 (0001)
console.log(d | e);  // OU bit a bit: 7 (0111)
console.log(d ^ e);  // OU exclusivo bit a bit: 6 (0110)
console.log(~d);     // NÃO bit a bit: -6 (invertendo todos os bits)
console.log(d << 1); // Deslocamento à esquerda: 10 (1010)
console.log(d >> 1); // Deslocamento à direita: 2 (0010)
console.log(d >>> 1);// Deslocamento à direita sem sinal: 2 (0010)

// 8. Operadores Unários:
console.log(typeof str1); // Tipo de: "string"
let obj = { name: "John" };
delete obj.name;
console.log(obj); // Deletar: {}
console.log(void 0); // Void: undefined
