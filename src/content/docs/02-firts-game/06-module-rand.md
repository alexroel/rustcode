---
title: Usando módulos externos
description: Aprende más sobre mi proyecto en este sitio de documentación construido con Starlight.
---

Rust ofrece una amplia gama de bibliotecas y módulos externos que pueden facilitar la implementación de diversas funcionalidades en tus programas. Uno de los módulos externos más utilizados es `rand`, que proporciona herramientas para generar números aleatorios. A continuación, te mostramos cómo instalar y usar el módulo `rand` para generar un número aleatorio entre 1 y 100.


## Instalación del Módulo `rand`

Para utilizar el módulo `rand` en tu proyecto de Rust, primero necesitas añadirlo a tu archivo `Cargo.toml`, que es el archivo de configuración de tu proyecto. Aquí es donde se gestionan las dependencias del proyecto.

1. **Abre el archivo `Cargo.toml`** de tu proyecto. Debería estar en la raíz de tu directorio de proyecto.

2. **Añade `rand` como una dependencia**. En la sección `[dependencies]`, añade la siguiente línea:

    ```toml
    [dependencies]
    rand = "0.8"  # Usa la versión más reciente compatible
    ```

    La versión especificada puede variar, por lo que te recomiendo consultar [crates.io](https://crates.io/crates/rand) para encontrar la versión más reciente del módulo `rand`.

3. **Guarda el archivo `Cargo.toml`**. Luego, ejecuta `cargo build` para que Cargo (el gestor de paquetes de Rust) descargue e instale la dependencia.


## Generar un Número Aleatorio entre 1 y 100

Una vez que hayas instalado el módulo `rand`, puedes usarlo en tu código para generar números aleatorios. A continuación, te mostramos un ejemplo de cómo hacerlo:

```diff lang="rs"
use std::{io::stdin, io::stdout, io::Write};

+use rand::Rng; // Importar el módulo rand

fn main() {
    println!("Mi primer juego con Rust");

+    // Generar número aleatorio
+    let secret_number = rand::thread_rng().gen_range(1..=100);
+    println!("El número secreto es: {secret_number}");

    let mut user_choese = String::new();

    print!("Ingres un número entre (0 y 100):");
    // Vacia el bufer
    stdout().flush().expect("No se pudo vaciar stdout"); 

    //Ingresa los datos desde teclado
    stdin().read_line(&mut user_choese).expect("Error al leer la línea");

    // Convertir de String a Integer
    let user_choese:i32 = user_choese.trim().parse().expect("¡Ingrese un número por favor!");
    
    println!("El número ingresado por el usaurio es: {}", user_choese);
   
}
```

## Explicación del Código

1. **Importación del módulo `rand`**:
   - **`use rand::Rng;`**: Importa el trait `Rng` del módulo `rand`. Este trait proporciona métodos para generar números aleatorios. Es importante importar este trait para poder usar métodos como `gen_range()`.

2. **Generación de un número aleatorio**:
   - **`let secret_number = rand::thread_rng().gen_range(1..=100);`**:
     - **`rand::thread_rng()`**: Crea un generador de números aleatorios específico para el hilo actual. Esto asegura que cada hilo tenga su propio generador, lo que es importante para la seguridad en programas concurrentes.
     - **`gen_range(1..=100)`**: Utiliza el método `gen_range()` del generador para obtener un número aleatorio en el rango de 1 a 100, inclusive. La sintaxis `1..=100` indica un rango inclusivo, donde tanto 1 como 100 están incluidos en el rango.

3. **Mostrar el número aleatorio**:
   - **`println!("El número secreto es: {secret_number}");`**: Imprime el número aleatorio generado en la consola. El marcador `{secret_number}` se reemplaza con el valor de la variable `secret_number`.

## Ejecución del Programa

Para ejecutar el programa:

1. **Guarda el archivo con el código**.
2. **En la terminal, navega hasta el directorio de tu proyecto**.
3. **Ejecuta el comando**:

    ```sh
    cargo run
    ```

    Este comando compilará y ejecutará el programa, y deberías ver un mensaje en la consola con un número aleatorio entre 1 y 100.


:::tip[Consideraciones Adicionales]
1. **Versiones y Actualizaciones**:
   - Las versiones de las dependencias en `Cargo.toml` pueden cambiar con el tiempo. Asegúrate de usar la versión compatible más reciente del módulo `rand`. Puedes verificar la versión más reciente en [crates.io](https://crates.io/crates/rand).

2. **Manejo de Errores**:
   - En programas más complejos, considera manejar posibles errores que puedan surgir durante la generación de números aleatorios, aunque en la mayoría de los casos el uso básico del módulo `rand` no debería causar problemas.

3. **Uso en Programas Concurrentes**:
   - En programas concurrentes, `rand::thread_rng()` asegura que cada hilo tenga su propio generador de números aleatorios, evitando problemas de sincronización y garantizando seguridad.
:::

## Conclusión

El módulo `rand` en Rust es una herramienta poderosa para la generación de números aleatorios. Al instalarlo y utilizarlo correctamente, puedes agregar funcionalidad de aleatorización a tus programas de manera sencilla. Con los pasos descritos, deberías estar listo para experimentar con números aleatorios en tus proyectos de Rust.intln!("El número secreto es: {secret_number}");
