/// <reference types="jasmine" />
import { TareaService } from './tarea.service';

describe('TareaService - HU-02: Crear Tarea', () => {
  let service: TareaService;

  beforeEach(() => {
    // Limpiamos el localStorage antes de cada prueba para no afectar otras
    localStorage.clear();
    service = new TareaService();
  });

  // --- 2 CASOS NORMALES ---
  it('1. Debe crear una tarea correctamente con una fecha futura', () => {
    const tarea = service.crearTarea('IS-06', 'Taller de redes', '2026-12-01', 'Media');
    expect(tarea.id).toBeDefined();
    expect(tarea.estado).toBe('Pendiente');
  });

  it('2. Debe persistir la tarea en el localStorage', () => {
    service.crearTarea('IS-06', 'Exposición', '2026-11-20', 'Alta');
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
    expect(tareasGuardadas.length).toBe(1);
    expect(tareasGuardadas[0].descripcion).toBe('Exposición');
  });

  // --- 2 CASOS LÍMITE ---
  it('3. Debe permitir crear una tarea con la fecha límite de hoy', () => {
    // Genera la fecha actual en formato YYYY-MM-DD
    const hoy = new Date().toISOString().split('T')[0]; 
    const tarea = service.crearTarea('IS-06', 'Lectura', hoy, 'Baja');
    expect(tarea.fechaEntrega).toBe(hoy);
  });

  it('4. Debe permitir una descripción de exactamente 1 carácter', () => {
    const tarea = service.crearTarea('IS-06', 'A', '2026-12-01', 'Alta');
    expect(tarea.descripcion).toBe('A');
  });

  // --- 1 CASO DE ERROR ---
  it('5. Debe lanzar un error si la fecha de entrega está en el pasado', () => {
    expect(() => {
      service.crearTarea('IS-06', 'Ensayo', '2025-01-01', 'Alta');
    }).toThrowError('La fecha de entrega no puede estar en el pasado');
  });
});