# Propuesta cromática — Daniela Pérez Borges

La página no se ha modificado ni publicado. Esta propuesta requiere tu aprobación explícita antes de aplicarse.

## Alcance

Cambiar exclusivamente colores. Conservar textos, contactos, enlaces, imágenes, estructura, distribución, dimensiones, tipografías, transparencias, sombras, animaciones y funcionamiento. Mantener cada degradado, sus capas, dirección, posiciones, extensión y porcentajes de transición. Las sombras conservarán geometría y opacidad; solo cambiará su color cuando se indica abajo.

## Colores originales y sustituciones propuestas

| Color actual verificado | Color propuesto | Elementos afectados |
|---|---|---|
| `#2A4941` | `#142A43` | Variable `--anil`: fondos institucionales, enlaces de proyectos y artículos, cenefas; capas verdes de fondos y estados al pasar el cursor |
| `#1E352F` | `#262626` | `--anil-profundo`: extremo oscuro de portada/contacto, pie, navegación translúcida y sus sombras |
| `#F5F1E8` | Conservar `#F5F1E8` | `--cal`: marfil, texto sobre fondos oscuros, vidrio y bordes claros |
| `#262626` | Conservar `#262626` | `--tinta`: texto principal y separadores fuertes |
| `#FF2D8F` | Conservar `#FF2D8F` | `--rosa`: acentos, subrayados, bordes decorativos y sombras rosas |
| `#1C1C1C` | `#262626` | `--sobre-rosa`: selección de texto; los botones tendrán una excepción de contraste indicada abajo |
| `#ECE6D9` | `#DBE3EE` | `--cal-sombra`: secciones alternas y aviso existente |
| `#5E5851` | `#262626` | `--piedra`: fechas, descripciones y textos secundarios; se evita el gris autorizado por contraste insuficiente |
| `#FF5CA8` | `#FF2D8F` | `--rosa-suave`: subrayado de navegación, extremo del nombre, capas rosas y acento de correo; excepción para degradados de botones |
| `#FAF7F0` | `#F5F1E8` | Inicio del degradado general |
| `#EFE9DB` | `#F4EFE6` | Final del degradado general |
| `#E7E0D2` | `#F4EFE6` | Final del degradado de secciones alternas |
| `#2FE173` | `#FFD84D` | Punto de identificación del teléfono; el botón de WhatsApp tiene propuesta independiente |
| `#FF7A45` | `#FF2D8F` | Punto de Instagram |
| `#5AA9FF` | `#DBE3EE` | Punto de LinkedIn |
| `#FFFFFF` / `#FFF` | Conservar `#FFFFFF` | Texto de WhatsApp y blanco de respaldo |
| `#000000` / `#000` | `#262626` | Negro de respaldo y color de sombras negras, sin cambiar su profundidad ni opacidad |
| `#25D366` (RGB 37,211,102) | `#142A43` | Color de sombra del botón WhatsApp, conservando sus opacidades 0.55 y 0.75 |

`#8B857D` se propone solo para las líneas finas actualmente basadas en `rgba(38,38,38,0.2)`: nuevo `rgba(139,133,125,0.2)`. No se utilizará como texto pequeño ni como indicador esencial. `--linea-clara` conservará marfil y opacidad 0.3.

Las demás versiones RGBA seguirán estas sustituciones de color base, conservando todas sus opacidades: verde RGB(42,73,65) → azul RGB(20,42,67); verde oscuro RGB(30,53,47) → negro cálido RGB(38,38,38); rosa suave RGB(255,92,168) → rosa RGB(255,45,143). Marfil y rosa vibrante actuales se conservan.

## Degradados: valores antes y después

Cada fila representa una capa existente. «Transparente» mantiene el extremo y su porcentaje actuales; las opacidades entre paréntesis también permanecen intactas.

