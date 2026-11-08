export interface Tarea {
  id: string;
  asignaturaId: string;
  descripcion: string;
  fechaEntrega: string;
  prioridad: string;
  estado: string;
}

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

    // 2. Creación del objeto
    const nuevaTarea: Tarea = {
      id: 't-' + Math.random().toString(36).substring(2, 9),
      asignaturaId,
      descripcion,
      fechaEntrega,
      prioridad,
      estado: 'Pendiente'
    };

    // 3. Guardado en LocalStorage
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
    tareasGuardadas.push(nuevaTarea);
    localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));

    return nuevaTarea;
  }
}