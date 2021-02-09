# DataLovers: Rick and Morty (prototipo)

El diseño de la app "Rick and Morty" se realizó con la finalidad de crear un juego que le permita a los usuarios encontrar a los personajes de la serie animada. Dicho juego está pensado para que cada usuario pueda combinar diferentes filtros y obtener los personajes que coincidan con su búsqueda.

En esta primera etapa de desarrollo el usuario puede visualizar la data, hacer filtros por género, status y specie, ver reflejados los personajes en tarjetas interactivas que le permiten ver información relevante de cada personaje y, finalmente, ordenar los datos alfabéticamente (ascendente y descendentemente).

## Resumen: Primera fase del proyecto
### Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Criterios de aceptación del proyecto](#4-criterios-de-aceptación-del-proyecto)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
***

### 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

### 2. Resumen del proyecto

En este proyecto **se construyó una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe al juego "Rick and Morty", en el cual se puede:

**- Visualizar la data**
**- Hacer filtros por GÉNERO, STATUS y SPECIE**
**- Ordenar los datos en orden alfabetico de manera ascendente y descendente**

### 3. Objetivos de aprendizaje

El objetivo principal de este proyecto fue el de aprender a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

### 4. Criterios de aceptación
#### Historias de usuario
Las historias de usuario fueron creadas entendiendo las necesidades de los usuarios, para esta primera etapa del proyecto se desarrollaron las siguientes:

**- Yo como usuario quiero poder ver los filtros completos en la pantalla de inicio.**
**-Yo como usuario quiero poder hacer "clic" en cada uno de los filtros y ver los personajes correspondientes.**
**-Yo como usuario quiero poder ver los personajes filtrados en tarjetas y poder ver información acerca de los personajes.**
**-Yo como usuario quiero poder ordenar alfabéticamente (ascendente y descendentemente los personajes).**
**- Yo como usuario quiero poder regresar a la pantalla de inicio con un botón.**

#### Diseño de la interfaz del usuario

##### Prototipo de baja fidelidad
![baja fidelidad](miro.png)
##### Prototipo de alta fidelidad
![alta fidelidad](display1.jpg)
![alta fidelidad](display2.jpg)
![alta fidelidad](display3.jpg)
##### Pruebas unitarias

En esta fase del proyecto se realizaron pruebas unitarias de las funciones de filtrado.
**imagen**

### 5. Consideraciones técnicas
El proyecto está implementado completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO se usaron librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

Asimismo, no se utilizó la _pseudo-variable_ `this`.






