---
title: Uso de cargo
description: Aprende más sobre mi proyecto en este sitio de documentación construido con Starlight.
---

En este artículo, exploraremos cómo utilizar Cargo, la herramienta de gestión de proyectos y construcción en Rust. Veremos qué es Cargo, cómo se instala, cómo crear y ejecutar un proyecto con Cargo, y cómo compilar tu código.

## ¿Qué es Cargo?

Cargo es el sistema de gestión de paquetes y construcción para el lenguaje de programación Rust. Simplifica el proceso de construcción de proyectos, manejo de dependencias y ejecución de pruebas. Es una herramienta esencial para cualquier desarrollador Rust.

:::note

Cargo se incluye automáticamente cuando instalas Rust mediante `rustup`. Esto significa que no necesitas instalarlo por separado.

:::

## Verificación de la Instalación de Cargo

Para asegurarte de que Cargo está instalado y funcionando correctamente, puedes verificar su versión con el siguiente comando:

```shell
cargo --version
```

Ejemplo de salida:

```shell
cargo 1.81.0 (2dbb1af80 2024-08-20)
```

Este comando te mostrará la versión actual de Cargo que tienes instalada.

## Creación de un Proyecto con Cargo

Cargo facilita la creación de nuevos proyectos. Para crear un nuevo proyecto llamado `hola-cargo`, usa el siguiente comando:

```shell title="reación de un Proyecto con Cargo"
cargo new hola-cargo
```

Este comando generará una estructura de directorios básica para tu proyecto. La estructura del proyecto se verá así:

```shell
hola-cargo/
    src/
        main.rs
    target/
    .gitignore
    Cargo.lock
    Cargo.toml
```

##### Estructura del Proyecto con Cargo

- **`src/`**: Contiene el código fuente del proyecto. El archivo principal `main.rs` es el punto de entrada de la aplicación.
- **`target/`**: Directorio generado automáticamente donde Cargo coloca los archivos compilados.
- **`.gitignore`**: Archivo que especifica qué archivos o directorios deben ser ignorados por Git.
- **`Cargo.lock`**: Archivo que asegura que las mismas versiones de dependencias se usen en todas las instalaciones del proyecto.
- **`Cargo.toml`**: Archivo de configuración del proyecto donde se especifican las dependencias y otros detalles del proyecto.

## Ejecución de un Proyecto con Cargo

Para ejecutar el proyecto, primero navega al directorio del proyecto:

```shell
cd hola-cargo
```

Luego, usa el siguiente comando para compilar y ejecutar el proyecto:

```shell
cargo run
```

Este comando compilará el código fuente y ejecutará el binario resultante. Deberías ver la salida predeterminada del programa `main.rs`, que es:

```
Hello, world!
```

## Compilación de un Proyecto con Cargo

Para compilar el proyecto sin ejecutarlo, usa el siguiente comando:

```shell
cargo build
```

Esto compilará el proyecto y generará el archivo ejecutable en el directorio `target/debug`.

:::note[¿Qué Más Se Puede Hacer con Cargo?]

Además de compilar y ejecutar proyectos, Cargo ofrece muchas otras funcionalidades útiles:

- **Gestionar Dependencias**: Puedes agregar y actualizar dependencias en el archivo `Cargo.toml`.
- **Ejecutar Pruebas**: Usa `cargo test` para ejecutar las pruebas definidas en tu proyecto.
- **Optimizar la Compilación**: Usa `cargo build --release` para compilar el proyecto en modo de liberación con optimizaciones.
- **Actualizar Dependencias**: Usa `cargo update` para actualizar las versiones de las dependencias especificadas en `Cargo.toml`.

:::

## Modificar el archivo pricipal
Para modificar el archivo `main.rs` y que imprima "Hola mundo con Cargo", sigue estos pasos:

1. **Navega al Directorio del Proyecto**

   Abre tu terminal y navega al directorio del proyecto `hola-cargo` que creaste anteriormente:


2. **Editar el Archivo `main.rs`**

   Abre el archivo `src/main.rs` en tu editor de código preferido (por ejemplo, Visual Studio Code). 

   Reemplaza el contenido de `main.rs` con el siguiente código:

   ```rust title="src/main.rc"
   fn main() {
       println!("!Hola Cargo¡");
   }
   ```

   Este código define una función `main` que imprime "Hola mundo con Cargo" en la consola.

3. **Guardar los Cambios**

   Guarda el archivo `main.rs` después de realizar la modificación.

4. **Ejecutar el Proyecto**

   Regresa a la terminal y asegúrate de estar en el directorio del proyecto. Ejecuta el siguiente comando para compilar y ejecutar el proyecto:

   ```shell
   cargo run
   ```

   Deberías ver la siguiente salida en la terminal:

   ```
   Hola Cargo
   ```

Con estos pasos, has modificado el archivo `main.rs` para imprimir un mensaje personalizado y has ejecutado el proyecto con Cargo. ¡Ahora estás listo para continuar explorando Rust con tu nuevo proyecto!

Cargo es una herramienta poderosa que simplifica muchas tareas comunes en el desarrollo de Rust, ayudándote a mantener tu flujo de trabajo organizado y eficiente. ¡Explora y aprovecha al máximo lo que Cargo tiene para ofrecer!