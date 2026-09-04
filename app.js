/**
 * ==========================================================================
 * APLICACIÓN INTERACTIVA TP N° 1 - LABORATORIO I (2026)
 * Tema: Introducción a la Inteligencia Artificial y Agentes Racionales
 * JTP: Ing. Fabio D. Argañaraz
 * ==========================================================================
 */

const STORAGE_KEY = 'LAB1_2026_TP1_RESPUESTAS';

// Estado global de respuestas del estudiante
let state = {
  student: {
    name: '',
    dni: '',
    email: '',
    comision: '',
    github_user: ''
  },
  answers: {
    ej1_terminos_fundamentales: {},
    ej2_dimensiones_russell_norvig: {},
    ej3_ciclo_agente_arquitectura: {},
    ej4_especificacion_peas: {},
    ej5_propiedades_agentes: {},
    ej6_agente_reactivo_simple: {},
    ej7_test_turing_disciplinas: {},
    ej8_estado_del_arte: {},
    ej9_habitacion_china_searle: {},
    ej10_limites_y_heuristicas: ''
  }
};

// ==================== DEFINICIÓN DE OPCIONES POR EJERCICIO ====================

const EJ1_DEFINICIONES = [
  {
    id: 'inteligencia',
    termino: '1. Inteligencia',
    options: [
      { val: '', label: '-- Seleccionar Definición --' },
      { val: 'reproduccion_biologica', label: 'Capacidad exclusiva de organismos de carbono para reproducir secuencias de ADN' },
      { val: 'capacidad_cognitiva', label: 'Capacidad mental de razonar, planificar, resolver problemas, pensar de forma abstracta y aprender' },
      { val: 'calculo_aritmetico', label: 'Velocidad de procesamiento de operaciones aritméticas en punto flotante por segundo' }
    ]
  },
  {
    id: 'ia',
    termino: '2. Inteligencia Artificial (IA)',
    options: [
      { val: '', label: '-- Seleccionar Definición --' },
      { val: 'automatizacion_mecanica', label: 'Construcción exclusiva de servomotores y brazos robóticos para líneas de ensamblaje' },
      { val: 'sistemas_almacenamiento', label: 'Sistemas de bases de datos relacionales para archivar registros masivos' },
      { val: 'sistemas_racionales', label: 'Estudio y diseño de sistemas computacionales capaces de percibir, razonar, aprender y actuar racionalmente' }
    ]
  },
  {
    id: 'agente',
    termino: '3. Agente',
    options: [
      { val: '', label: '-- Seleccionar Definición --' },
      { val: 'entidad_percepcion_accion', label: 'Cualquier entidad (física o software) que percibe su entorno mediante sensores y actúa sobre él mediante actuadores' },
      { val: 'microprocesador_silicio', label: 'Circuito integrado de silicio que ejecuta código binario secuencialmente' },
      { val: 'script_estatico', label: 'Subrutina lineal sin entradas sensoriales que compila sin emitir advertencias' }
    ]
  },
  {
    id: 'entorno',
    termino: '4. Entorno / Ambiente',
    options: [
      { val: '', label: '-- Seleccionar Definición --' },
      { val: 'compilador_ide', label: 'El editor de código fuente y su terminal de depuración interactiva' },
      { val: 'medio_operacion', label: 'El medio físico o digital en el que está inmerso el agente, del cual recibe percepciones y sobre el cual recaen sus acciones' },
      { val: 'memoria_ram_estatica', label: 'El bus de direcciones de la placa madre y la memoria caché de nivel 1' }
    ]
  },
  {
    id: 'racionalidad',
    termino: '5. Racionalidad',
    options: [
      { val: '', label: '-- Seleccionar Definición --' },
      { val: 'omnisciencia_absoluta', label: 'Conocimiento perfecto e infinito de todos los eventos pasados, presentes y futuros del universo' },
      { val: 'fidelidad_emocional', label: 'Imitación exacta de los sentimientos, sesgos y reacciones biológicas de una persona' },
      { val: 'max_desempeno_esperado', label: 'Propiedad de seleccionar la acción esperada que maximice la medida de desempeño dada la secuencia de percepciones' }
    ]
  }
];

const EJ2_ITEMS = [
  {
    id: 'pensar_humano',
    label: 'Cuadrante A: Pensar como Humanos',
    options: [
      { val: '', label: '-- Seleccionar Enfoque Teórico --' },
      { val: 'leyes_pensamiento', label: 'Lógica formal aristotélica y silogismos irrefutables' },
      { val: 'ciencias_cognitivas', label: 'Ciencias Cognitivas y modelos de redes neuronales biológicas (contrastación empírica)' },
      { val: 'agentes_racionales', label: 'Optimización de recompensas en ambientes de producción' }
    ]
  },
  {
    id: 'actuar_humano',
    label: 'Cuadrante B: Actuar como Humanos',
    options: [
      { val: '', label: '-- Seleccionar Enfoque Teórico --' },
      { val: 'test_turing', label: 'El Test de Turing (imitación conductual indistinguible de un evaluador humano)' },
      { val: 'optimizacion_lineal', label: 'Resolución de programación lineal por el método Simplex' },
      { val: 'ciencias_cognitivas', label: 'Medición de impulsos eléctricos neuronales por electroencefalograma' }
    ]
  },
  {
    id: 'pensar_racional',
    label: 'Cuadrante C: Pensar Racionalmente',
    options: [
      { val: '', label: '-- Seleccionar Enfoque Teórico --' },
      { val: 'test_turing', label: 'Conversación textual convincente en una terminal ciega' },
      { val: 'leyes_pensamiento', label: 'Leyes del Pensamiento (lógica formal, reglas de inferencia y silogismos sin contradicción)' },
      { val: 'empatia_emocional', label: 'Expresión facial fotorrealista en androides con animatrónica' }
    ]
  },
  {
    id: 'actuar_racional',
    label: 'Cuadrante D: Actuar Racionalmente',
    options: [
      { val: '', label: '-- Seleccionar Enfoque Teórico --' },
      { val: 'agentes_racionales', label: 'Sistemas de Agentes Inteligentes dirigidos por objetivos que buscan la acción correcta' },
      { val: 'leyes_pensamiento', label: 'Teoremas matemáticos formales abstractos sin interacción con el entorno' },
      { val: 'fidelidad_psicologica', label: 'Simulación de tiempos de duda y lapsus cognitivos humanos' }
    ]
  },
  {
    id: 'paradigma_central',
    label: 'Pregunta Clave: ¿Cuál dimensión fundamenta la moderna Ingeniería de IA y Automatización?',
    options: [
      { val: '', label: '-- Seleccionar Dimensión Rectora --' },
      { val: 'pensar_humano', label: 'Pensar como humanos (requiere ingeniería inversa completa del cerebro biológico)' },
      { val: 'actuar_humano', label: 'Actuar como humanos (se enfoca en engañar o simular debilidades humanas)' },
      { val: 'pensar_racional', label: 'Pensar racionalmente (insuficiente en la práctica ante incertidumbre y acción física)' },
      { val: 'actuar_racional', label: 'Actuar racionalmente (construcción de agentes útiles que maximicen objetivos en el mundo real)' }
    ]
  }
];

