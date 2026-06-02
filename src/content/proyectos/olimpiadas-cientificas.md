---
title: "Las desigualdades educativas que ocultan los medalleros de las Olimpiadas Científicas Plurinacionales"
description: "Construí, analicé y visualicé una base de datos propia de los medalleros de las Olimpiadas Científicas Plurinacionales y descubrí grandes desigualdades que nadie había sistematizado antes. El artículo se hizo viral."
category: "Visualización de datos"
date: "2023-08-01"
cover: "/thumbnail estudios de caso/2-olimpiadas cientificas.png"
tags: ["Análisis de datos", "Visualización", "Periodismo de datos", "Bolivia", "Python"]
readTime: 5
overview:
  cliente: "Proyecto propio"
  herramientas: "Python, Datawrapper, Canva"
  año: "2023"
  rol: "Data journalist"
---

## El contexto

Las Olimpiadas Científicas Plurinacionales son la competencia académica más importante de Bolivia: cada año, miles de estudiantes de todo el país compiten en materias como matemáticas, física, química, biología e informática. Los ganadores representan al país en olimpiadas internacionales.

A pesar de su importancia, nadie había analizado de forma sistemática quiénes ganan. ¿Qué departamentos concentran más medallas? ¿Hay diferencias entre colegios públicos y privados? ¿Qué materias dominan ciertos territorios? Esas preguntas no tenían respuesta pública disponible.

## El reto

El principal obstáculo fue la **ausencia de datos estructurados**. Los resultados de cada olimpiada estaban dispersos en PDFs, páginas web desactualizadas y resoluciones ministeriales. No existía ninguna base de datos consolidada. Había que construirla desde cero.

El reto secundario fue hacer el análisis accesible: los datos podían ser técnicamente interesantes para académicos, pero el objetivo era que cualquier persona —docente, estudiante, periodista— pudiera entender los hallazgos sin necesidad de saber estadística.

## El proceso

### Recopilación y limpieza de datos

Pasé varias semanas recopilando resultados de ediciones anteriores desde múltiples fuentes: sitios del Ministerio de Educación, publicaciones de colegios en redes sociales, artículos de prensa y PDFs de resoluciones. Limpié y estandaricé todo en Python, unificando nombres de colegios, departamentos y categorías de medallas.

La base de datos final incluyó más de 2.000 registros correspondientes a varias ediciones de la olimpiada, con información de colegio, tipo (público/privado), departamento, materia y tipo de medalla.

### Análisis

Con la base lista, corrí análisis de distribución por departamento, por tipo de colegio y por materia. Los resultados fueron contundentes:

> Santa Cruz y La Paz concentraban más del 60% de las medallas de oro, mientras que departamentos como Beni y Pando tenían una representación mínima, desproporcionadamente baja respecto a su participación.

Los colegios privados obtenían medallas de oro a una tasa muy superior a su proporción en el sistema educativo. En algunas materias, un solo colegio privado de Santa Cruz acumulaba más medallas que departamentos enteros.

### Visualización y publicación

Diseñé las visualizaciones priorizando claridad sobre complejidad: gráficos de barras comparativos, mapas de calor por departamento y tablas ordenadas. Usé Datawrapper para los gráficos interactivos y los integré en un artículo de largo aliento publicado en redes sociales.

## Los resultados

El artículo se compartió miles de veces en Facebook, Twitter y grupos de WhatsApp de docentes y estudiantes. En las primeras 48 horas generó una conversación nacional sobre inequidad educativa.

- **Alcance orgánico**: más de 80.000 personas alcanzadas en los primeros tres días
- **Cobertura de medios**: varios periódicos y portales reprodujeron el análisis y citaron los datos
- **Impacto en política**: el artículo fue citado en debates sobre la distribución de recursos para preparación olímpica

Fue uno de los primeros análisis de datos de largo aliento sobre el sistema educativo boliviano publicado de forma independiente y con metodología abierta.
