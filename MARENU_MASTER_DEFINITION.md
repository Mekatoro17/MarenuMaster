# MARENÚ ? Definición maestra

## Marca
- Marca colombiana de origen: **ORIGEN CHINÚ · CÓRDOBA · COLOMBIA**.
- Lema: **De Chinú para el mundo.** Principio: *No inventamos el origen. Lo hacemos visible.*
- Propósito: visibilizar el talento, los oficios y la tradición de Chinú, llevando sus productos a nuevos mercados y conectando a quienes los crean con nuevos clientes.
- No es un marketplace genérico.
- Estética oficial: **Artesanía contemporánea** (elegante, editorial, moderna, cálida, minimalista, fotografía protagonista).
- Paleta: marfil `#F6E9DB`, terracota `#B65A3C`, cuero `#6B4A2E`, verde `#2E4A3B`, carbón `#1F1F1F`.
- Tipografía: serif editorial para títulos, sans limpia para texto.
- Logotipo, tilde terracota de la Ú, símbolo entrelazado, descriptor y sello son oficiales: **usar siempre los archivos de `marenu-web/public/brand/`; no inventar ni rediseñar**.

## Negocio
- Inicia con sandalias para mujer elaboradas en Chinú; luego otro calzado, accesorios y productos de origen.
- Productos seleccionados por origen, calidad, diseño, comodidad, autenticidad y viabilidad comercial.
- Productores de Chinú; control de calidad.
- Inventario híbrido.
- Canales: web y WhatsApp.
- Precio basado en costos reales y valor del producto.

## Arquitectura
- Web: Next.js (App Router) + React + TypeScript (`marenu-web`).
- Core (futuro): Java + Spring Boot (`marenu-core`). Un único Core, monolito modular.
- Base de datos futura: PostgreSQL. Comunicación: REST.
- La web no accede directamente a la base de datos.
- Módulos del Core inicial: Productos, Productores, Inventario, Clientes, Pedidos, Ventas, Compras, Pagos, Envíos. Control de calidad y postventa como capacidades operativas, sin menú propio obligatorio.
- Indicadores y administración avanzada: después.

## Roles
ADMIN, OPERADOR, COMERCIAL.

## Infraestructura
- Presupuesto inicial: $0; priorizar planes gratuitos; no contratar servicios de pago anticipadamente.
- Sanity y Cloudinary aprobados para integración posterior, sujetos a sus límites.

## Desarrollo
- Simplicidad, mantenibilidad, seguridad, reutilización, código limpio.
- Evitar dependencias innecesarias.
- Sin microservicios, Kubernetes, Kafka, Redis inicial ni arquitectura distribuida.
- Sin imágenes, testimonios ni certificaciones inventadas.