const EJ3_ETAPAS = [
  { id: 'paso1_mundo', label: 'Etapa 1: Origen de la interacción física/digital', opt: 'entorno' },
  { id: 'paso2_captura', label: 'Etapa 2: Dispositivos físicos de recepción (Hardware)', opt: 'sensores' },
  { id: 'paso3_dato', label: 'Etapa 3: Datos crudos o estructurados capturados en un instante', opt: 'percepciones' },
  { id: 'paso4_decision', label: 'Etapa 4: Algoritmo de toma de decisiones (Cerebro/Lógica)', opt: 'programa_agente' },
  { id: 'paso5_comando', label: 'Etapa 5: Directiva o comando emitido hacia el exterior', opt: 'acciones' },
  { id: 'paso6_ejecucion', label: 'Etapa 6: Mecanismos que alteran físicamente el estado del mundo', opt: 'actuadores' }
];

const EJ3_OPCIONES_PASOS = [
  { val: '', label: '-- Seleccionar Elemento --' },
  { val: 'acciones', label: 'Acciones (comandos a ejecutar)' },
  { val: 'actuadores', label: 'Actuadores (motores, relays, pantallas)' },
  { val: 'entorno', label: 'Entorno / Ambiente externo' },
  { val: 'percepciones', label: 'Percepciones (señales sensoriales)' },
  { val: 'programa_agente', label: 'Programa de Agente (Software/Lógica)' },
  { val: 'sensores', label: 'Sensores (cámaras, encoders, micrófonos)' }
];

const EJ4_ITEMS = [
  {
    agente: 'Vehículo Autónomo Urbano (Taxi Robótico)',
    fields: [
      {
        id: 'auto_p',
        label: 'Medida de Rendimiento (P - Performance)',
        options: [
          { val: '', label: '-- Seleccionar P --' },
          { val: 'volante_freno_acelerador_luces', label: 'Volante, acelerador, frenos, luces de giro y bocina' },
          { val: 'seguridad_rapidez_confort_legalidad', label: 'Seguridad vial, cumplimiento de normas de tránsito, rapidez del trayecto, confort de pasajeros y mínimo consumo' },
          { val: 'calles_peatones_vehiculos_clima', label: 'Calles asfaltadas, intersecciones con semáforos, peatones impredecibles y lluvia' }
        ]
      },
      {
        id: 'auto_e',
        label: 'Entorno de Operación (E - Environment)',
        options: [
          { val: '', label: '-- Seleccionar E --' },
          { val: 'calles_peatones_vehiculos_clima', label: 'Red vial urbana, otros vehículos, ciclistas, peatones, condiciones climáticas y señalizaciones' },
          { val: 'camaras_lidar_radar_gps_velocimetro', label: 'Cámaras estereoscópicas, LiDAR 3D, radar de proximidad y sensor GPS' },
          { val: 'seguridad_rapidez_confort_legalidad', label: 'Llegar al destino sin choques ni multas por exceso de velocidad' }
        ]
      },
      {
        id: 'auto_a',
        label: 'Actuadores Disponibles (A - Actuators)',
        options: [
          { val: '', label: '-- Seleccionar A --' },
          { val: 'camaras_lidar_radar_gps_velocimetro', label: 'Sensores ultrasónicos y satélites de posicionamiento' },
          { val: 'calles_peatones_vehiculos_clima', label: 'Rutas secundarias y avenidas con tráfico congestionado' },
          { val: 'volante_freno_acelerador_luces', label: 'Control electrohidráulico de dirección (volante), acelerador electrónico, frenos ABS y señalización' }
        ]
      },
      {
        id: 'auto_s',
        label: 'Sensores de Percepción (S - Sensors)',
        options: [
          { val: '', label: '-- Seleccionar S --' },
          { val: 'camaras_lidar_radar_gps_velocimetro', label: 'Cámaras de visión computacional, sensores LiDAR, radar Doppler, GPS y odometría de ruedas' },
          { val: 'volante_freno_acelerador_luces', label: 'Palanca de cambios automática y pedal de frenado' },
          { val: 'seguridad_rapidez_confort_legalidad', label: 'Optimización de tiempo de viaje y ahorro de combustible' }
        ]
      }
    ]
  },
  {
    agente: 'Sistema de Diagnóstico Médico (Slide 14 Clase 3.1)',
    fields: [
      {
        id: 'med_p',
        label: 'Medida de Rendimiento (P - Performance)',
        options: [
          { val: '', label: '-- Seleccionar P --' },
          { val: 'paciente_hospital_personal_sanitario', label: 'Salas de internación, laboratorio bioquímico y quirófano' },
          { val: 'paciente_saludable_min_costos', label: 'Salud y recuperación del paciente, máxima precisión diagnóstica y reducción al mínimo de costos y efectos secundarios' },
          { val: 'preguntas_pruebas_tratamientos_recetas', label: 'Formulación de preguntas al paciente y prescripción de fármacos' }
        ]
      },
      {
        id: 'med_e',
        label: 'Entorno de Operación (E - Environment)',
        options: [
          { val: '', label: '-- Seleccionar E --' },
          { val: 'paciente_hospital_personal_sanitario', label: 'El paciente, personal médico, infraestructura hospitalaria y registros de laboratorio' },
          { val: 'sintomas_evidencias_respuestas_paciente', label: 'Temperatura corporal de 38.5°C y análisis de sangre con leucocitosis' },
          { val: 'paciente_saludable_min_costos', label: 'Minimizar juicios por mala praxis y optimizar camas hospitalarias' }
        ]
      },
      {
        id: 'med_a',
        label: 'Actuadores Disponibles (A - Actuators)',
        options: [
          { val: '', label: '-- Seleccionar A --' },
          { val: 'sintomas_evidencias_respuestas_paciente', label: 'Historial de alergias y nivel de glucosa en sangre' },
          { val: 'preguntas_pruebas_tratamientos_recetas', label: 'Presentación de preguntas clínicas en pantalla, solicitud de estudios complementarios y prescripción de tratamientos' },
          { val: 'paciente_hospital_personal_sanitario', label: 'El sistema inmunológico y órganos biológicos del paciente' }
        ]
      },
      {
        id: 'med_s',
        label: 'Sensores de Percepción (S - Sensors)',
        options: [
          { val: '', label: '-- Seleccionar S --' },
          { val: 'preguntas_pruebas_tratamientos_recetas', label: 'Envío de alertas de medicación a enfermería' },
          { val: 'paciente_saludable_min_costos', label: 'Tasa de curación en pacientes ambulatorios' },
          { val: 'sintomas_evidencias_respuestas_paciente', label: 'Entradas de texto con síntomas, imágenes radiológicas digitales, resultados de laboratorio y respuestas al cuestionario' }
        ]
      }
    ]
  }
];

