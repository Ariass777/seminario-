export interface Tarea {
  id: string;
  asignaturaId: string;
  descripcion: string;
  fechaEntrega: string;
  prioridad: string;
  estado: string;
}

// REFACTOR: Se elimina el "valor mágico" guardándolo en una constante clara
const ESTADO_INICIAL = 'Pendiente'; 

export class TareaService {
  
  crearTarea(asignaturaId: string, descripcion: string, fechaEntrega: string, prioridad: string): Tarea {
    // 1. Validaciones
    if (!descripcion || descripcion.trim().length === 0) {
      throw new Error('La descripción no puede estar vacía');
    }

    const hoy = new Date().toISOString().split('T')[0];
    if (fechaEntrega < hoy) {
      throw new Error('La fecha de entrega no puede estar en el pasado');
    }

    // 2. Creación del objeto (REFACTOR: Uso de método privado generarId)
    const nuevaTarea: Tarea = {
      id: this.generarId(),
      asignaturaId,
      descripcion,
      fechaEntrega,
      prioridad,
      estado: ESTADO_INICIAL 
    };

    // 3. Guardado en LocalStorage (REFACTOR: Extracción a método)
    const tareasGuardadas = this.obtenerTareasLocales();
    tareasGuardadas.push(nuevaTarea);
    localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));

    return nuevaTarea;
  }

  // --- MÉTODOS PRIVADOS DEL REFACTOR ---
  
  private generarId(): string {
    return 't-' + Math.random().toString(36).substring(2, 9);
  }

  private obtenerTareasLocales(): Tarea[] {
    return JSON.parse(localStorage.getItem('tareas') || '[]');
  }
}