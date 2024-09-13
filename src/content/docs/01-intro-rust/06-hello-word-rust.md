---
title: Hola mundo con Rusto
description: En este artículo, te guiaré a través de los pasos para crear y ejecutar un simple programa "Hola Mundo" en Rust.
---

En este artículo, te guiaré a través de los pasos para crear y ejecutar un simple programa "Hola Mundo" en Rust. A continuación, veremos cómo crear un proyecto, escribir el código, compilarlo y ejecutarlo.

## Creación del Proyecto

1. **Crear un Directorio para el Proyecto**

   Primero, abre tu terminal y crea un nuevo directorio para tu proyecto. Luego, navega dentro de ese directorio:

   ```shell
   mkdir hola-mundo
   cd hola-mundo
   ```

2. **Crear un Archivo de Código Rust**

   En el directorio `hola-mundo`, crea un archivo de código Rust con la extensión `.rs`. Por ejemplo, lo llamaremos `hola.rs`:

3. **Escribir el Código en Rust**

   Abre el archivo `hola.rs` en tu editor de código (como Visual Studio Code) y escribe el siguiente código:

   ```rust title="hola.rs"
   fn main() {
       println!("¡Hola Mundo!");
   }
   ```

   Este simple programa define una función `main` que imprime "¡Hola Mundo!" en la consola.

## Proceso de Compilación

1. **Compilar el Código Rust**

   Para compilar el archivo `hola.rs`, usa el comando `rustc` (Rust Compiler) desde la terminal:

   ```shell
   rustc hola.rs
   ```

   Este comando generará un archivo ejecutable en el mismo directorio. En sistemas Windows, el archivo se llamará `hola.exe`. En otros sistemas operativos, el archivo se llamará simplemente `hola` (sin extensión).

## Ejecución del Archivo Compilado

1. **Ejecutar el Programa**

   Ahora, puedes ejecutar el archivo compilado desde la terminal. En sistemas Windows, usa:

   ```shell
   .\hola.exe
   ```

   En sistemas Unix (Linux, macOS), usa:

   ```shell
   ./hola
   ```

2. **Verificar la Salida**

   Deberías ver la siguiente salida en la terminal:

   ```shell
   ¡Hola Mundo!
   ```

:::tip[¡Y eso es todo!]
Has creado, compilado y ejecutado tu primer programa en Rust. Ahora que tienes una base, puedes comenzar a explorar más características y capacidades del lenguaje Rust. ¡Feliz programación!
:::