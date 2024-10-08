---
title: Creación y uso de variables en Rust
description: Aprende más sobre mi proyecto en este sitio de documentación construido con Starlight.
---

Rust es un lenguaje que otorga un fuerte control sobre el uso de las variables, promoviendo la seguridad y la claridad en el código. A continuación, exploraremos cómo se declaran, inicializan y modifican las variables en Rust, además de la diferencia entre variables inmutables y mutables.

## Declaración y Uso de Variables

En Rust, las variables se declaran utilizando la palabra clave `let`. Por defecto, las variables en Rust son **inmutables**, lo que significa que una vez que les asignas un valor, no puedes cambiarlo. A continuación, se presenta un ejemplo básico de declaración y uso de una variable:

```rust
let user_choice: i32;
user_choice = 50;
println!("El número ingresado por el usuario es {user_choice}");
```

En este código, hemos declarado la variable `user_choice` del tipo entero de 32 bits (`i32`), pero la inicialización ocurre en una línea posterior. Aunque este enfoque es válido, se recomienda declarar e inicializar la variable en una sola línea, cuando sea posible:

```rust
let user_choice = 50;
println!("El número ingresado por el usuario es {user_choice}");
```

Este método es más conciso y sigue las mejores prácticas de Rust.

## Variables Inmutables vs. Mutables

Como se mencionó anteriormente, las variables en Rust son inmutables por defecto. Esto significa que una vez asignado un valor a una variable, no se puede cambiar. Observa el siguiente ejemplo:

```rust
let user_choice: i32;
user_choice = 50; // Su primer asignción
println!("El número ingresado por el usuario es {user_choice}");
user_choice = 100; // En esta línea se produce un error
```

En este código, Rust genera un error en la última línea porque se está intentando modificar el valor de `user_choice`, que fue declarado como inmutable. Lo mismo ocurre en el siguiente ejemplo:

```rust
let user_choice = 50;
println!("El número ingresado por el usuario es {user_choice}");
user_choice = 100; // Se produce un error
```

En ambos casos, Rust no permite modificar el valor de una variable inmutable.

### Cambiar el Valor de una Variable

Si necesitas modificar el valor de una variable en Rust, hay dos formas principales de hacerlo:

### 1. Propiedad de Reemplazo de Variables

En Rust, puedes "redefinir" una variable con el mismo nombre utilizando `let`, lo que se conoce como **shadowing**. Esto te permite reutilizar una variable con un valor diferente, pero sin hacerla mutable:

```rust
let user_choice = 50;
println!("El número ingresado por el usuario es {user_choice}");
let user_choice = user_choice * 2; 
println!("El número ingresado por el usuario es {user_choice}");
```

En este ejemplo, primero definimos `user_choice` como 50, luego la redefinimos (haciéndola "sombrada") y le asignamos un nuevo valor (el doble de su valor original).

### 2. Uso de `mut` para Hacer Variables Mutables

Si prefieres permitir que una variable sea modificada directamente, debes declararla como **mutable** utilizando la palabra clave `mut`:

```rust
let mut user_choice = 50;
println!("El número ingresado por el usuario es {user_choice}");

user_choice = 100;
println!("El número ingresado por el usuario ahora es {user_choice}");
```

En este caso, `user_choice` se declara como mutable, lo que permite cambiar su valor de 50 a 100 sin problemas.

## Conclusión

Rust promueve la seguridad a través de la inmutabilidad predeterminada de las variables, lo que previene cambios accidentales. Sin embargo, cuando se necesita modificar el valor de una variable, puedes hacerlo mediante **shadowing** o declarando la variable como **mutable** con `mut`. Estas características proporcionan flexibilidad sin comprometer la integridad del programa.