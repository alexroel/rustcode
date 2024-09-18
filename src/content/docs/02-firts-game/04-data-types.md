---
title: Tipos de datos
description: Aprende más sobre mi proyecto en este sitio de documentación construido con Starlight.
---

Rust es un lenguaje fuertemente tipado, lo que significa que cada valor debe tener un tipo específico. Esto permite un control riguroso sobre el manejo de los datos, promoviendo la seguridad y el rendimiento. A continuación, exploraremos los principales tipos de datos disponibles en Rust, como números, valores booleanos y cadenas de texto.

## Tipos de Datos Numéricos

En Rust, los números se dividen en varias categorías según su tipo y si son enteros o flotantes. Existen tipos de datos específicos para representar números con signo, sin signo y números flotantes.

### 1. Números con Signo (signed integers)

Los números con signo pueden ser positivos o negativos, y se representan utilizando los tipos `i8`, `i16`, `i32`, `i64`, `i128`, y `isize`, donde el número en el nombre indica la cantidad de bits que utilizan.

Ejemplo de uso:

```rust
let number: i32 = -50;
println!("El número con signo es {number}");
```

### 2. Números sin Signo (unsigned integers)

Los números sin signo son siempre positivos y se representan mediante los tipos `u8`, `u16`, `u32`, `u64`, `u128`, y `usize`.

Ejemplo de uso:

```rust
let number: u32 = 50;
println!("El número sin signo es {number}");
```

### 3. Números Flotantes (floating-point numbers)

Los números flotantes se utilizan para representar números con partes decimales. Rust proporciona dos tipos de datos para números flotantes: `f32` (precisión simple de 32 bits) y `f64` (precisión doble de 64 bits).

Ejemplo de uso:

```rust
let decimal: f64 = 3.14;
println!("El número flotante es {decimal}");
```

:::note
Al usar el macro `println!`, puedes imprimir cualquier tipo de número simplemente usando las llaves `{}` dentro de la cadena de formato.
:::

## Valores Booleanos

Rust admite el tipo de datos booleano con los valores `true` o `false`. Se utiliza para representar condiciones lógicas y decisiones binarias.

Ejemplo de uso:

```rust
let is_rust_fun = true;
println!("¿Es Rust divertido? {is_rust_fun}");
```

Los valores booleanos son útiles en declaraciones condicionales y bucles.

## Texto: Caracteres y Cadenas

Rust maneja el texto utilizando dos tipos principales: caracteres (`char`) y cadenas de texto (`String` o `&str`).

### 1. Caracteres (`char`)

Los caracteres en Rust se representan con el tipo `char`. A diferencia de otros lenguajes, donde los caracteres son representaciones de 1 byte (como en C o Java), en Rust, un `char` es un valor de 4 bytes y puede representar cualquier carácter Unicode.

Ejemplo de uso:

```rust
let letra: char = 'R';
println!("El carácter es {letra}");
```

:::note
A diferencia de otros lenguajes como C o Java, donde los caracteres son de 1 byte (ASCII), en Rust los caracteres son de 4 bytes, lo que permite representar una mayor gama de símbolos, incluidos caracteres especiales y emojis.
:::

### 2. Cadenas de Texto (`String` y `&str`)

En Rust, existen dos tipos principales para trabajar con cadenas de texto: `String` y `&str`.

- `String`: Es un tipo de cadena **dinámico** que se puede modificar. Es útil cuando necesitas trabajar con cadenas que puedan cambiar de tamaño.
  
  Ejemplo de uso:

  ```rust
  let mut greeting = String::from("Hola");
  greeting.push_str(", Rust!");
  println!("{greeting}");
  ```

- `&str`: Es una **referencia a una cadena de texto**. Este tipo es inmutable y generalmente se usa cuando el texto es conocido y no cambiará.

  Ejemplo de uso:

  ```rust
  let saludo: &str = "Hola, Rust!";
  println!("{saludo}");
  ```

:::note
`String` y `&str`:** Aunque ambos tipos representan cadenas de texto, `String` es un tipo en el heap, mientras que `&str` es una referencia a una cadena almacenada en el stack o en el código del programa. Las cadenas `String` son más flexibles, pero `&str` es más eficiente si no necesitas modificar la cadena.
:::

## Conclusión

Rust ofrece una variedad de tipos de datos que permiten un control preciso y eficiente sobre los valores en tu programa. Desde tipos numéricos hasta cadenas y booleanos, Rust asegura que trabajes con datos de manera segura y eficiente. Comprender cómo y cuándo usar cada tipo es crucial para aprovechar al máximo las capacidades del lenguaje.