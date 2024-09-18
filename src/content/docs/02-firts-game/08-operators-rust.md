---
title: Operadores en Rust
description: Aprende más sobre mi proyecto en este sitio de documentación construido con Starlight.
---

En Rust, los operadores permiten realizar diversas operaciones con valores y variables, como cálculos matemáticos, comparaciones lógicas o trabajar con bits. A continuación, se presenta una descripción de los operadores más utilizados en Rust, organizados en varias categorías.

## 1. Operadores Aritméticos

Los operadores aritméticos permiten realizar operaciones matemáticas con números.

| Operador | Descripción                     | Ejemplo                      |
|----------|---------------------------------|------------------------------|
| `+`      | Suma dos valores                | `5 + 10` = `15`              |
| `-`      | Resta un valor de otro          | `10 - 5` = `5`               |
| `*`      | Multiplica dos valores          | `4 * 5` = `20`               |
| `/`      | Divide un valor entre otro      | `10 / 3` = `3` (trunca decimales) |
| `%`      | Calcula el residuo de una división | `10 % 3` = `1`            |

### Ejemplo:

```rust
let sum = 5 + 10;
let difference = 10 - 5;
let product = 4 * 5;
let quotient = 10 / 3;
let remainder = 10 % 3;
println!("Resultados: Suma = {sum}, Resta = {difference}, Producto = {product}, Cociente = {quotient}, Residuo = {remainder}");
```

## 2. Operadores de Comparación

Los operadores de comparación comparan dos valores y devuelven un valor booleano (`true` o `false`).

| Operador | Descripción                              | Ejemplo              |
|----------|------------------------------------------|----------------------|
| `==`     | Verifica si dos valores son iguales       | `5 == 5` = `true`    |
| `!=`     | Verifica si dos valores no son iguales    | `5 != 3` = `true`    |
| `>`      | Verifica si un valor es mayor que otro    | `5 > 3` = `true`     |
| `<`      | Verifica si un valor es menor que otro    | `3 < 5` = `true`     |
| `>=`     | Verifica si un valor es mayor o igual que otro | `5 >= 5` = `true` |
| `<=`     | Verifica si un valor es menor o igual que otro | `3 <= 5` = `true` |

### Ejemplo:

```rust
let is_equal = 5 == 5;
let is_not_equal = 5 != 3;
let greater_than = 5 > 3;
let less_than = 3 < 5;
println!("¿Son iguales? {is_equal}, ¿Son diferentes? {is_not_equal}, ¿Es mayor? {greater_than}, ¿Es menor? {less_than}");
```

## 3. Operadores Lógicos

Los operadores lógicos permiten combinar o invertir condiciones.

| Operador | Descripción                    | Ejemplo                      |
|----------|--------------------------------|------------------------------|
| `&&`     | Devuelve `true` si ambas condiciones son verdaderas | `(5 > 2) && (3 < 4)` = `true` |
| `\|\|`     | Devuelve `true` si al menos una condición es verdadera | `(5 > 2) \|\| (3 > 4)` = `true` |
| `!`      | Invierte el valor booleano de una condición | `!(5 > 2)` = `false` |

### Ejemplo:

```rust
let and_result = (5 > 2) && (3 < 4);
let or_result = (5 > 2) || (3 > 4);
let not_result = !(5 > 2);
println!("Resultado AND lógico: {and_result}, OR lógico: {or_result}, NOT lógico: {not_result}");
```

## 4. Operadores de Asignación

Los operadores de asignación permiten asignar o modificar el valor de una variable.

| Operador | Descripción                                         | Ejemplo                   |
|----------|-----------------------------------------------------|---------------------------|
| `=`      | Asigna un valor a una variable                      | `let x = 5`               |
| `+=`     | Suma y asigna el resultado a la variable            | `x += 3` (equivale a `x = x + 3`) |
| `-=`     | Resta y asigna el resultado a la variable           | `x -= 3`                  |
| `*=`     | Multiplica y asigna el resultado a la variable      | `x *= 2`                  |
| `/=`     | Divide y asigna el resultado a la variable          | `x /= 2`                  |
| `%=`     | Calcula el residuo y asigna el resultado a la variable | `x %= 2`               |

### Ejemplo:

```rust
let mut x = 5;
x += 3; // x ahora es 8
x *= 2; // x ahora es 16
println!("El valor de x es {x}");
```

## 5. Operadores de Incremento y Decremento

Aunque Rust no tiene operadores de incremento (`++`) y decremento (`--`) como otros lenguajes, se puede lograr el mismo resultado mediante los operadores de asignación compuesta.

| Operador | Descripción                    | Ejemplo           |
|----------|--------------------------------|-------------------|
| `+= 1`   | Incrementa el valor en 1       | `x += 1`          |
| `-= 1`   | Decrementa el valor en 1       | `x -= 1`          |

### Ejemplo:

```rust
let mut x = 5;
x += 1; // x ahora es 6
x -= 1; // x ahora es 5
println!("El valor de x es {x}");
```

## 6. Operadores de Bits

Los operadores de bits permiten manipular bits individuales de números enteros.

| Operador | Descripción                             | Ejemplo               |
|----------|-----------------------------------------|-----------------------|
| `&`      | AND bit a bit entre dos números         | `5 & 3` = `1`         |
| `|`      | OR bit a bit entre dos números          | `5 | 3` = `7`         |
| `^`      | XOR bit a bit entre dos números         | `5 ^ 3` = `6`         |
| `<<`     | Desplaza los bits hacia la izquierda    | `2 << 1` = `4`        |
| `>>`     | Desplaza los bits hacia la derecha      | `4 >> 1` = `2`        |

### Ejemplo:

```rust
let and_bitwise = 5 & 3;
let or_bitwise = 5 | 3;
let xor_bitwise = 5 ^ 3;
let left_shift = 2 << 1;
let right_shift = 4 >> 1;
println!("AND: {and_bitwise}, OR: {or_bitwise}, XOR: {xor_bitwise}, Desplazamiento izq: {left_shift}, Desplazamiento der: {right_shift}");
```

## Conclusión

Rust proporciona una amplia gama de operadores que te permiten realizar operaciones matemáticas, comparaciones lógicas, manipulaciones de bits y mucho más. Comprender cómo utilizar cada uno de estos operadores es fundamental para escribir código eficiente y legible en Rust.