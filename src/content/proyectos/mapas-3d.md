---
title: "Mapas de densidad poblacional 3D"
description: "Visualizaciones tridimensionales de la densidad poblacional en los 9 departamentos de Bolivia, construidas con el paquete Rayshader de R. Un ejercicio de cartografía de datos que busca mostrar el territorio desde un ángulo distinto."
category: "Visualización de datos"
date: "2023-11-01"
cover: "/thumbnail estudios de caso/5-mapas 3d.png"
tags: ["R", "Rayshader", "Cartografía", "Visualización", "Bolivia"]
readTime: 4
overview:
  cliente: "Proyecto propio"
  herramientas: "R, Rayshader, QGIS"
  año: "2023"
  rol: "Data visualizer"
---

## El contexto

Bolivia es un país con una geografía extraordinariamente diversa: altiplano, valles, yungas, llanos y Amazonia, todo en un mismo territorio. Esa diversidad geográfica se refleja también en cómo se distribuye la población: hay zonas densísimas como el eje troncal (La Paz, Cochabamba, Santa Cruz) y vastas extensiones del oriente con menos de un habitante por kilómetro cuadrado.

Los mapas tradicionales de distribución poblacional —planos, con gradientes de color— cuentan parte de esa historia. Pero un mapa 3D, donde la altura representa la densidad, hace algo diferente: obliga al ojo a sentir las diferencias, no solo a verlas.

## El reto

El paquete Rayshader de R permite crear visualizaciones tridimensionales de datos geoespaciales con un nivel de detalle y calidad fotográfica sorprendente. El reto no era técnico en el sentido convencional —el código existe y está documentado— sino de **curaduría y criterio visual**: qué datos usar, cómo mapear la densidad a la altura, qué paleta de colores hacer justicia al territorio, desde qué ángulo iluminar y renderizar cada departamento.

Cada mapa tenía que funcionar como pieza visual independiente y también como parte de una serie coherente.

## El proceso

### Datos y preparación

Usé datos del Censo 2012 (el más reciente disponible con desagregación geográfica fina) combinados con shapefiles de los límites departamentales de Bolivia. En QGIS preparé los datos geoespaciales y calculé las densidades por unidad censal. Luego los exporté en formato compatible con R.

### Renderizado con Rayshader

Para cada departamento trabajé la configuración de:
- **Altura**: función de la densidad poblacional (escala logarítmica para que los picos no aplastaran el resto)
- **Color**: paleta diferenciada para cada departamento, respetando una lógica cromática consistente en toda la serie
- **Iluminación**: ángulo y temperatura de luz para que cada mapa tuviera profundidad sin perder legibilidad
- **Cámara**: ángulo de visión que mostrara tanto las zonas de alta densidad como el contexto geográfico

El renderizado de alta resolución de cada mapa tomaba entre 20 y 40 minutos en mi equipo.

> La parte más difícil no fue técnica sino de toma de decisiones: cuánta exageración vertical es suficiente para que el mapa sea expresivo sin mentir sobre los datos.

### Post-producción

Exporté cada render y agregué tipografía, escala de referencia y créditos en Illustrator, manteniendo la estética limpia para que la visualización fuera la protagonista.

## Los resultados

La serie fue publicada en redes sociales y tuvo una recepción inesperadamente amplia:

- Más de **15.000 compartidos** en Facebook e Instagram en los primeros días
- Fue replicada por cuentas de geografía y cartografía en varios países de América Latina
- El Instituto Nacional de Estadística de Bolivia compartió la serie en sus canales oficiales
- Recibí consultas de docentes que querían usarla como material pedagógico en clases de geografía

El proyecto me demostró que la visualización de datos hecha con cuidado puede volverse un objeto cultural: algo que la gente quiere guardar, compartir y explicar a otros, no solo una infografía informativa.
