---
title: Playground de Rust
description: El Playground de Rust es una herramienta en línea proporcionada por la comunidad de Rust que permite escribir, compilar y ejecutar código Rust directamente desde un navegador, sin necesidad de instalar nada localmente.
---

El **Playground de Rust** es una herramienta en línea proporcionada por la comunidad de Rust que permite escribir, compilar y ejecutar código Rust directamente desde un navegador, sin necesidad de instalar nada localmente. Es una plataforma perfecta para experimentar con el lenguaje, probar pequeñas piezas de código y compartir ejemplos con otros desarrolladores.

## ¿Para qué se puede usar?

El Playground de Rust es útil para una variedad de casos, tales como:

- **Aprender Rust**: Los principiantes pueden practicar el lenguaje sin preocuparse por la instalación o configuración.
- **Probar fragmentos de código**: Los desarrolladores pueden probar rápidamente ideas o fragmentos de código sin necesidad de configurar un proyecto completo.
- **Compartir código**: El Playground genera enlaces compartibles, lo que facilita la colaboración o pedir ayuda en foros y comunidades de Rust.


:::note 
**Nota:** El Playground de Rust es ideal para ejemplos pequeños o pruebas rápidas, pero no está diseñado para proyectos de gran envergadura o código muy complejo.
:::

## Herramientas y características

El Playground de Rust no solo permite la ejecución básica de código, sino que ofrece un conjunto de herramientas adicionales que lo hacen bastante completo:

- **Edición de código**: Un editor de texto con resaltado de sintaxis y autocompletado para facilitar la escritura de código.
- **Soporte para múltiples ediciones de Rust**: Puedes seleccionar entre las versiones estables, beta y nightly del compilador de Rust.
- **Compatibilidad con crates**: El Playground te permite usar algunas crates (paquetes) populares para que puedas experimentar con ellas sin necesidad de instalar dependencias localmente.
- **Formatteo y linting**: Herramientas como `rustfmt` (formateador de código) y `clippy` (analizador de código) están integradas para ayudarte a escribir código limpio y seguir las mejores prácticas.
- **Soporte para Macros y Cargo**: Puedes probar macros de Rust y realizar pequeñas compilaciones con `Cargo`, el gestor de paquetes de Rust.

## Opciones de compilación

El Playground también permite personalizar las opciones de compilación para ajustar el comportamiento del compilador y experimentar con optimizaciones:

- **Desactivar optimizaciones**: Esto permite compilar y ejecutar el código rápidamente, sin optimizaciones adicionales. Ideal para pruebas rápidas.
- **Optimizaciones para velocidad o tamaño**: Puedes ajustar el compilador para que optimice tu código en función del rendimiento o el tamaño del binario generado.
- **Modo de depuración**: Permite obtener información detallada sobre errores y advertencias, ideal para entender el comportamiento del código o depurar problemas.

## Límites de protección

Dado que el Playground de Rust es un entorno compartido en la web, existen algunos **límites de protección** para garantizar la seguridad y el rendimiento:

- **Tiempo de ejecución limitado**: Los programas no pueden ejecutarse indefinidamente. Si el código excede un tiempo de ejecución predefinido, se detendrá automáticamente.
- **Recursos restringidos**: Para evitar el uso excesivo de recursos del servidor, se limitan la cantidad de memoria y CPU disponibles para los programas.
- **Acceso restringido al sistema**: El Playground no permite acceso a archivos, redes u otras interacciones del sistema por razones de seguridad.

Estos límites aseguran que el Playground de Rust siga siendo una herramienta rápida y segura para todos los usuarios.

:::note
El **Playground de Rust** es una herramienta esencial para aprender y experimentar con el lenguaje. Gracias a su simplicidad y versatilidad, es un recurso invaluable para desarrolladores de todos los niveles que desean explorar y compartir código Rust de manera eficiente.
:::

## Ejemplo de uso 

Aquí tienes un ejemplo paso a paso de cómo usar el **Playground de Rust**, desde acceder a la página hasta escribir y ejecutar un código básico, explicando cada línea del código.

##### Acceder al Playground
1. Abre tu navegador y ve a la página del **Playground de Rust**: [https://play.rust-lang.org](https://play.rust-lang.org).
2. Verás un editor de código donde podrás escribir y ejecutar programas en Rust directamente desde el navegador.

##### Escribir el código
En el editor del Playground, escribe el siguiente código:

```rust
fn main() {
    println!("¡Hola, mundo!");
    println!("Bienvenido al curso de Rust");
}
```

##### Ejecutar el código
1. Después de escribir el código, haz clic en el botón **"Run"** ubicado en la parte superior derecha del editor.
2. El Playground compilará y ejecutará el código.
3. Debajo del editor, verás la salida del programa, que será:

```
¡Hola, mundo!
Bienvenido al curso de Rust
```

##### Compartir el código
1. Para compartir tu código, haz clic en **"Share"** en la parte superior derecha.
2. Copia el enlace generado y compártelo con quien desees. El enlace llevará a las personas al Playground con tu código pre-cargado, listo para ser ejecutado o modificado.

##### Explicación del código 

```rust
fn main() {
```
- **`fn`** es la palabra clave que indica que estás definiendo una función. En Rust, todas las aplicaciones comienzan en la función especial llamada `main`.
  
```rust
    println!("¡Hola, mundo!");
```
- **`println!`** es una macro que imprime texto en la consola. El texto que va entre comillas dobles, `"¡Hola, mundo!"`, es lo que se mostrará al ejecutarse el programa. La macro termina con un punto y coma `;`.

```rust
    println!("Bienvenido al curso de Rust");
```
- De nuevo, estamos usando la macro `println!`, pero esta vez para imprimir `"Bienvenido al curso de Rust"`. Puedes usar tantas llamadas a `println!` como necesites para mostrar diferentes mensajes en la consola.


##### Recapitulación:
- **Acceder al Playground**: Visita [https://play.rust-lang.org](https://play.rust-lang.org).
- **Escribir el código**: Copia el código de ejemplo.
- **Ejecutar el código**: Haz clic en "Run" y observa la salida en la consola.
- **Compartir**: Usa la opción "Share" para obtener un enlace con tu código y compartirlo fácilmente.

Este proceso te permite probar Rust de forma interactiva, sin necesidad de instalar nada en tu computadora, perfecto para aprender y compartir ejemplos con otros.