const EJ5_SITUACIONES = [
  {
    id: 'sit_sin_intervencion',
    desc: 'Un robot explorador en Marte continúa mapeando el terreno y calibrando sus paneles solares durante meses sin que un operador humano le envíe comandos paso a paso.',
    expected: 'AUTONOMIA'
  },
  {
    id: 'sit_detectar_freno',
    desc: 'El vehículo autónomo detecta que las luces de stop del coche de adelante se encienden e inicia inmediatamente el frenado de emergencia.',
    expected: 'REACTIVIDAD'
  },
  {
    id: 'sit_iniciativa_objetivos',
    desc: 'El sistema no espera a que ocurra un evento: detecta una oportunidad en el mercado y formula por cuenta propia una secuencia de compras para alcanzar una meta financiera.',
    expected: 'PROACTIVIDAD'
  },
  {
    id: 'sit_comunicacion_agentes',
    desc: 'Dos drones de entrega negocian y coordinan automáticamente el derecho de paso en una intersección aérea mediante un protocolo de mensajería.',
    expected: 'HABILIDAD_SOCIAL'
  },
  {
    id: 'sit_adaptacion_entorno',
    desc: 'Un termostato inteligente detecta que una ventana fue abierta (caída brusca de temperatura) y suspende la calefacción de inmediato para evitar gasto innecesario.',
    expected: 'REACTIVIDAD'
  }
];

const EJ6_CASOS = [
  {
    id: 'caso_a_sucio',
    loc: 'Ubicación A',
    estado: 'Sucio',
    options: [
      { val: '', label: '-- Acción --' },
      { val: 'derecha', label: 'Derecha' },
      { val: 'aspirar', label: 'Aspirar' },
      { val: 'izquierda', label: 'Izquierda' },
      { val: 'no_operar', label: 'NoOperar' }
    ]
  },
  {
    id: 'caso_a_limpio',
    loc: 'Ubicación A',
    estado: 'Limpio',
    options: [
      { val: '', label: '-- Acción --' },
      { val: 'aspirar', label: 'Aspirar' },
      { val: 'izquierda', label: 'Izquierda' },
      { val: 'derecha', label: 'Derecha' },
      { val: 'apagar', label: 'Apagar' }
    ]
  },
  {
    id: 'caso_b_sucio',
    loc: 'Ubicación B',
    estado: 'Sucio',
    options: [
      { val: '', label: '-- Acción --' },
      { val: 'izquierda', label: 'Izquierda' },
      { val: 'derecha', label: 'Derecha' },
      { val: 'aspirar', label: 'Aspirar' },
      { val: 'esperar', label: 'Esperar' }
    ]
  },
  {
    id: 'caso_b_limpio',
    loc: 'Ubicación B',
    estado: 'Limpio',
    options: [
      { val: '', label: '-- Acción --' },
      { val: 'derecha', label: 'Derecha' },
      { val: 'izquierda', label: 'Izquierda' },
      { val: 'aspirar', label: 'Aspirar' },
      { val: 'reiniciar', label: 'Reiniciar' }
    ]
  }
];

const EJ7_DISCIPLINAS = [
  {
    id: 'disp_nlp',
    nombre: '1. Procesamiento de Lenguaje Natural (PLN)',
    detalle: 'Permite comunicarse fluidamente en lenguaje humano con el evaluador.'
  },
  {
    id: 'disp_kr',
    nombre: '2. Representación del Conocimiento (KR)',
    detalle: 'Permite almacenar lo que el sistema sabe, lee o escucha en una memoria lógica.'
  },
  {
    id: 'disp_ar',
    nombre: '3. Razonamiento Automático (AR)',
    detalle: 'Permite utilizar la información almacenada para responder preguntas y extraer conclusiones.'
  },
  {
    id: 'disp_ml',
    nombre: '4. Aprendizaje Automático (Machine Learning)',
    detalle: 'Permite adaptarse a nuevas circunstancias y detectar patrones emergentes.'
  },
  {
    id: 'disp_cv',
    nombre: '5. Visión Computacional',
    detalle: 'Permite percibir visualmente objetos físicos y documentos presentados por el evaluador.'
  },
  {
    id: 'disp_rob',
    nombre: '6. Robótica y Manipulación',
    detalle: 'Permite desplazar componentes físicos e interactuar mecánicamente en el espacio real.'
  }
];

