# 🧠 Cuestionario Formativo de Clase: Introducción a la IA y Agentes Racionales
### Cátedra: Laboratorio I — Ciclo Lectivo 2026 | JTP: Ing. Fabio D. Argañaraz
**Formato compatible con Wayground / Quizizz / Kahoot / Moodle Quiz**

Este cuestionario contiene 10 preguntas conceptuales diseñadas como actividad disparadora de inicio de clase (*warm-up*). Permite evaluar la comprensión lectora del material antes o después de la resolución del Trabajo Práctico N° 1.

---

### Pregunta 1: Definición de Racionalidad
¿Qué distingue a un agente racional de un agente omnisciente según el enfoque moderno de Russell & Norvig?
- A) El agente omnisciente conoce el resultado real de sus acciones por adelantado, mientras que el racional solo maximiza el desempeño esperado según las percepciones recibidas.
- B) El agente racional posee memoria ilimitada y capacidad de cálculo infinito, mientras que el omnisciente comete errores biológicos.
- C) La racionalidad exige imitar el razonamiento subjetivo humano, mientras que la omnisciencia se basa exclusivamente en silogismos lógicos.
- D) No existe diferencia formal; en Inteligencia Artificial ambos términos son sinónimos matemáticos estrictos.

> **Respuesta Correcta:** A  
> **Justificación:** La omnisciencia implica conocimiento previo de los resultados reales de cada acción, lo cual es físicamente imposible en entornos parcialmente observables. La racionalidad no es perfección ni clarividencia, sino la selección de la acción que maximiza el éxito esperado con base en el historial perceptual y el conocimiento incorporado (Russell & Norvig, Cap. 2.2).

---

### Pregunta 2: Las Cuatro Dimensiones de la IA
Al categorizar las definiciones de Inteligencia Artificial en una matriz 2x2, ¿cuál es el cuadrante que fundamenta el diseño contemporáneo en Robótica, Automatización e Ingeniería?
- A) Sistemas que piensan como humanos (Modelado psicológico de la mente).
- B) Sistemas que actúan como humanos (Superación del Test de Turing mediante engaño conductual).
- C) Sistemas que piensan racionalmente (Lógica pura y leyes de pensamiento deductivo).
- D) Sistemas que actúan racionalmente (Agentes inteligentes orientados a metas y optimización de desempeño).

> **Respuesta Correcta:** D  
> **Justificación:** El enfoque de "actuar racionalmente" (Agente Racional) es más general que el enfoque lógico (las leyes del pensamiento no siempre bastan cuando no hay certezas o se requiere acción inmediata) y más científico/aplicable que imitar la conducta humana con sus fallas o sesgos biológicos (Russell & Norvig, Cap. 1.1; Clase 1, Slide 15).

---

### Pregunta 3: Función de Agente vs. Programa de Agente
En la teoría formal de agentes inteligentes, ¿cuál es la diferencia exacta entre la Función de Agente y el Programa de Agente?
- A) La Función de Agente es el hardware físico de los servomotores, mientras que el Programa es el código binario cargado en la memoria ROM.
- B) La Función de Agente es la abstracción matemática que mapea secuencias de percepciones en acciones ($f: P^* \rightarrow A$), mientras que el Programa de Agente es la implementación concreta de dicha función sobre una arquitectura física.
- C) La Función de Agente se utiliza solo para agentes biológicos, mientras que el Programa de Agente aplica a robots industriales.
- D) La Función de Agente solo actúa si hay errores de sintaxis, mientras que el Programa se ejecuta cuando el entorno es hostil.

> **Respuesta Correcta:** B  
> **Justificación:** Matemáticamente, la función de agente es una relación abstracta que asocia cualquier historial posible de percepciones a una acción determinada. El programa de agente es el algoritmo concreto (software) que corre sobre la máquina (arquitectura) para materializar esa función (Russell & Norvig, Cap. 2.1; Clase 1, Slide 17).

---

### Pregunta 4: Especificación de Entornos (Marco PEAS)
En el marco PEAS para un vehículo autónomo, ¿a qué categoría pertenecen el velocímetro, el sistema de cámaras estereoscópicas y el sensor LiDAR?
- A) Actuadores (A).
- B) Medidas de Rendimiento (P).
- C) Sensores (S).
- D) Entorno (E).

> **Respuesta Correcta:** C  
> **Justificación:** Las cámaras, sensores LiDAR, radares y velocímetros son los dispositivos de entrada (hardware) encargados de capturar señales del mundo físico y convertirlas en datos de percepción utilizables por el agente (Russell & Norvig, Cap. 2.3; Clase 3.1, Slide 14).

---

### Pregunta 5: Propiedades de los Agentes Inteligentes
Un sistema de monitoreo en una planta nuclear no solo alerta ante la rotura de una válvula (reacción ante eventos), sino que predice el desgaste térmico de las turbinas y planifica autónomamente el desvío de flujo antes de que se produzca una falla. ¿Qué propiedad exhibe principalmente?
- A) Habilidad Social exclusivamente reactiva.
- B) Proactividad (comportamiento dirigido por objetivos que toma la iniciativa).
- C) Dependencia jerárquica pasiva.
- D) Razonamiento inductivo biológico.

> **Respuesta Correcta:** B  
> **Justificación:** Mientras que la reactividad responde a los estímulos inmediatos del entorno, la proactividad implica que el agente toma la iniciativa, persiguiendo activamente metas a largo plazo y anticipándose a situaciones futuras (Clase 3.1, Slide 7).

