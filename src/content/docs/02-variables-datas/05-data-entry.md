---
title: Entrada de datos
description: El manejo de entrada y salida es una parte fundamental en cualquier lenguaje de programación. En Rust, la biblioteca estándar (`std`) proporciona herramientas poderosas para trabajar con la entrada y salida de datos.
---

El manejo de entrada y salida es una parte fundamental en cualquier lenguaje de programación. En Rust, la biblioteca estándar (`std`) proporciona herramientas poderosas para trabajar con la entrada y salida de datos. En este artículo, vamos a explorar cómo leer datos desde la consola y cómo mostrar información al usuario utilizando `print!`, `println!` y otros conceptos útiles.


## Leer datos desde la consola

A continuación, presentamos un ejemplo básico en el que solicitamos al usuario que ingrese un número y luego mostramos el valor ingresado:

```rust
use std::{io::stdin};

fn main() {
    println!("Mi primer juego con Rust");

    let mut user_choese = String::new();

    println!("Ingresa un número entre (0 y 100):");
    
    // Lee los datos ingresados por el usuario desde el teclado
    stdin().read_line(&mut user_choese).expect("Error al leer la línea");
    
    println!("El número ingresado por el usuario es: {}", user_choese);
}
```

## Explicación del código

1. **Importación de la librería estándar `std`**:
   - **`use std::{io::stdin};`**: Aquí estamos importando el módulo `stdin` de la biblioteca estándar (`std`). Este módulo contiene funciones relacionadas con la entrada y salida de datos.
   - **`stdin()`**: Es la función que se utiliza para leer la entrada estándar, es decir, los datos que el usuario ingresa a través del teclado.

2. **Declaración de variables**:
   - **`let mut user_choese = String::new();`**: Aquí se declara una variable mutable (`mut`) llamada `user_choese`. La palabra clave `mut` permite modificar el valor de la variable más adelante en el programa. Inicializamos esta variable como una cadena vacía (`String::new()`), ya que vamos a almacenar una entrada de texto.

3. **Lectura de datos desde la consola**:
   - **`stdin().read_line(&mut user_choese).expect("Error al ingresar datos");`**: Esta línea utiliza la función `read_line()` para leer lo que el usuario ingresa desde el teclado. La referencia mutable `&mut user_choese` indica que el valor ingresado se guardará en la variable `user_choese`.
   - **`expect("Error al ingresar datos")`**: Si ocurre algún error durante la lectura de los datos, el programa mostrará el mensaje "Error al ingresar datos" y finalizará de forma controlada. En Rust, es común usar `expect` para manejar posibles errores de entrada y salida.

4. **Mostrar el valor ingresado**:
   - **`println!("El número ingresado por el usuario es: {}", user_choese);`**: Esta línea imprime el valor ingresado por el usuario. El marcador `{}` se utiliza para insertar el contenido de la variable `user_choese` dentro de la cadena.


## Uso de `print!` y vaciado de búfer

En este ejemplo, veremos cómo utilizar `print!` para mostrar mensajes sin agregar un salto de línea al final, y cómo vaciar el búfer de salida con la función `flush` para asegurarnos de que el mensaje se muestre inmediatamente.

```rust
use std::{io::stdin, io::stdout, io::Write};

fn main() {
    println!("Adivina el número");

    let mut user_choese = String::new();

    print!("Ingresa un número entre (0 y 100):");
    // Vacía el búfer de salida para mostrar el mensaje inmediatamente
    stdout().flush().expect("Error al vaciar el búfer");

    // Lee los datos desde el teclado
    stdin().read_line(&mut user_choese).expect("Error al leer la línea");
    
    println!("El número ingresado por el usuario es: {}", user_choese);
}
```

## Explicación del código adicional

1. **Importación de módulos adicionales**:
   - **`use std::{io::stdout, io::Write};`**: Además de `stdin`, también estamos importando el módulo `stdout` y el trait `Write`. El módulo `stdout` maneja la salida estándar, mientras que el trait `Write` proporciona el método `flush`, que es necesario para vaciar el búfer de salida.
   
2. **Uso de `print!` en lugar de `println!`**:
   - **`print!("Ingresa un número entre (0 y 100):");`**: A diferencia de `println!`, el macro `print!` no agrega un salto de línea al final del mensaje, lo que permite que el cursor permanezca en la misma línea.

3. **Vaciado del búfer con `flush`**:
   - **`stdout().flush().expect("Error al vaciar el búfer");`**: La salida estándar en Rust está en búfer, lo que significa que el texto que enviamos a la consola puede no aparecer inmediatamente. Al utilizar `flush`, forzamos que el contenido del búfer se vacíe, haciendo que el mensaje se muestre antes de que el programa lea la entrada del usuario.

4. **Flujo del programa**:
   - Primero se imprime el mensaje "Adivina el número" con `println!`, que incluye un salto de línea.
   - Luego, con `print!`, mostramos "Ingresa un número entre (0 y 100):" sin agregar un salto de línea, permitiendo que el cursor permanezca en la misma línea.
   - Utilizamos `stdout().flush()` para asegurarnos de que el mensaje se imprima en la consola antes de que el programa espere la entrada del usuario.
   - Finalmente, leemos el valor ingresado por el usuario con `read_line` y lo mostramos con `println!`.


:::note

1. **`print!` y `println!`**:
   - Ambos macros se usan para mostrar mensajes en la consola, pero `println!` siempre agrega un salto de línea al final del mensaje, mientras que `print!` no lo hace. Esto es útil cuando queremos que el mensaje y la entrada del usuario se vean en la misma línea.

2. **Vaciado del búfer con `flush()`**:
   - En sistemas donde la salida estándar está en búfer, los datos no se muestran en la consola hasta que se llene el búfer o se vacíe manualmente con `flush`. El uso de `flush()` es importante cuando queremos asegurarnos de que los datos se impriman inmediatamente.

3. **Lectura de entrada con `read_line()`**:
   - La función `read_line()` captura lo que el usuario ingresa como una cadena de texto (`String`). Si se necesitan otros tipos de datos, como enteros o flotantes, es necesario convertir la cadena utilizando métodos como `parse()`.
:::

## Conclusión

En Rust, la entrada y salida de datos desde la consola se maneja a través del módulo `io` de la biblioteca estándar. Con los macros `print!` y `println!`, puedes mostrar mensajes en la consola, y con `stdin().read_line()`, puedes leer la entrada del usuario. Además, es importante conocer el uso de `flush()` para vaciar el búfer de salida cuando sea necesario. Estos conceptos son esenciales para interactuar con los usuarios y crear aplicaciones más dinámicas y útiles.