const EJ8_TAREAS = [
  {
    id: 'tarea_diagnostico_imagen',
    nombre: 'Detección de patologías en radiografías de tórax y melanomas cutáneos en imágenes de alta resolución',
    options: [
      { val: '', label: '-- Estado Actual --' },
      { val: 'EN_DESARROLLO_ACTIVO', label: 'En desarrollo activo (requiere grandes avances teóricos)' },
      { val: 'RESUELTO_DOMINADO', label: 'Resuelto / Dominado (igualando o superando precisión de especialistas)' },
      { val: 'PROBLEMA_ABIERTO_NO_RESUELTO', label: 'Problema abierto no resuelto (totalmente inaccesible hoy)' }
    ]
  },
  {
    id: 'tarea_traduccion_contextual',
    nombre: 'Traducción de voz simultánea en tiempo real con adaptación idiomática y captación de sarcasmo',
    options: [
      { val: '', label: '-- Estado Actual --' },
      { val: 'RESUELTO_DOMINADO', label: 'Resuelto / Dominado a nivel perfecto en cualquier dialecto' },
      { val: 'PROBLEMA_ABIERTO_NO_RESUELTO', label: 'Problema abierto no resuelto e inviable' },
      { val: 'EN_DESARROLLO_ACTIVO', label: 'En desarrollo activo (excelente rendimiento con LLMs, pero con desafíos en matices)' }
    ]
  },
  {
    id: 'tarea_conduccion_urbana_no_delimitada',
    nombre: 'Conducción 100% autónoma (Nivel 5) en calles de tierra sin señalizar con clima severo y tránsito desordenado',
    options: [
      { val: '', label: '-- Estado Actual --' },
      { val: 'EN_DESARROLLO_ACTIVO', label: 'En desarrollo activo (funciona en zonas mapeadas, pero no en cualquier entorno no estructurado)' },
      { val: 'RESUELTO_DOMINADO', label: 'Resuelto y comercializado masivamente en todo el mundo sin volante' },
      { val: 'PROBLEMA_ABIERTO_NO_RESUELTO', label: 'Teóricamente imposible según las leyes físicas' }
    ]
  },
  {
    id: 'tarea_teoremas_complejos',
    nombre: 'Demostración autónoma no supervisada de conjeturas matemáticas de frontera abierta (como P vs NP o Riemann)',
    options: [
      { val: '', label: '-- Estado Actual --' },
      { val: 'RESUELTO_DOMINADO', label: 'Resuelto (las computadoras resuelven todos los problemas matemáticos abiertos)' },
      { val: 'PROBLEMA_ABIERTO_NO_RESUELTO', label: 'Problema abierto no resuelto (la IA asiste formalmente, pero no genera intuición creativa de frontera)' },
      { val: 'EN_DESARROLLO_ACTIVO', label: 'En desarrollo activo comercial' }
    ]
  }
];

const EJ9_MAPEO = [
  {
    id: 'map_operario',
    componente_searle: '1. La Persona / El Operario encerrado',
    options: [
      { val: '', label: '-- Equivalente Computacional --' },
      { val: 'SOFTWARE_ALGORITMO', label: 'El Software / Algoritmo condicional (código programado)' },
      { val: 'CPU_PROCESADOR', label: 'La CPU / Procesador (ejecuta instrucciones mecánicamente sin comprenderlas)' },
      { val: 'MEMORIA_BASE_DATOS', label: 'La Memoria RAM o Base de Datos pasiva' }
    ]
  },
  {
    id: 'map_libro_reglas',
    componente_searle: '2. El Libro de Reglas de traducción',
    options: [
      { val: '', label: '-- Equivalente Computacional --' },
      { val: 'CPU_PROCESADOR', label: 'La Unidad de Control del Procesador' },
      { val: 'SOFTWARE_ALGORITMO', label: 'El Software / Programa / Algoritmo (reglas sintácticas "si entra X, responde Y")' },
      { val: 'INTERFACES_IO', label: 'Los cables de conexión periférica' }
    ]
  },
  {
    id: 'map_cestas_simbolos',
    componente_searle: '3. Las Cestas con miles de ideogramas en papel',
    options: [
      { val: '', label: '-- Equivalente Computacional --' },
      { val: 'MEMORIA_BASE_DATOS', label: 'La Memoria RAM / Almacenamiento / Base de Datos (depósito de datos sin contexto)' },
      { val: 'SOFTWARE_ALGORITMO', label: 'El sistema operativo multitarea' },
      { val: 'CPU_PROCESADOR', label: 'La Unidad Aritmético Lógica' }
    ]
  },
  {
    id: 'map_ranuras_papel',
    componente_searle: '4. Las Ranuras de entrada y salida en la puerta',
    options: [
      { val: '', label: '-- Equivalente Computacional --' },
      { val: 'MEMORIA_BASE_DATOS', label: 'La memoria caché de nivel 2' },
      { val: 'INTERFACES_IO', label: 'Las Interfaces de Entrada y Salida (I/O: teclado, pantalla, red)' },
      { val: 'SOFTWARE_ALGORITMO', label: 'El compilador de lenguaje C' }
    ]
  }
];

const EJ10_OPCIONES = [
  {
    val: 'opt_a',
    title: 'Postura Reduccionista Negativa',
    desc: 'Dado que el problema de la parada de Turing y los problemas NP-completos son computacionalmente intratables de manera exacta, es una falacia afirmar que la IA sea posible; las máquinas nunca podrán tomar decisiones racionales en el mundo real.'
  },
  {
    val: 'opt_b',
    title: 'Postura del Hardware Infinito',
    desc: 'Los problemas de complejidad computacional desaparecerán por completo en cuanto las computadoras cuánticas tengan suficientes qubits, haciendo obsoletos todos los algoritmos actuales al resolver problemas NP en tiempo O(1).'
  },
  {
    val: 'opt_c',
    title: 'Postura Racional de la IA Moderna (Enfoque Heurístico)',
    desc: 'La existencia de problemas indecidibles o NP-completos no anula la IA. Los seres inteligentes (humanos y agentes artificiales) operan en entornos complejos mediante métodos heurísticos, aproximaciones y satisfacción de metas en tiempo polinomial útil, en lugar de búsquedas exhaustivas exactas astronómicamente inviables.'
  },
  {
    val: 'opt_d',
    title: 'Postura del Determinismo Lógico',
    desc: 'Solo se considera verdadero un sistema inteligente si es capaz de demostrar formalmente la completitud de cualquier teoría formal sin caer en los teoremas de incompletitud de Gödel.'
  }
];

// ==================== INICIALIZACIÓN Y RENDERIZADO ====================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadStateFromStorage();
  renderAllExercises();
  bindGlobalEvents();
  updateProgress();
});

function initTheme() {
  const saved = localStorage.getItem('LAB1_THEME') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('LAB1_THEME', next);
    });
  }
}