| Ubicación / dirección | Antes | Después propuesto |
|---|---|---|
| Fondo general, radial 1400×800 en 88% −12% | `#FF2D8F` (0.14) → transparente 62% | Sin cambio |
| Fondo general, radial 1100×700 en −12% 28% | `#2A4941` (0.14) → transparente 58% | `#142A43` (0.14) → transparente 58% |
| Fondo general, radial 900×600 en 100% 92% | `#FF5CA8` (0.10) → transparente 60% | `#FF2D8F` (0.10) → transparente 60% |
| Fondo general, lineal 180° | `#FAF7F0` 0% → `#F5F1E8` 45% → `#EFE9DB` 100% | `#F5F1E8` 0% → `#F5F1E8` 45% → `#F4EFE6` 100% |
| Portada, radial 1000×620 en 88% 8% | `#FF2D8F` (0.22) → transparente 58% | Sin cambio |
| Portada, radial 800×600 en −8% 90% | `#F5F1E8` (0.08) → transparente 55% | Sin cambio |
| Portada y contacto, lineal 160° | `#2A4941` 0% → `#1E352F` 100% | `#142A43` 0% → `#262626` 100% |
| Nombre, lineal 115° | `#F5F1E8` 55% → `#FF5CA8` (0.9) 130% | `#F5F1E8` 55% → `#FF2D8F` (0.9) 130% |
| Botón principal, lineal 120° | `#FF2D8F` 0% → `#FF5CA8` 100% | `#142A43` 0% → `#262626` 100%; texto `#FFFFFF` |
| Botón principal al pasar el cursor, lineal 120° | `#FF5CA8` 0% → `#FF2D8F` 100% | `#262626` 0% → `#142A43` 100%; texto `#FFFFFF` |
| Secciones alternas, radial 900×520 en 100% 0% | `#FF2D8F` (0.12) → transparente 62% | Sin cambio |
| Secciones alternas, radial 800×480 en 0% 100% | `#2A4941` (0.10) → transparente 58% | `#142A43` (0.10) → transparente 58% |
| Secciones alternas, lineal 180° | `#ECE6D9` 0% → `#E7E0D2` 100% | `#DBE3EE` 0% → `#F4EFE6` 100% |
| Contacto, radial 900×520 en 90% 100% | `#FF2D8F` (0.28) → transparente 62% | Sin cambio |
| Contacto, radial 700×420 en 4% 4% | `#FF5CA8` (0.14) → transparente 58% | `#FF2D8F` (0.14) → transparente 58% |
| Pie, radial 700×380 en 88% 0% | `#FF2D8F` (0.14) → transparente 60% | Sin cambio; fondo base `#1E352F` → `#262626` |
| WhatsApp, lineal 120° | `#2FE173` 0% → `#128C7E` 100% | `#142A43` 0% → `#262626` 100%; conservar texto `#FFFFFF` |

**Decisión de contraste que requiere aprobación:** los botones con texto pequeño pasarían a degradado azul/negro cálido con texto blanco. El rosa seguirá en acentos y sombras existentes. La paleta no ofrece un color de texto que alcance 4.5:1 sobre rosa puro: negro cálido obtiene 4.34:1, azul profundo 4.18:1 y blanco 3.49:1. No se propone cambiar tamaños, pesos ni formas para resolverlo.

## Contraste calculado

Se calculó la luminancia relativa sRGB de estos colores sólidos:

| Combinación | Relación | Consecuencia |
|---|---:|---|
| Rosa `#FF2D8F` sobre marfil `#F5F1E8` | 3.09:1 | No usar para texto pequeño |
| Rosa `#FF2D8F` sobre blanco | 3.49:1 | No usar para texto pequeño |
| Amarillo `#FFD84D` sobre blanco | 1.38:1 | Solo pequeños acentos sobre fondo oscuro |
| Gris `#8B857D` sobre marfil `#F5F1E8` / `#F4EFE6` | 3.24:1 / 3.19:1 | Usar negro cálido para textos secundarios |
| Negro cálido sobre azul claro | 11.70:1 | Adecuado como combinación sólida para texto |
| Negro cálido sobre marfil `#F4EFE6` | 13.21:1 | Adecuado como combinación sólida para texto |
| Marfil `#F5F1E8` sobre azul profundo | 12.92:1 | Buen contraste como combinación sólida |
| Amarillo sobre azul profundo | 10.53:1 | Adecuado para el punto del teléfono |

Estos cálculos no certifican cumplimiento global de WCAG. Falta comprobar el resultado real con capas, vidrio, opacidades del texto, fotografías y estados interactivos. La selección de texto rosa/negro cálido también queda en 4.34:1; se propone sustituir solo su fondo por `#DBE3EE` y conservar texto `#262626` (11.70:1).

## Archivos y variables de estilo

Solo se modificaría **`public/daniela.html`**, en sus bloques de estilos existentes: `--anil`, `--anil-profundo`, `--cal-sombra`, `--piedra`, `--sobre-rosa`, `--rosa-suave`, `--linea`, colores de `--sombra-suave` y valores literales de colores; además, excepciones de texto/fondo para botones y selección. Se conservarían los valores autorizados de `--cal`, `--tinta`, `--rosa`, `--vidrio`, `--vidrio-borde`, `--linea-clara` y `--sombra-rosa`.

No se modificarían `src/styles.css`, las páginas contenedoras, imágenes ni ningún otro archivo de la aplicación. Los colores de la fotografía incrustada quedan fuera del alcance.

## Verificación después de aprobar

- Comparar el archivo anterior y posterior para confirmar que únicamente cambian valores de color.
- Revisar lectura en móvil y computadora, incluyendo portada, secciones claras, contacto, artículos y estados existentes.
- Verificar navegación, enlaces y destino WhatsApp `https://wa.me/528115313235?text=Hola`, sin enviar mensajes.
- Conservar e informar la descarga de semblanza pendiente si el documento continúa ausente.
- Entregar el inventario final y señalar cualquier contraste o comportamiento no verificable.
- No publicar sin autorización adicional.