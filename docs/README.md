# Documentación — Weather Zone

## API

- [OpenWeatherMap: origen y uso](./api/openweathermap.md)

## Arquitectura (Atomic Design)

La UI sigue **Atomic Design**. No se usan barrels (`index.ts`); importa el archivo del componente directamente.

| Nivel     | Carpeta      | Responsabilidad                     |
| --------- | ------------ | ----------------------------------- |
| Atoms     | `atoms/`     | Piezas UI mínimas, sin Redux        |
| Molecules | `molecules/` | Combinaciones de átomos             |
| Organisms | `organisms/` | Secciones (pueden usar store/hooks) |
| Templates | `templates/` | Layout / slots de página            |

Documentación:

- [Qué es Atomic Design](./architecture/atomic-design.md)
- [Cómo se usa en este repo](./architecture/atomic-design-en-el-proyecto.md)
