# Bitácora de uso de IA

**Entrada 1**
* **Fecha:** 07 de noviembre de 2026
* **Sugerencia o Prompt:** "Escribe la implementación de la clase TareaService para que pasen las 5 pruebas de creación de tareas."
* **Decisión:** Aceptada.
* **Razón:** El código generado implementó correctamente la validación de fechas comparando cadenas YYYY-MM-DD y persistió los datos en localStorage tal como exigía la prueba número 2.
* **Cómo la verificaste:** Verifiqué lógicamente que los `if` capturan las excepciones exactas de mis casos de error y que la estructura del objeto cumple con la firma del contrato.

**Entrada 2**
* **Fecha:** 07 de noviembre de 2026
* **Sugerencia o Prompt:** "Genera las pruebas de caso límite para la validación de la fecha de entrega de la tarea."
* **Decisión:** Ajustada.
* **Razón:** La IA propuso usar la librería externa `moment.js` para comparar las fechas. El diseño del proyecto exige mantenerlo simple con TypeScript nativo para no afectar el rendimiento de la SPA. Ajusté el código para usar `new Date().toISOString()`.
* **Cómo la verificaste:** Observé que la prueba de límite de fecha pasaba correctamente sin necesidad de instalar dependencias adicionales.

**Entrada 3**
* **Fecha:** 07 de noviembre de 2026
* **Sugerencia o Prompt:** "Agrega validación para que el asignaturaId exista antes de crear la tarea."
* **Decisión:** Rechazada.
* **Razón:** La IA sugirió inyectar un servicio extra (`AsignaturaService`) y hacer consultas adicionales. Esto rompe el alcance de la historia de usuario actual (HU-02) y la simplicidad de la prueba unitaria actual.
* **Cómo la verificaste:** Revisé el documento de diseño y decidí delegar esa integridad referencial a futuras historias de usuario, manteniendo la función aislada.

**Entrada 4**
* **Fecha:** 07 de noviembre de 2026
* **Sugerencia o Prompt:** "Sugiéreme cómo refactorizar el código de `crearTarea` para que quede más limpio y elimine valores mágicos."
* **Decisión:** Aceptada.
* **Razón:** Sugirió extraer la generación del ID aleatorio y la obtención del localStorage a métodos privados, y sacar la cadena 'Pendiente' a una constante, cumpliendo los criterios de clean code.
* **Cómo la verificaste:** Validé que las 5 pruebas automatizadas siguieran pasando (en verde) sin tener que modificar ninguna de ellas.

**Entrada 5**
* **Fecha:** 07 de noviembre de 2026
* **Sugerencia o Prompt:** "Crea el README con el contrato de la función para el proyecto."
* **Decisión:** Ajustada.
* **Razón:** La IA generó un archivo muy extenso que incluía instrucciones genéricas de instalación de Node y Angular. Lo recorté para dejar estrictamente la firma, los casos límite y los 3 ejemplos obligatorios.
* **Cómo la verificaste:** Validé visualmente contra la rúbrica del profesor que todos los ítems obligatorios del paso 1 estuvieran presentes.

## Reflexión Final
El uso del asistente de IA fue fundamental para agilizar la escritura del código repetitivo o *boilerplate*, especialmente al plantear la estructura de la suite de pruebas unitarias. Sin embargo, el error más evidente que atrapé fue que la IA intentó agregar dependencias innecesarias o sobrecomplicar la lógica de componentes, olvidando el principio de simplicidad que definimos en el ADR. Entendí que la IA tiende a desbordar el alcance de la funcionalidad, por lo que mi rol como desarrolladora es aplicar el contexto del proyecto y poner límites estrictos. En el futuro, diseñaría *prompts* mucho más precisos, indicándole desde el inicio qué herramientas o patrones arquitectónicos no debe usar bajo ninguna circunstancia.