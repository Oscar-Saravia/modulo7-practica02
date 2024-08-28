# Modulo VII **- DESARROLLO EN REACT V5**

**DOCENTE**: William Barra

**PARTICIPANTE**: Oscar Ramiro Saravia Veizaga

---

## Objetivo:

Mostrar el manejo de la Librería React en base al manejo de Componentes, manejo de estados, Hooks custom hooks, etc para la creación de aplicaciones web.

## Requerimientos:

- Solo deberá loguearse a la aplicación cuando:
    ```
    USER: Cualquier valor
    EMAIL: un email válido cualquiera
    PASSWORD: 
    ```
    El valor del password debe estar guardado en una variable de estado en REDUX. Dentro del reducer formReducer. Si el password es distinto de mod7ReactUSIP, en redux no se debe guardar ningún valor (user, email y password).

- Mostrando el username y email en el navbar:
    ```
    USER: Cualquier valor
    EMAIL: un email válido cualquiera
    PASSWORD: mod7ReactUSIP
    ```
    Si el usuario coloca ese password se deben de guardar todos los datos en REDUX, dentro de la variable de estado formData.

- Agregar al campo password la posibilidad de ver como texto
    Inicialmente el campo del password es de tipo password. Pero es necesario convertirlo a modo text si el usuario desea ver su password.

- Logout de la aplicación:

    Al lado del botón Submit agregar un link: Logout

    Cuando se presiona en este LINK se levantará un modal
    Y el modal deberá mostrar lo siguiente: Un texto mas un botón al lado del texto

    Si se presiona X, no se hace nada y el modal ya no se muestra.
    Sin embargo sí se presiona en el botón Presiona para salir, los valores guardados en redux(formData) son eliminados. Deberían estar todos en vacío.

- Limpiando los datos del formulario:

    Después de resolver el anterior ejercicio
    Al hook useForm agregar un método que permite limpiar todos los datos, es decir inicializar todos los valores con datos vacíos.

    Cuando se presiona el modal del logout, todos los datos del formulario deberá quedar vacíos.

- Agregando LandingPage

    Crear un nuevo Screen de nombre LandingPage.
    Esta página se muestra por defecto cuando se carga la aplicación.

- Después de resolver los ejercicios, subir estos cambios a GitHub.

    A. Se revisará la lógica a través del código.

    B. Se revisará la funcionalidad en github pages.
# modulo7-practica02

## Instalar las dependencias:
```
npm install
```

## Levantar el servidor: 
```
npm start
```