function bindGlobalEvents() {
  // Datos de estudiante
  ['student-name', 'student-dni', 'student-email', 'student-comision', 'student-github'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const prop = id.replace('student-', '').replace('github', 'github_user');
    el.addEventListener('input', (e) => {
      state.student[prop] = e.target.value.trim();
      saveStateToStorage();
      updateProgress();
    });
  });

  // Botón exportar
  document.getElementById('btn-export-json').addEventListener('click', exportAnswersJson);
  
  // Botón importar
  const importInput = document.getElementById('file-import-input');
  document.getElementById('btn-import-json').addEventListener('click', () => importInput.click());
  importInput.addEventListener('change', handleImportJson);

  // Modales
  setupModal('btn-open-biblio-all', 'modal-biblio');
  setupModal('btn-git-guide', 'modal-git');
}

function setupModal(btnId, modalId) {
  const btn = document.getElementById(btnId);
  const modal = document.getElementById(modalId);
  if (!btn || !modal) return;
  btn.addEventListener('click', () => modal.classList.add('open'));
  modal.querySelectorAll('.modal-close, .modal-overlay').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-close')) {
        modal.classList.remove('open');
      }
    });
  });
}

function renderAllExercises() {
  renderEj1();
  renderEj2();
  renderEj3();
  renderEj4();
  renderEj5();
  renderEj6();
  renderEj7();
  renderEj8();
  renderEj9();
  renderEj10();
  populateStudentFields();
}

function populateStudentFields() {
  if (state.student.name) document.getElementById('student-name').value = state.student.name;
  if (state.student.dni) document.getElementById('student-dni').value = state.student.dni;
  if (state.student.email) document.getElementById('student-email').value = state.student.email;
  if (state.student.comision) document.getElementById('student-comision').value = state.student.comision;
  if (state.student.github_user) document.getElementById('student-github').value = state.student.github_user;
}

// ==================== RENDERS ESPECÍFICOS ====================

function renderEj1() {
  const container = document.getElementById('ej1-container');
  if (!container) return;
  container.innerHTML = '';
  
  EJ1_DEFINICIONES.forEach(item => {
    const row = document.createElement('div academic-row');
    row.className = 'switch-row';
    const savedVal = state.answers.ej1_terminos_fundamentales[item.id] || '';

    const label = document.createElement('div');
    label.className = 'switch-label-text';
    label.innerHTML = `<strong>${item.termino}</strong>`;

    const select = document.createElement('select');
    select.className = 'custom-select';
    select.style.maxWidth = '550px';

    item.options.forEach(opt => {
      const optionEl = document.createElement('option');
      optionEl.value = opt.val;
      optionEl.textContent = opt.label;
      if (opt.val === savedVal) optionEl.selected = true;
      select.appendChild(optionEl);
    });

    select.addEventListener('change', (e) => {
      state.answers.ej1_terminos_fundamentales[item.id] = e.target.value;
      saveStateToStorage();
      updateProgress();
    });

    row.appendChild(label);
    row.appendChild(select);
    container.appendChild(row);
  });
}

function renderEj2() {
  const container = document.getElementById('ej2-container');
  if (!container) return;
  container.innerHTML = '';

  const grid = document.createElement('div');
  grid.className = 'quadrant-grid';

  EJ2_ITEMS.slice(0, 4).forEach(item => {
    const box = document.createElement('div');
    box.className = 'quadrant-box' + (item.id === 'actuar_racional' ? ' highlight' : '');
    const savedVal = state.answers.ej2_dimensiones_russell_norvig[item.id] || '';

    const title = document.createElement('span');
    title.className = 'quadrant-label';
    title.textContent = item.label;

    const select = document.createElement('select');
    select.className = 'custom-select';

    item.options.forEach(opt => {
      const o = document.createElement('option');
      o.value = opt.val;
      o.textContent = opt.label;
      if (opt.val === savedVal) o.selected = true;
      select.appendChild(o);
    });

    select.addEventListener('change', (e) => {
      state.answers.ej2_dimensiones_russell_norvig[item.id] = e.target.value;
      saveStateToStorage();
      updateProgress();
    });

    box.appendChild(title);
    box.appendChild(select);
    grid.appendChild(box);
  });

  container.appendChild(grid);

  // Pregunta central
  const centralItem = EJ2_ITEMS[4];
  const centralDiv = document.createElement('div');
  centralDiv.className = 'switch-row';
  centralDiv.style.borderLeft = '4px solid var(--accent-amber)';

  const label = document.createElement('div');
  label.className = 'switch-label-text';
  label.innerHTML = `<strong>${centralItem.label}</strong>`;

  const selectCentral = document.createElement('select');
  selectCentral.className = 'custom-select';
  selectCentral.style.maxWidth = '450px';

  const savedCentral = state.answers.ej2_dimensiones_russell_norvig[centralItem.id] || '';
  centralItem.options.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt.val;
    o.textContent = opt.label;
    if (opt.val === savedCentral) o.selected = true;
    selectCentral.appendChild(o);
  });

  selectCentral.addEventListener('change', (e) => {
    state.answers.ej2_dimensiones_russell_norvig[centralItem.id] = e.target.value;
    saveStateToStorage();
    updateProgress();
  });

  centralDiv.appendChild(label);
  centralDiv.appendChild(selectCentral);
  container.appendChild(centralDiv);
}

