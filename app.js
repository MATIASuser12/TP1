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

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadStateFromStorage();
  syncStateToDOM();
  bindEvents();
  updateProgress();
});

// ==================== TEMA OSCURO / CLARO ====================

function initTheme() {
  const saved = localStorage.getItem('LAB1_THEME') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  document.documentElement.classList.toggle('dark', saved === 'dark');
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      document.documentElement.classList.toggle('dark', next === 'dark');
      localStorage.setItem('LAB1_THEME', next);
    });
  }
}

// ==================== EVENTOS Y ENLACES ====================

function bindEvents() {
  // 1. Datos del estudiante
  const studentFields = [
    { id: 'student-name', prop: 'name' },
    { id: 'student-dni', prop: 'dni' },
    { id: 'student-email', prop: 'email' },
    { id: 'student-comision', prop: 'comision' },
    { id: 'student-github', prop: 'github_user' }
  ];

  studentFields.forEach(({ id, prop }) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', (e) => {
      state.student[prop] = e.target.value.trim();
      saveStateToStorage();
      updateProgress();
    });
  });

  // 2. Selectores de ejercicios (ej1 a ej9)
  document.querySelectorAll('select[data-ex]').forEach(select => {
    select.addEventListener('change', (e) => {
      const ex = e.target.getAttribute('data-ex');
      const key = e.target.getAttribute('data-key');
      const val = e.target.value;

      if (!state.answers[ex]) state.answers[ex] = {};
      state.answers[ex][key] = val;

      saveStateToStorage();
      updateProgress();
    });
  });

  // 3. Radio cards para Ejercicio 10
  document.querySelectorAll('.radio-card').forEach(card => {
    card.addEventListener('click', () => {
      const val = card.getAttribute('data-val');
      document.querySelectorAll('.radio-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      state.answers.ej10_limites_y_heuristicas = val;
      saveStateToStorage();
      updateProgress();
    });
  });

  // 4. Botones de Exportación
  const btnExportTop = document.getElementById('btn-export-json');
  if (btnExportTop) btnExportTop.addEventListener('click', exportAnswersJson);
  const btnExportBottom = document.getElementById('btn-export-bottom');
  if (btnExportBottom) btnExportBottom.addEventListener('click', exportAnswersJson);

  // 5. Previsualización y Copiado
  const btnTogglePreview = document.getElementById('btn-toggle-preview');
  if (btnTogglePreview) {
    btnTogglePreview.addEventListener('click', () => {
      const container = document.getElementById('json-preview-container');
      if (!container) return;
      const isOpen = container.style.display !== 'none';
      container.style.display = isOpen ? 'none' : 'block';
      btnTogglePreview.textContent = isOpen ? '👁️ Previsualizar JSON en Pantalla' : '🙈 Ocultar Previsualización';
      if (!isOpen) refreshJsonPreview();
    });
  }

  const btnCopyJson = document.getElementById('btn-copy-json');
  if (btnCopyJson) {
    btnCopyJson.addEventListener('click', () => {
      const payloadStr = JSON.stringify(getPayload(), null, 2);
      navigator.clipboard.writeText(payloadStr).then(() => {
        showToast('📋 ¡Contenido JSON copiado al portapapeles!', 'success');
      }).catch(() => {
        showToast('No se pudo copiar automáticamente. Por favor selecciónalo manualmente.', 'warning');
      });
    });
  }

  // 6. Botón Importar
  const importInput = document.getElementById('file-import-input');
  if (importInput) {
    const btnImport = document.getElementById('btn-import-json');
    if (btnImport) btnImport.addEventListener('click', () => importInput.click());
    importInput.addEventListener('change', handleImportJson);
  }

  // 7. Modales
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

// ==================== SINCRONIZACIÓN DOM <-> ESTADO ====================

function syncStateToDOM() {
  // Datos del estudiante
  if (state.student.name && document.getElementById('student-name')) {
    document.getElementById('student-name').value = state.student.name;
  }
  if (state.student.dni && document.getElementById('student-dni')) {
    document.getElementById('student-dni').value = state.student.dni;
  }
  if (state.student.email && document.getElementById('student-email')) {
    document.getElementById('student-email').value = state.student.email;
  }
  if (state.student.comision && document.getElementById('student-comision')) {
    document.getElementById('student-comision').value = state.student.comision;
  }
  if (state.student.github_user && document.getElementById('student-github')) {
    document.getElementById('student-github').value = state.student.github_user;
  }

  // Selects
  document.querySelectorAll('select[data-ex]').forEach(select => {
    const ex = select.getAttribute('data-ex');
    const key = select.getAttribute('data-key');
    if (state.answers[ex] && state.answers[ex][key]) {
      select.value = state.answers[ex][key];
    }
  });

  // Radio Cards Ej 10
  if (state.answers.ej10_limites_y_heuristicas) {
    const targetVal = state.answers.ej10_limites_y_heuristicas;
    document.querySelectorAll('.radio-card').forEach(card => {
      if (card.getAttribute('data-val') === targetVal) {
        card.classList.add('active');
        const r = card.querySelector('input[type="radio"]');
        if (r) r.checked = true;
      } else {
        card.classList.remove('active');
      }
    });
  }
}

// ==================== CÁLCULO DE PROGRESO ====================

function updateProgress() {
  let completedExercises = 0;
  const totalExercises = 10;

  // Ej 1
  const ej1Keys = ['inteligencia', 'ia', 'agente', 'entorno', 'racionalidad'];
  if (ej1Keys.every(k => state.answers.ej1_terminos_fundamentales && state.answers.ej1_terminos_fundamentales[k])) completedExercises++;

  // Ej 2
  const ej2Keys = ['pensar_humano', 'actuar_humano', 'pensar_racional', 'actuar_racional', 'paradigma_central'];
  if (ej2Keys.every(k => state.answers.ej2_dimensiones_russell_norvig && state.answers.ej2_dimensiones_russell_norvig[k])) completedExercises++;

  // Ej 3
  const ej3Keys = ['paso1_mundo', 'paso2_captura', 'paso3_dato', 'paso4_decision', 'paso5_comando', 'paso6_ejecucion', 'distincion_matematica', 'distincion_implementacion'];
  if (ej3Keys.every(k => state.answers.ej3_ciclo_agente_arquitectura && state.answers.ej3_ciclo_agente_arquitectura[k])) completedExercises++;

  // Ej 4
  const ej4Keys = ['auto_p', 'auto_e', 'auto_a', 'auto_s', 'med_p', 'med_e', 'med_a', 'med_s'];
  if (ej4Keys.every(k => state.answers.ej4_especificacion_peas && state.answers.ej4_especificacion_peas[k])) completedExercises++;

  // Ej 5
  const ej5Keys = ['sit_sin_intervencion', 'sit_detectar_freno', 'sit_iniciativa_objetivos', 'sit_comunicacion_agentes', 'sit_adaptacion_entorno'];
  if (ej5Keys.every(k => state.answers.ej5_propiedades_agentes && state.answers.ej5_propiedades_agentes[k])) completedExercises++;

  // Ej 6
  const ej6Keys = ['caso_a_sucio', 'caso_a_limpio', 'caso_b_sucio', 'caso_b_limpio', 'propiedad_memoria'];
  if (ej6Keys.every(k => state.answers.ej6_agente_reactivo_simple && state.answers.ej6_agente_reactivo_simple[k])) completedExercises++;

  // Ej 7
  const ej7Keys = ['disp_nlp', 'disp_kr', 'disp_ar', 'disp_ml', 'disp_cv', 'disp_rob'];
  if (ej7Keys.every(k => state.answers.ej7_test_turing_disciplinas && state.answers.ej7_test_turing_disciplinas[k])) completedExercises++;

  // Ej 8
  const ej8Keys = ['tarea_diagnostico_imagen', 'tarea_traduccion_contextual', 'tarea_conduccion_urbana_no_delimitada', 'tarea_teoremas_complejos'];
  if (ej8Keys.every(k => state.answers.ej8_estado_del_arte && state.answers.ej8_estado_del_arte[k])) completedExercises++;

  // Ej 9
  const ej9Keys = ['map_operario', 'map_libro_reglas', 'map_cestas_simbolos', 'map_ranuras_papel', 'conclusion_searle'];
  if (ej9Keys.every(k => state.answers.ej9_habitacion_china_searle && state.answers.ej9_habitacion_china_searle[k])) completedExercises++;

  // Ej 10
  if (state.answers.ej10_limites_y_heuristicas) completedExercises++;

  const pct = Math.round((completedExercises / totalExercises) * 100);
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-percentage');
  const bottomBadge = document.getElementById('bottom-status-badge');

  if (progressBar) progressBar.style.width = `${pct}%`;
  if (progressText) progressText.textContent = `${pct}% (${completedExercises}/${totalExercises} completados)`;
  if (bottomBadge) {
    bottomBadge.textContent = `${completedExercises} / ${totalExercises} Ejercicios`;
    if (completedExercises === totalExercises) {
      bottomBadge.className = 'badge-tag emerald';
      bottomBadge.textContent = '100% Listo para Entregar';
    } else {
      bottomBadge.className = 'badge-tag cyan';
    }
  }

  refreshJsonPreview();
}

function getPayload() {
  return {
    tp_id: 'LAB1-2026-TP1',
    student: {
      name: (state.student.name || '').trim(),
      dni: (state.student.dni || '').trim(),
      email: (state.student.email || '').trim(),
      comision: (state.student.comision || '').trim(),
      github_user: (state.student.github_user || '').trim()
    },
    exported_at: new Date().toISOString(),
    answers: state.answers
  };
}

function refreshJsonPreview() {
  const codeEl = document.getElementById('json-preview-code');
  if (codeEl) {
    codeEl.textContent = JSON.stringify(getPayload(), null, 2);
  }
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

// ==================== EXPORTACIÓN / DESCARGA ====================

function exportAnswersJson() {
  if (!state.student.name || !state.student.dni) {
    showToast('⚠️ Por favor completa Nombre y DNI en "Datos del Estudiante" antes de exportar.', 'warning');
    const nameInput = document.getElementById('student-name');
    if (nameInput) {
      nameInput.focus();
      nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  saveStateToStorage();
  const payload = getPayload();
  const jsonStr = JSON.stringify(payload, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const downloadAnchor = document.createElement('a');
  downloadAnchor.href = url;
  downloadAnchor.download = 'respuestas_tp1.json';
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);
  URL.revokeObjectURL(url);

  showToast('✅ ¡Archivo respuestas_tp1.json generado y descargado con éxito!', 'success');
  refreshJsonPreview();
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
        syncStateToDOM();
        updateProgress();
        showToast('📥 Respuestas restauradas exitosamente desde el archivo JSON.', 'success');
      } else {
        showToast('❌ El archivo JSON no tiene el formato esperado.', 'error');
      }
    } catch (err) {
      showToast('❌ Error al parsear el archivo JSON importado.', 'error');
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
