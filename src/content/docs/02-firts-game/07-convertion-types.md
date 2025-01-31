---
title: Conversión de Datos en Rust
description: Aprende más sobre mi proyecto en este sitio de documentación construido con Starlight.
---

En Rust, la conversión entre tipos de datos es una operación común y crucial para manejar datos de manera efectiva. Rust ofrece varias maneras de convertir datos entre diferentes tipos, y es importante entender cómo realizar estas conversiones de manera segura y eficiente.

## Conversión de Tipos Básicos

##### Conversión entre Tipos Numéricos

Rust proporciona varias formas de convertir entre tipos numéricos, como enteros y flotantes.

**Ejemplo: Conversión entre enteros y flotantes**

```rust
fn main() {
    let integer: i32 = 42;
    let float: f64 = integer as f64;
    println!("El número entero es: {}", integer);
    println!("El número flotante es: {}", float);
}
```

**Explicación:**

- **Casting (`as`)**: El operador `as` se utiliza para convertir entre tipos numéricos. En el ejemplo, convertimos un entero (`i32`) a un flotante (`f64`).

##### Conversión entre Strings y Otros Tipos

A menudo, necesitarás convertir cadenas (`String`) a números y viceversa.

**Ejemplo: Conversión de `String` a `i32`**

```rust
fn main() {
    let number_str = "123";
    let number: i32 = number_str.parse().expect("No se pudo convertir la cadena a número");
    println!("El número es: {}", number);
}
```

**Explicación:**

- **`parse()`**: El método `parse()` se utiliza para convertir una cadena en otro tipo. Debe especificarse el tipo al que se desea convertir. En este caso, convertimos una cadena a un entero (`i32`).

**Ejemplo: Conversión de `i32` a `String`**

```rust
fn main() {
    let number: i32 = 123;
    let number_str = number.to_string();
    println!("La cadena es: {}", number_str);
}
```

**Explicación:**

- **`to_string()`**: El método `to_string()` convierte un tipo numérico a una cadena (`String`).


##### Conversión entre Tipos de Cadenas

Rust maneja dos tipos principales de cadenas: `String` y `&str`.

**Ejemplo: Conversión de `String` a `&str`**

```rust
fn main() {
    let string = String::from("Hola, mundo!");
    let string_slice: &str = &string;
    println!("La cadena de tipo &str es: {}", string_slice);
}
```

**Explicación:**

- **Referencia (`&`)**: Al usar `&`, convertimos una `String` en una referencia a una cadena (`&str`). Esto es seguro ya que `&str` es una vista no mutable de `String`.

**Ejemplo: Conversión de `&str` a `String`**

```rust
fn main() {
    let str_slice: &str = "Hola, mundo!";
    let string = str_slice.to_string();
    println!("La cadena de tipo String es: {}", string);
}
```

**Explicación:**

- **`to_string()`**: El método `to_string()` también puede usarse para convertir una referencia a una cadena (`&str`) en un tipo `String`.


## Trabajando en nuestro proyecto
En nuestro proyecto para realizar comparaciones necesitamos convertir el número ingresado por teclado que es una Cadena a Número. Para esto podemos agregr el siguiente código a nuestro proyecto.

```diff lang="rs"
use std::{io::stdin, io::stdout, io::Write};

use rand::Rng; // Importar el módulo rand

fn main() {
    println!("Mi primer juego con Rust");

    // Generar número aleatorio
    let secret_number = rand::thread_rng().gen_range(1..=100);
    println!("El número secreto es: {secret_number}");

    let mut user_choese = String::new();

    print!("Ingres un número entre (0 y 100):");
    // Vacia el bufer
    stdout().flush().expect("No se pudo vaciar stdout"); 

    //Ingresa los datos desde teclado
    stdin().read_line(&mut user_choese).expect("Error al leer la línea");

+    // Convertir de String a Integer
+    let user_choese:i32 = user_choese.parse().expect("¡Ingrese un número por favor!");
    
    println!("El número ingresado por el usaurio es: {}", user_choese);
   
}

```
## Conclusión

La conversión de datos en Rust es una operación fundamental y versátil que te permite transformar entre diferentes tipos de datos de manera segura y eficiente. Al utilizar operadores de conversión (`as`), métodos como `parse()` y `to_string()`, y manejar errores adecuadamente, puedes escribir código robusto y confiable que maneje datos de manera efectiva en tus programas Rust.