---

### Pregunta 6: Limitaciones de los Agentes Reactivos Simples
¿Por qué un agente reactivo simple fracasa o entra en bucles infinitos en entornos parcialmente observables?
- A) Porque sus reglas condición-acción toman decisiones basándose únicamente en la percepción actual inmediata, careciendo de memoria sobre la historia previa del mundo.
- B) Porque utiliza algoritmos genéticos que mutan de forma aleatoria sin función de aptitud.
- C) Porque el hardware en el que se ejecuta no dispone de una unidad de punto flotante.
- D) Porque las leyes de la física le impiden ejecutar más de una acción por minuto.

> **Respuesta Correcta:** A  
> **Justificación:** El agente reactivo simple opera mediante reglas fijas $SI\ [condición]\ ENTONCES\ [acción]$ evaluando solo la percepción del momento. Si el entorno no es totalmente observable, el agente no puede discernir en qué estado real se encuentra al carecer de un modelo interno que recuerde percepciones anteriores (Russell & Norvig, Cap. 2.4.1; Clase 3.1, Slide 16).

---

### Pregunta 7: El Test de Turing Total
¿Qué disciplinas técnicas adicionales incorpora el Test de Turing Total respecto al Test de Turing clásico propuesto en 1950?
- A) Redes de fibra óptica y compresión de archivos ZIP.
- B) Visión Computacional (para percibir objetos) y Robótica/Manipulación (para interactuar físicamente con el mundo).
- C) Sistemas de bases de datos relacionales y diseño de interfaces web responsivas.
- D) Criptografía asimétrica y firmas digitales mediante SHA-256.

> **Respuesta Correcta:** B  
> **Justificación:** El Test de Turing original evitaba intencionalmente el contacto físico requiriendo solo comunicación textual teletipo. El Test Total exige una interacción física completa con el entorno mediante visión artificial y manipulación robótica de objetos (Russell & Norvig, Cap. 1.1; Clase 1, Slide 18).

---

### Pregunta 8: Madurez Tecnológica de la IA
En el estado del arte actual de la Inteligencia Artificial, ¿cuál de las siguientes tareas se considera resuelta a nivel comercial superando o igualando en pruebas controladas el rendimiento de especialistas humanos?
- A) Conducción 100% autónoma en cualquier condición climática extrema sin intervención humana (Nivel 5 global).
- B) Demostración autónoma no supervisada de conjeturas matemáticas complejas de frontera abierta.
- C) Diagnóstico médico de patologías específicas a partir de imágenes radiológicas y dermatológicas de alta calidad.
- D) Comprensión de sentido común general con emociones conscientes en robots domésticos.

> **Respuesta Correcta:** C  
> **Justificación:** Las redes neuronales convolucionales profundas han demostrado capacidades sobrehumanas o de nivel experto en clasificación y segmentación de imágenes médicas especializadas. En contraste, la conducción nivel 5 universal y la demostración matemática autónoma profunda siguen en investigación y desarrollo activo (Russell & Norvig, Cap. 1.4; Clase 2, Slide 43).

---

### Pregunta 9: La Habitación China de John Searle
¿Cuál es el argumento central del experimento mental de la "Habitación China" contra el concepto de "IA Fuerte"?
- A) Que los operarios humanos son siempre más lentos que los microprocesadores de silicio.
- B) Que la manipulación puramente sintáctica de símbolos siguiendo un manual de reglas no produce por sí sola semántica ni comprensión de significados.
- C) Que el idioma chino es demasiado complejo para ser procesado por una máquina de Turing.
- D) Que las computadoras nunca podrán traducir idiomas debido al Teorema de Incompletitud de Gödel.

> **Respuesta Correcta:** B  
> **Justificación:** Searle argumenta que una persona encerrada que manipula símbolos chinos según un libro de reglas en español parece comprender chino para quien la observa desde afuera, pero en realidad no entiende nada. Por lo tanto, un programa informático (que es pura sintaxis) no puede dar lugar a una mente con estados mentales intencionales o semántica (Russell & Norvig, Cap. 26.2; Clase 1, Slides 19–32).

---

### Pregunta 10: Límites Computacionales y Heurística
Si se sabe que muchos problemas de planificación y búsqueda son NP-completos (tiempo exponencial en el peor caso) o indecidibles, ¿por qué esto no demuestra la imposibilidad de la Inteligencia Artificial?
- A) Porque los problemas NP-completos se resuelven en tiempo lineal utilizando memoria caché suficiente.
- B) Porque los agentes inteligentes reales no dependen de búsquedas exhaustivas exactas astronómicas; utilizan métodos heurísticos y razonamiento aproximado para encontrar soluciones suficientemente buenas en tiempo práctico.
- C) Porque la física moderna demostró que los algoritmos matemáticos no se aplican a los sistemas de cómputo basados en transistores CMOS.
- D) Porque la indecidibilidad solo afecta a los programas escritos en lenguaje ensamblador, no a los lenguajes de alto nivel como Python.

> **Respuesta Correcta:** B  
> **Justificación:** La inteligencia no consiste en calcular exhaustivamente todas las posibilidades del universo (lo cual es intratable), sino en saber descartar caminos no prometedores mediante conocimiento heurístico, razonamiento aproximado y optimización local para tomar decisiones efectivas en tiempo útil (Russell & Norvig, Cap. 1.2; Clase 2, Slides 6–8; Clase 3.2).