function renderEj3() {
  const container = document.getElementById('ej3-container');
  if (!container) return;
  container.innerHTML = '';

  const tableWrap = document.createElement('div');
  tableWrap.className = 'interactive-table-wrapper';

  const table = document.createElement('table');
  table.className = 'interactive-table';
  table.innerHTML = `
    <thead>
      <tr>
        <th style="width: 50%;">Fase / Componente del Ciclo</th>
        <th style="width: 50%;">Elemento Estructural de la Arquitectura</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector('tbody');

  EJ3_ETAPAS.forEach(etapa => {
    const tr = document.createElement('tr');
    const savedVal = state.answers.ej3_ciclo_agente_arquitectura[etapa.id] || '';

    tr.innerHTML = `
      <td><strong>${etapa.label}</strong></td>
      <td></td>
    `;

    const tdSelect = tr.querySelectorAll('td')[1];
    const select = document.createElement('select');
    select.className = 'custom-select';

    EJ3_OPCIONES_PASOS.forEach(opt => {
      const o = document.createElement('option');
      o.value = opt.val;
      o.textContent = opt.label;
      if (opt.val === savedVal) o.selected = true;
      select.appendChild(o);
    });

    select.addEventListener('change', (e) => {
      state.answers.ej3_ciclo_agente_arquitectura[etapa.id] = e.target.value;
      saveStateToStorage();
      updateProgress();
    });

    tdSelect.appendChild(select);
    tbody.appendChild(tr);
  });

  tableWrap.appendChild(table);
  container.appendChild(tableWrap);

  // Distinción matemática vs implementación
  const distDiv = document.createElement('div');
  distDiv.style.marginTop = '18px';
  distDiv.innerHTML = `
    <h4 style="margin-bottom: 10px; color: var(--text-primary);">Distinción Conceptual: Función de Agente vs. Programa de Agente</h4>
  `;

  const distItems = [
    {
      id: 'distincion_matematica',
      text: 'Descripción abstracta formal que mapea toda posible secuencia de percepciones en una acción (f: P* → A)',
      expected: 'funcion_agente'
    },
    {
      id: 'distincion_implementacion',
      text: 'Código concreto, algoritmo y estructuras de datos que se ejecutan sobre una arquitectura física de hardware',
      expected: 'programa_agente'
    }
  ];

  distItems.forEach(d => {
    const row = document.createElement('div');
    row.className = 'switch-row';
    const curVal = state.answers.ej3_ciclo_agente_arquitectura[d.id] || '';

    row.innerHTML = `
      <div class="switch-label-text">${d.text}</div>
      <div class="segmented-control" data-dist-id="${d.id}">
        <button type="button" class="segment-btn ${curVal === 'funcion_agente' ? 'active' : ''}" data-val="funcion_agente">Función de Agente</button>
        <button type="button" class="segment-btn ${curVal === 'programa_agente' ? 'active' : ''}" data-val="programa_agente">Programa de Agente</button>
      </div>
    `;

    row.querySelectorAll('.segment-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        row.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.answers.ej3_ciclo_agente_arquitectura[d.id] = btn.getAttribute('data-val');
        saveStateToStorage();
        updateProgress();
      });
    });

    distDiv.appendChild(row);
  });

  container.appendChild(distDiv);
}

function renderEj4() {
  const container = document.getElementById('ej4-container');
  if (!container) return;
  container.innerHTML = '';

  EJ4_ITEMS.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.padding = '18px';
    card.style.marginBottom = '16px';
    card.style.background = 'var(--bg-secondary)';

    card.innerHTML = `<h4 style="margin-bottom: 14px; color: var(--text-accent);">${item.agente}</h4>`;

    const formGrid = document.createElement('div');
    formGrid.className = 'form-grid';

    item.fields.forEach(f => {
      const group = document.createElement('div');
      group.className = 'form-group';
      const savedVal = state.answers.ej4_especificacion_peas[f.id] || '';

      group.innerHTML = `<label>${f.label}</label>`;
      const select = document.createElement('select');
      select.className = 'custom-select';

      f.options.forEach(opt => {
        const o = document.createElement('option');
        o.value = opt.val;
        o.textContent = opt.label;
        if (opt.val === savedVal) o.selected = true;
        select.appendChild(o);
      });

      select.addEventListener('change', (e) => {
        state.answers.ej4_especificacion_peas[f.id] = e.target.value;
        saveStateToStorage();
        updateProgress();
      });

      group.appendChild(select);
      formGrid.appendChild(group);
    });

    card.appendChild(formGrid);
    container.appendChild(card);
  });
}

function renderEj5() {
  const container = document.getElementById('ej5-container');
  if (!container) return;
  container.innerHTML = '';

  EJ5_SITUACIONES.forEach(sit => {
    const row = document.createElement('div');
    row.className = 'switch-row';
    const curVal = state.answers.ej5_propiedades_agentes[sit.id] || '';

    const label = document.createElement('div');
    label.className = 'switch-label-text';
    label.textContent = sit.desc;

    const control = document.createElement('div');
    control.className = 'segmented-control';

    const props = [
      { id: 'AUTONOMIA', text: 'Autonomía' },
      { id: 'REACTIVIDAD', text: 'Reactividad' },
      { id: 'PROACTIVIDAD', text: 'Proactividad' },
      { id: 'HABILIDAD_SOCIAL', text: 'Habilidad Social' }
    ];

    props.forEach(p => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = `segment-btn ${curVal === p.id ? 'active' : ''}`;
      b.textContent = p.text;
      b.addEventListener('click', () => {
        control.querySelectorAll('.segment-btn').forEach(btn => btn.classList.remove('active'));
        b.classList.add('active');
        state.answers.ej5_propiedades_agentes[sit.id] = p.id;
        saveStateToStorage();
        updateProgress();
      });
      control.appendChild(b);
    });

    row.appendChild(label);
    row.appendChild(control);
    container.appendChild(row);
  });
}

function renderEj6() {
  const container = document.getElementById('ej6-container');
  if (!container) return;
  container.innerHTML = '';

  const tableWrap = document.createElement('div');
  tableWrap.className = 'interactive-table-wrapper';

  const table = document.createElement('table');
  table.className = 'interactive-table';
  table.innerHTML = `
    <thead>
      <tr>
        <th>Localización Actual</th>
        <th>Estado de la Casilla</th>
        <th>Regla Condición-Acción Aplicada</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector('tbody');

  EJ6_CASOS.forEach(c => {
    const tr = document.createElement('tr');
    const savedVal = state.answers.ej6_agente_reactivo_simple[c.id] || '';

    tr.innerHTML = `
      <td><strong>${c.loc}</strong></td>
      <td><span class="badge-tag ${c.estado === 'Sucio' ? 'cyan' : 'emerald'}">${c.estado}</span></td>
      <td></td>
    `;

    const tdSel = tr.querySelectorAll('td')[2];
    const select = document.createElement('select');
    select.className = 'custom-select';

    c.options.forEach(opt => {
      const o = document.createElement('option');
      o.value = opt.val;
      o.textContent = opt.label;
      if (opt.val === savedVal) o.selected = true;
      select.appendChild(o);
    });

    select.addEventListener('change', (e) => {
      state.answers.ej6_agente_reactivo_simple[c.id] = e.target.value;
      saveStateToStorage();
      updateProgress();
    });

    tdSel.appendChild(select);
    tbody.appendChild(tr);
  });

  tableWrap.appendChild(table);
  container.appendChild(tableWrap);

  // Propiedad de memoria
  const memDiv = document.createElement('div');
  memDiv.className = 'switch-row';
  memDiv.style.marginTop = '16px';

  const memLabel = document.createElement('div');
  memLabel.className = 'switch-label-text';
  memLabel.innerHTML = '<strong>¿Cómo gestiona el historial de percepciones pasadas un agente reactivo simple puro?</strong>';

  const memSelect = document.createElement('select');
  memSelect.className = 'custom-select';
  memSelect.style.maxWidth = '450px';

  const memOptions = [
    { val: '', label: '-- Seleccionar Comportamiento de Memoria --' },
    { val: 'acumula_historico', label: 'Mantiene una base de datos histórica completa de todos los estados visitados' },
    { val: 'ignora_historial', label: 'Ignora por completo el historial previo; actúa solo en base a la percepción actual inmediata' },
    { val: 'predice_futuro', label: 'Calcula probabilidades de estados futuros mediante un árbol de búsqueda profundo' }
  ];

  const savedMem = state.answers.ej6_agente_reactivo_simple.propiedad_memoria || '';
  memOptions.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt.val;
    o.textContent = opt.label;
    if (opt.val === savedMem) o.selected = true;
    memSelect.appendChild(o);
  });

  memSelect.addEventListener('change', (e) => {
    state.answers.ej6_agente_reactivo_simple.propiedad_memoria = e.target.value;
    saveStateToStorage();
    updateProgress();
  });

  memDiv.appendChild(memLabel);
  memDiv.appendChild(memSelect);
  container.appendChild(memDiv);
}

