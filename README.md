## Funcionalidad de la semana 5

**Historia de Usuario (HU-02):** Como estudiante, quiero crear una tarea asociada a una asignatura con su fecha de entrega y prioridad, para saber qué actividades tengo pendientes.
**Criterio de Aceptación:** El sistema debe registrar la tarea en el almacenamiento local con estado "Pendiente". No debe permitir fechas de entrega en el pasado ni descripciones vacías.

### Contrato de la función
* **Firma:** `crearTarea(asignaturaId: string, descripcion: string, fechaEntrega: string, prioridad: string): Tarea`
* **Entradas:** 
  * `asignaturaId` (string no vacío)
  * `descripcion` (string, mínimo 1 carácter)
  * `fechaEntrega` (string en formato YYYY-MM-DD)
  * `prioridad` (string: 'Alta', 'Media', 'Baja')
* **Salida:** Objeto `Tarea` con un ID generado automáticamente, estado en "Pendiente", y guardado exitosamente en `localStorage`.
* **Supuestos:** El navegador soporta `localStorage`.
* **Casos Límite:** 
  1. Fecha de entrega igual a la fecha de hoy (justo en el límite del tiempo).
  2. Descripción de la tarea de exactamente 1 carácter.

### Ejemplos de entrada y salida
1. **Normal:** `crearTarea("IS-06", "Exposición C4", "2026-11-20", "Alta")` 
   * *Salida:* Retorna `{ id: "t-123", asignaturaId: "IS-06", descripcion: "Exposición C4", fechaEntrega: "2026-11-20", prioridad: "Alta", estado: "Pendiente" }`
2. **Error (Fecha inválida):** `crearTarea("IS-06", "Taller", "2020-01-01", "Media")`
   * *Salida:* Lanza la excepción `Error("La fecha de entrega no puede estar en el pasado")`
3. **Error (Texto vacío):** `crearTarea("IS-06", "", "2026-11-20", "Baja")`
   * *Salida:* Lanza la excepción `Error("La descripción no puede estar vacía")`

### Cómo ejecutar las pruebas
Ejecutar el comando en la terminal: `ng test` (usando el framework Jasmine/Karma integrado en Angular).