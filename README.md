# 🤖 Trabajo Práctico N° 1: Introducción a la Inteligencia Artificial y Agentes Racionales
### Cátedra: Laboratorio I — Ciclo Lectivo 2026
**Tecnicatura Universitaria en Automatización y Robótica / Informática**  
**Jefe de Trabajos Prácticos (JTP):** Ing. Fabio D. Argañaraz  
**Modalidad:** Individual — Autoevaluativo con Validación Criptográfica y Entrega por Git

---

## 🎯 1. Objetivos Pedagógicos

Al finalizar este Trabajo Práctico, el estudiante será capaz de:
1. **Diferenciar con precisión técnica** los conceptos de *Inteligencia, IA, Agente, Entorno y Racionalidad* según el estado del arte.
2. **Clasificar enfoques de IA** dentro del cuadrante bidimensional de Russell & Norvig (*Pensar/Actuar vs. Humano/Racional*) e identificar el fundamento del paradigma de agentes.
3. **Modelar la arquitectura del ciclo sensorial-motor** y distinguir la *Función de Agente* ($f: P^* \rightarrow A$) de su *Programa de Agente* ejecutable.
4. **Especificar entornos de tareas completos** bajo el marco formal **PEAS** (*Performance, Environment, Actuators, Sensors*).
5. **Identificar y contrastar las cuatro propiedades operacionales** de los agentes inteligentes: *Autonomía, Reactividad, Proactividad y Habilidad Social*.
6. **Analizar la lógica de reglas condición-acción** en agentes reactivos simples y reconocer sus limitaciones ante la ausencia de memoria histórica.
7. **Evaluar empíricamente la inteligencia**, contrastando el *Test de Turing estándar* con los requerimientos físicos del *Test de Turing Total*.
8. **Analizar con rigor epistemológico** los límites computacionales (problemas NP e indecidibilidad) y el experimento de la *Habitación China de Searle* (Sintaxis vs. Semántica / IA Fuerte vs. IA Débil).

---

## 📚 2. Mapa Bibliográfico de Estudio

Todo el contenido práctico está fundamentado en el texto internacional de referencia y en las clases teóricas:

| Ejercicio | Tema Principal | Libro de Cátedra ([Russell & Norvig](http://jdelagarza.fime.uanl.mx/IA/Libros/inteligencia-artificial-un-enfoque-moderno-stuart-j-russell.pdf)) | Diapositivas de Clase |
| :---: | :--- | :--- | :--- |
| **Ej 1** | Términos Fundamentales | Cap. 1.1 (pp. 1–5): *¿Qué es la IA?* | `1 - Introducción a la IA.pptx` (Slides 10–13) |
| **Ej 2** | Cuadrante de 4 Dimensiones | Cap. 1.1 (pp. 2–5, Cuadro 1.1) | `1 - Introducción a la IA.pptx` (Slides 15–16) |
| **Ej 3** | Ciclo Sensorial-Motor y Arquitectura | Cap. 2.1 (pp. 34–38): *Agentes y Ambientes* | `1 - Introducción` (Slide 17) y `3.1` (Slides 5–10) |
| **Ej 4** | Especificación PEAS (PAGE) | Cap. 2.3 (pp. 42–46): *Estructura del Entorno* | `3.1 - Resolución mediante búsqueda` (Slide 14) |
| **Ej 5** | Propiedades de Agentes Inteligentes | Cap. 2.1–2.2 (pp. 36–42) / Jennings & Wooldridge | `3.1 - Resolución mediante búsqueda` (Slides 7–9) |
| **Ej 6** | Agentes Reactivos Simples | Cap. 2.4.1 (pp. 47–49): *Reglas Condición-Acción* | `3.1 - Resolución mediante búsqueda` (Slides 16–20) |
| **Ej 7** | Test de Turing vs. Test Total | Cap. 1.1 (pp. 2–3): *Actuar como humanos* | `1 - Introducción a la IA.pptx` (Slide 18) |
| **Ej 8** | Estado del Arte y Viabilidad | Cap. 1.4 (pp. 28–30): *El Estado del Arte* | `2 - Raíces y Aplicaciones` (Slides 40–47) |
| **Ej 9** | La Habitación China de Searle | Cap. 26.2 (pp. 1024–1028): *IA Débil vs. IA Fuerte* | `1 - Introducción a la IA.pptx` (Slides 19–32) |
| **Ej 10** | Complejidad, Límites y Heurística | Cap. 1.2 (pp. 8–10): *Fundamentos Matemáticos* | `2 - Raíces y Aplicaciones` (Slides 6–8, 32) |

---

## 🛠️ 3. Instrucciones de Resolución Paso a Paso

### Paso 1: Abrir la Aplicación Web
Haz doble clic en el archivo `index.html` para abrir la plataforma en cualquier navegador moderno (Google Chrome, Firefox, Edge, Brave). No requiere instalación de servidores ni dependencias externas.

### Paso 2: Completar los Datos de Entrega
En la primera sección (*Identificación de Entrega*), ingresa obligatoriamente tu **Nombre y Apellido** y tu **DNI / Matrícula**.

### Paso 3: Resolver los 10 Ejercicios Interactivos
- Utiliza los selectores con identificadores normalizados, los switches segmentados y las tarjetas de opción.
- Si dudas en alguna consigna, abre el panel colapsable **"📖 Dónde estudiar este tema en la bibliografía"** para consultar el capítulo exacto.
- La aplicación **guarda automáticamente tu progreso en el navegador** (`localStorage`); si cierras la ventana o recargas la página, tus respuestas no se perderán.

### Paso 4: Exportar el Archivo JSON
Cuando la barra superior indique **100% (10/10 completados)**, pulsa el botón verde **"💾 Exportar Respuestas (.json)"**.  
Se descargará un archivo llamado `respuestas_tp1.json`. **Guarda este archivo en la misma carpeta raíz del Trabajo Práctico**.

---

## 🧪 4. Autoevaluación Local con el Evaluador Automático

Para comprobar tu calificación antes de entregar sin depender de la corrección manual del docente:

1. Abre una terminal (PowerShell, Símbolo del Sistema o Bash) en la carpeta del TP:
   ```bash
   cd "C:\Ruta\A\Tu\Repositorio\TP1"
   ```
2. Ejecuta el script autoevaluador en Python 3:
   ```bash
   python autograder_tp1.py respuestas_tp1.json
   ```
3. El script comparará tus selecciones contra los hashes criptográficos salteados de `rubric_tp1.json` y emitirá un reporte detallado:
   ```text
   ==============================================================================
     TP N° 1: Introducción a la Inteligencia Artificial y Agentes Racionales
     Cátedra: Laboratorio I - Tecnicatura Universitaria en Automatización y Robótica / Informática
   ==============================================================================
    Estudiante : Carlos Gómez (DNI: 41234567)
    Email      : cgomez@universidad.edu.ar | Comisión: Comisión 1
    Fecha Eval : 2026-09-04 14:30:00
   ------------------------------------------------------------------------------
    RESUMEN DE EJERCICIOS
   ------------------------------------------------------------------------------
    [✓] ej1_terminos_fundamentales        10.0 / 10.0 pts  [■■■■■■■■■■] 100.0%
    [✓] ej2_dimensiones_russell_norvig    10.0 / 10.0 pts  [■■■■■■■■■■] 100.0%
    ...
   ------------------------------------------------------------------------------
    PUNTAJE TOTAL : 100.0 / 100 pts
    CALIFICACIÓN  : 10.0 / 10.0
    ESTADO        : APROBADO [✓]
   ==============================================================================
   ```
> [!TIP]
> Si el autograder detecta alguna discrepancia, no te dará la respuesta servida, pero te indicará el ítem exacto y la cita bibliográfica para que puedas releer el concepto, corregirlo en `index.html` y volver a exportar.

---

## 🚀 5. Entrega Mediante Git y GitHub

1. Realiza un **Fork** del repositorio oficial de la cátedra ([https://github.com/UCSE-Laboratorio-I/TP1](https://github.com/UCSE-Laboratorio-I/TP1)) a tu cuenta personal de GitHub.
2. Clona tu fork en tu computadora:
   ```bash
   git clone https://github.com/TU_USUARIO/TP1.git
   cd TP1
   ```
3. Resuelve el TP en `index.html` y coloca tu archivo generado `respuestas_tp1.json` en la raíz.
4. Verifica tu nota con `python autograder_tp1.py respuestas_tp1.json`.
5. Confirma y sube tus cambios:
   ```bash
   git add respuestas_tp1.json
   git commit -m "Entrega final TP1 - [Tu Nombre y Apellido]"
   git push origin main
   ```
6. Envía el enlace de tu repositorio de GitHub a la plataforma de la cátedra según las indicaciones del docente.