function renderEj7() {
  const container = document.getElementById('ej7-container');
  if (!container) return;
  container.innerHTML = '';

  EJ7_DISCIPLINAS.forEach(d => {
    const row = document.createElement('div');
    row.className = 'switch-row';
    const curVal = state.answers.ej7_test_turing_disciplinas[d.id] || '';

    row.innerHTML = `
      <div class="switch-label-text">
        <strong>${d.nombre}</strong><br>
        <span style="font-size: 0.8rem; color: var(--text-secondary);">${d.detalle}</span>
      </div>
      <div class="segmented-control">
        <button type="button" class="segment-btn ${curVal === 'TURING_ESTANDAR' ? 'active' : ''}" data-val="TURING_ESTANDAR">Test de Turing Estándar</button>
        <button type="button" class="segment-btn ${curVal === 'TEST_TOTAL_EXCLUSIVO' ? 'active' : ''}" data-val="TEST_TOTAL_EXCLUSIVO">Test de Turing Total (Físico)</button>
      </div>
    `;

    row.querySelectorAll('.segment-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        row.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.answers.ej7_test_turing_disciplinas[d.id] = btn.getAttribute('data-val');
        saveStateToStorage();
        updateProgress();
      });
    });

    container.appendChild(row);
  });
}

function renderEj8() {
  const container = document.getElementById('ej8-container');
  if (!container) return;
  container.innerHTML = '';

  EJ8_TAREAS.forEach(t => {
    const row = document.createElement('div');
    row.className = 'switch-row';
    const savedVal = state.answers.ej8_estado_del_arte[t.id] || '';

    row.innerHTML = `
      <div class="switch-label-text">${t.nombre}</div>
    `;

    const select = document.createElement('select');
    select.className = 'custom-select';
    select.style.maxWidth = '460px';

    t.options.forEach(opt => {
      const o = document.createElement('option');
      o.value = opt.val;
      o.textContent = opt.label;
      if (opt.val === savedVal) o.selected = true;
      select.appendChild(o);
    });

    select.addEventListener('change', (e) => {
      state.answers.ej8_estado_del_arte[t.id] = e.target.value;
      saveStateToStorage();
      updateProgress();
    });

    row.appendChild(select);
    container.appendChild(row);
  });
}

