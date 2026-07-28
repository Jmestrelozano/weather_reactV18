# components — Atomic Design

La UI sigue **Atomic Design**. No se usan barrels (`index.ts`); importa el archivo del componente directamente.

| Nivel     | Carpeta      | Responsabilidad                     |
| --------- | ------------ | ----------------------------------- |
| Atoms     | `atoms/`     | Piezas UI mínimas, sin Redux        |
| Molecules | `molecules/` | Combinaciones de átomos             |
| Organisms | `organisms/` | Secciones (pueden usar store/hooks) |
| Templates | `templates/` | Layout / slots de página            |

Documentación:

- [Qué es Atomic Design](../../docs/architecture/atomic-design.md)
- [Cómo se usa en este repo](../../docs/architecture/atomic-design-en-el-proyecto.md)
