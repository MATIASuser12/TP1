#!/usr/bin/env python3
"""
=============================================================================
EVALUADOR AUTOMÁTICO DE TRABAJOS PRÁCTICOS - CÁTEDRA LABORATORIO I
Tecnicatura Universitaria en Automatización y Robótica / Informática
Ciclo Lectivo 2026 | JTP: Ing. Fabio D. Argañaraz
=============================================================================
Uso:
    python autograder_tp1.py [respuestas_tp1.json]
    python autograder_tp1.py respuestas_tp1.json --json
=============================================================================
"""

import sys
import os
import json
import hashlib
import argparse
from datetime import datetime

# Asegurar compatibilidad UTF-8 en consolas Windows
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

RUBRIC_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "rubric_tp1.json")
CATEDRA_SALT = "LAB1_IA_2026_CatedraArganaraz_SecretSalt"

def compute_hash(ex_id, item_key, val):
    clean_val = str(val).strip().lower() if val is not None else ""
    raw = f"{ex_id}:{item_key}:{clean_val}:{CATEDRA_SALT}"
    return hashlib.sha256(raw.encode('utf-8')).hexdigest()

def load_json(filepath):
    if not os.path.exists(filepath):
        print(f"[ERROR] No se encontró el archivo: {filepath}", file=sys.stderr)
        sys.exit(1)
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"[ERROR] Error al leer JSON '{filepath}': {e}", file=sys.stderr)
        sys.exit(1)

def grade_submission(submission, rubric):
    student = submission.get("student", {})
    answers = submission.get("answers", {})
    exercises_rubric = rubric.get("exercises", {})
    
    total_score = 0
    max_total_score = rubric.get("max_score", 100)
    exercise_results = {}

    for ex_id, ex_spec in exercises_rubric.items():
        weight = ex_spec.get("weight", 10)
        feedback = ex_spec.get("feedback", "")
        student_ans = answers.get(ex_id)

        ex_score = 0
        details = []

        # Formato Seguro (Hash simple SHA-256)
        if "hash" in ex_spec:
            expected_hash = ex_spec["hash"]
            student_hash = compute_hash(ex_id, "root", student_ans)
            is_correct = (student_hash == expected_hash)
            if is_correct:
                ex_score = weight
            details.append({
                "item": "Respuesta seleccionada",
                "submitted": student_ans,
                "is_correct": is_correct
            })

        # Formato Seguro (Diccionario de Hashes SHA-256)
        elif "hashes" in ex_spec:
            expected_hashes = ex_spec["hashes"]
            total_items = len(expected_hashes)
            correct_items_count = 0

            for item_key, exp_hash in expected_hashes.items():
                actual_val = student_ans.get(item_key) if isinstance(student_ans, dict) else None
                actual_hash = compute_hash(ex_id, item_key, actual_val)
                is_correct = (actual_hash == exp_hash)
                if is_correct:
                    correct_items_count += 1
                details.append({
                    "item": item_key,
                    "submitted": actual_val,
                    "is_correct": is_correct
                })

            if total_items > 0:
                fraction = correct_items_count / total_items
                ex_score = round(fraction * weight, 2)

        # Fallback para rúbrica master en texto plano
        elif "correct" in ex_spec:
            correct_ans = ex_spec["correct"]
            if isinstance(correct_ans, (str, bool)):
                is_correct = (student_ans == correct_ans)
                if is_correct:
                    ex_score = weight
                details.append({
                    "item": "Respuesta seleccionada",
                    "submitted": student_ans,
                    "is_correct": is_correct
                })
            elif isinstance(correct_ans, dict):
                total_items = len(correct_ans)
                correct_items_count = 0
                for item_key, exp_val in correct_ans.items():
                    actual_val = student_ans.get(item_key) if isinstance(student_ans, dict) else None
                    is_correct = (actual_val == exp_val)
                    if is_correct:
                        correct_items_count += 1
                    details.append({
                        "item": item_key,
                        "submitted": actual_val,
                        "is_correct": is_correct
                    })
                if total_items > 0:
                    fraction = correct_items_count / total_items
                    ex_score = round(fraction * weight, 2)

        total_score += ex_score
        exercise_results[ex_id] = {
            "score": ex_score,
            "max_score": weight,
            "percentage": round((ex_score / weight) * 100, 1) if weight > 0 else 0,
            "details": details,
            "feedback": feedback
        }

    final_score_100 = round(total_score, 2)
    final_grade_10 = round((final_score_100 / max_total_score) * 10, 1) if max_total_score > 0 else 0

    return {
        "student": student,
        "metadata": rubric.get("tp_metadata", {}),
        "timestamp": datetime.now().isoformat(),
        "final_score": final_score_100,
        "max_score": max_total_score,
        "final_grade_10": final_grade_10,
        "passed": final_score_100 >= 60.0,
        "exercises": exercise_results
    }

def print_cli_report(result):
    student = result["student"]
    meta = result["metadata"]
    print("\n" + "=" * 78)
    print(f"  {meta.get('title', 'TRABAJO PRÁCTICO N° 1')}")
    print(f"  Cátedra: {meta.get('catedra', 'Laboratorio I')}")
    print("=" * 78)
    print(f" Estudiante : {student.get('name', 'N/A')} (DNI: {student.get('dni', 'N/A')})")
    print(f" Email      : {student.get('email', 'N/A')} | Comisión: {student.get('comision', 'N/A')}")
    print(f" Fecha Eval : {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("-" * 78)
    print(" RESUMEN DE EJERCICIOS")
    print("-" * 78)

    for ex_id, data in result["exercises"].items():
        sc = data["score"]
        mx = data["max_score"]
        pct = data["percentage"]
        icon = "[✓]" if pct == 100 else ("[~]" if pct > 0 else "[✗]")
        bar_len = int(pct / 10)
        bar = "■" * bar_len + "·" * (10 - bar_len)
        print(f" {icon} {ex_id:<32} {sc:>5.1f} / {mx:>4.1f} pts  [{bar}] {pct:>5.1f}%")

        # Imprimir ítems con discrepancia (sin revelar la respuesta esperada)
        failed_items = [d for d in data["details"] if not d["is_correct"]]
        if failed_items:
            for item in failed_items:
                print(f"     ↳ Discrepancia en: '{item['item']}'")
            if data.get("feedback"):
                print(f"     📖 Dónde estudiar: {data['feedback']}")

    print("-" * 78)
    print(f" PUNTAJE TOTAL : {result['final_score']} / {result['max_score']} pts")
    print(f" CALIFICACIÓN  : {result['final_grade_10']} / 10.0")
    estado = "APROBADO [✓]" if result["passed"] else "NO APROBADO [✗] (Se requiere mínimo 60 pts / 6.0)"
    print(f" ESTADO        : {estado}")
    print("=" * 78 + "\n")

def main():
    parser = argparse.ArgumentParser(description="Autograder TP1 - Laboratorio I 2026")
    parser.add_argument("submission", nargs="?", default="respuestas_tp1.json",
                        help="Ruta al archivo respuestas_tp1.json generado por la app web")
    parser.add_argument("--rubric", default=RUBRIC_FILE, help="Ruta al archivo rubric_tp1.json")
    parser.add_argument("--json", action="store_true", help="Salida en formato JSON para integración continua")
    args = parser.parse_args()

    sub = load_json(args.submission)
    rub = load_json(args.rubric)

    result = grade_submission(sub, rub)

    if args.json:
        print(json.dumps(result, indent=2, ensure_ascii=False))
    else:
        print_cli_report(result)

    sys.exit(0 if result["passed"] else 1)

if __name__ == "__main__":
    main()