function renderEj9() {
  const container = document.getElementById('ej9-container');
  if (!container) return;
  container.innerHTML = '';

  const tableWrap = document.createElement('div');
  tableWrap.className = 'interactive-table-wrapper';

  const table = document.createElement('table');
  table.className = 'interactive-table';
  table.innerHTML = `
    <thead>
      <tr>
        <th style="width: 45%;">Elemento de la Habitación China (John Searle)</th>
        <th style="width: 55%;">Equivalente en la Arquitectura Computacional</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector('tbody');

  EJ9_MAPEO.forEach(m => {
    const tr = document.createElement('tr');
    const savedVal = state.answers.ej9_habitacion_china_searle[m.id] || '';

    tr.innerHTML = `
      <td><strong>${m.componente_searle}</strong></td>
      <td></td>
    `;

    const tdSel = tr.querySelectorAll('td')[1];
    const select = document.createElement('select');
    select.className = 'custom-select';

    m.options.forEach(opt => {
      const o = document.createElement('option');
      o.value = opt.val;
      o.textContent = opt.label;
      if (opt.val === savedVal) o.selected = true;
      select.appendChild(o);
    });

    select.addEventListener('change', (e) => {
      state.answers.ej9_habitacion_china_searle[m.id] = e.target.value;
      saveStateToStorage();
      updateProgress();
    });

    tdSel.appendChild(select);
    tbody.appendChild(tr);
  });

  tableWrap.appendChild(table);
  container.appendChild(tableWrap);

  // Conclusión conceptual de Searle
  const concDiv = document.createElement('div');
  concDiv.className = 'switch-row';
  concDiv.style.marginTop = '16px';

  const concLabel = document.createElement('div');
  concLabel.className = 'switch-label-text';
  concLabel.innerHTML = '<strong>¿Cuál es la conclusión fundamental de Searle sobre la "IA Fuerte" y la manipulación de símbolos?</strong>';

  const concSelect = document.createElement('select');
  concSelect.className = 'custom-select';
  concSelect.style.maxWidth = '550px';

  const concOptions = [
    { val: '', label: '-- Seleccionar Conclusión Filosófica --' },
    { val: 'sintaxis_genera_semantica', label: 'La ejecución de reglas sintácticas a suficiente velocidad engendra automáticamente conciencia biológica real' },
    { val: 'sintaxis_no_semantica', label: 'La sintaxis (manipulación de símbolos) por sí sola no equivale ni es suficiente para generar semántica (comprensión)' },
    { val: 'computadoras_imposibles', label: 'Es imposible construir programas que ayuden a humanos a traducir idiomas extranjeros' }
  ];

  const savedConc = state.answers.ej9_habitacion_china_searle.conclusion_searle || '';
  concOptions.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt.val;
    o.textContent = opt.label;
    if (opt.val === savedConc) o.selected = true;
    concSelect.appendChild(o);
  });

  concSelect.addEventListener('change', (e) => {
    state.answers.ej9_habitacion_china_searle.conclusion_searle = e.target.value;
    saveStateToStorage();
    updateProgress();
  });

  concDiv.appendChild(concLabel);
  concDiv.appendChild(concSelect);
  container.appendChild(concDiv);
}

function renderEj10() {
  const container = document.getElementById('ej10-container');
  if (!container) return;
  container.innerHTML = '';

  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'radio-cards-container';

  const currentVal = state.answers.ej10_limites_y_heuristicas || '';

  EJ10_OPCIONES.forEach(opt => {
    const card = document.createElement('div');
    card.className = `radio-card ${currentVal === opt.val ? 'active' : ''}`;
    card.setAttribute('data-val', opt.val);

    card.innerHTML = `
      <div class="radio-custom-indicator"></div>
      <div class="radio-content">
        <strong>${opt.title}</strong>
        <span>${opt.desc}</span>
      </div>
    `;

    card.addEventListener('click', () => {
      cardsContainer.querySelectorAll('.radio-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.answers.ej10_limites_y_heuristicas = opt.val;
      saveStateToStorage();
      updateProgress();
    });

    cardsContainer.appendChild(card);
  });

  container.appendChild(cardsContainer);
}

// ==================== CÁLCULO DE PROGRESO Y PERSISTENCIA ====================

function updateProgress() {
  let completedExercises = 0;
  const totalExercises = 10;

  // Ej 1
  const ej1Keys = ['inteligencia', 'ia', 'agente', 'entorno', 'racionalidad'];
  if (ej1Keys.every(k => state.answers.ej1_terminos_fundamentales[k])) completedExercises++;

  // Ej 2
  const ej2Keys = ['pensar_humano', 'actuar_humano', 'pensar_racional', 'actuar_racional', 'paradigma_central'];
  if (ej2Keys.every(k => state.answers.ej2_dimensiones_russell_norvig[k])) completedExercises++;

  // Ej 3
  const ej3Keys = ['paso1_mundo', 'paso2_captura', 'paso3_dato', 'paso4_decision', 'paso5_comando', 'paso6_ejecucion', 'distincion_matematica', 'distincion_implementacion'];
  if (ej3Keys.every(k => state.answers.ej3_ciclo_agente_arquitectura[k])) completedExercises++;

  // Ej 4
  const ej4Keys = ['auto_p', 'auto_e', 'auto_a', 'auto_s', 'med_p', 'med_e', 'med_a', 'med_s'];
  if (ej4Keys.every(k => state.answers.ej4_especificacion_peas[k])) completedExercises++;

  // Ej 5
  const ej5Keys = ['sit_sin_intervencion', 'sit_detectar_freno', 'sit_iniciativa_objetivos', 'sit_comunicacion_agentes', 'sit_adaptacion_entorno'];
  if (ej5Keys.every(k => state.answers.ej5_propiedades_agentes[k])) completedExercises++;

  // Ej 6
  const ej6Keys = ['caso_a_sucio', 'caso_a_limpio', 'caso_b_sucio', 'caso_b_limpio', 'propiedad_memoria'];
  if (ej6Keys.every(k => state.answers.ej6_agente_reactivo_simple[k])) completedExercises++;

  // Ej 7
  const ej7Keys = ['disp_nlp', 'disp_kr', 'disp_ar', 'disp_ml', 'disp_cv', 'disp_rob'];
  if (ej7Keys.every(k => state.answers.ej7_test_turing_disciplinas[k])) completedExercises++;

  // Ej 8
  const ej8Keys = ['tarea_diagnostico_imagen', 'tarea_traduccion_contextual', 'tarea_conduccion_urbana_no_delimitada', 'tarea_teoremas_complejos'];
  if (ej8Keys.every(k => state.answers.ej8_estado_del_arte[k])) completedExercises++;

  // Ej 9
  const ej9Keys = ['map_operario', 'map_libro_reglas', 'map_cestas_simbolos', 'map_ranuras_papel', 'conclusion_searle'];
  if (ej9Keys.every(k => state.answers.ej9_habitacion_china_searle[k])) completedExercises++;

  // Ej 10
  if (state.answers.ej10_limites_y_heuristicas) completedExercises++;

  const pct = Math.round((completedExercises / totalExercises) * 100);
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-percentage');

  if (progressBar) progressBar.style.width = `${pct}%`;
  if (progressText) progressText.textContent = `${pct}% (${completedExercises}/${totalExercises} completados)`;
}

function saveStateToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Error al guardar en localStorage', e);
  }
}

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = Object.assign(state, parsed);
    }
  } catch (e) {
    console.warn('No se pudo recuperar estado de localStorage', e);
  }
}

function exportAnswersJson() {
  if (!state.student.name || !state.student.dni) {
    showToast('Por favor, completa Nombre y DNI en la sección "Datos del Estudiante" antes de exportar.', 'warning');
    document.getElementById('student-name').focus();
    return;
  }

  const payload = {
    tp_id: 'LAB1-2026-TP1',
    student: state.student,
    exported_at: new Date().toISOString(),
    answers: state.answers
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "respuestas_tp1.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  showToast('¡Archivo respuestas_tp1.json generado con éxito!', 'success');
}

function handleImportJson(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const imported = JSON.parse(event.target.result);
      if (imported.answers) {
        state.answers = imported.answers;
        if (imported.student) state.student = imported.student;
        saveStateToStorage();
        renderAllExercises();
        updateProgress();
        showToast('Respuestas cargadas exitosamente desde el archivo JSON.', 'success');
      } else {
        showToast('El archivo JSON no tiene el formato esperado.', 'error');
      }
    } catch (err) {
      showToast('Error al parsear el archivo JSON importado.', 'error');
    }
  };
  reader.readAsText(file);
}

function showToast(msg, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
