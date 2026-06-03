---
title: Las desigualdades educativas que ocultan los medalleros de las Olimpiadas Científicas Plurinacionales
description: Construí, analicé y visualicé una base de datos propia de los medalleros de las Olimpiadas Científicas Plurinacionales de Bolivia. Encontré patrones de desigualdades educativas que hasta el momento no se habían sistematizado de manera pública. El análisis alcanzó a miles de personas y abrió una conversación nacional sobre la calidad educativa en el país.
category: Periodismo de datos
date: "2023-04-01"
cover: /thumbnail estudios de caso/2-olimpiadas cientificas.png
tags:
  - Análisis de datos
  - Visualización
  - Periodismo de datos
  - Bolivia
readTime: 5
overview:
  cliente: Proyecto propio
  herramientas: R, Scrollama JS, Affinity Designer, Flourish
  año: "2023"
  rol: Data journalist
---
## 💭 Dudas de una ex-olimpista

Las Olimpiadas Científicas Plurinacionales son una competencia boliviana de conocimientos en ciencia y tecnología, en la que participan miles de estudiantes de primero a sexto de secundaria desde 2011.

Cada año, el Ministerio de Educación premia a los estudiantes que logran superar las distintas etapas hasta llegar a la fase nacional. Pero, ¿qué pasa con quienes quedan fuera antes de esa instancia? ¿De dónde vienen? ¿En qué colegios estudian?

¿Quiénes eran realmente premiados en las Olimpiadas Científicas?

Como ex-olimpista descalificada, estas preguntas me rondaron la cabeza durante mucho tiempo. Y, a pesar de la importancia de la competencia, no encontré información pública ni informes gubernamentales que ayudaran a responderlas.

## 📑 ¿Cómo construí la base de datos?
### La búsqueda de información
Así, decidí construir una base de datos propia con información sobre los ganadores de la fase nacional. El problema era que la información pública estaba muy dispersa y, en algunos casos, se había perdido por la caída de sitios web del Ministerio de Educación.

Usé distintas fuentes y técnicas para reunir la información necesaria y construir una base de datos que cubriera la mayor cantidad posible de ediciones de las Olimpiadas, desde su primera versión hasta ese momento. Durante varias semanas realicé búsquedas avanzadas en Google y revisé versiones archivadas de sitios web del Ministerio de Educación en Archive.org.

Finalmente, encontré la mayor parte de la información en PDFs publicados por el Ministerio, que incluían los nombres de los ganadores, sus colegios y las medallas obtenidas en la fase nacional.

### La limpieza y el análisis de datos
Transformé la información inicial a formato tabular y desarrollé un proceso de limpieza y estandarización en R y Python para unificar nombres de colegios, departamentos, categorías y tipos de medalla.

El resultado fue una base de datos estructurada con más de 3.000 registros históricos, incluyendo información sobre:

- Departamento
- Colegio
- Tipo de establecimiento: público, privado o de convenio
- Área de competencia
- Tipo de medalla obtenida

Los hallazgos mostraron brechas importantes. Aunque solo una parte minoritaria de los estudiantes del país asiste a colegios privados, en los nueve años documentados por la base de datos, estos establecimientos concentraron el 60 % de las medallas. Los colegios fiscales obtuvieron el 30 %. La diferencia entre áreas rurales y urbanas fue todavía más marcada: solo el 9 % de los ganadores provenía del área rural, frente al 82 % del área urbana.

## 🫣 ¿Qué pasó después?
En un contexto en el que Bolivia ya no participa de forma regular en pruebas internacionales como PISA, y donde existen pocos informes públicos sobre la calidad educativa del país, el artículo aportó evidencia original sobre desigualdades en el acceso a oportunidades de formación científica.

La investigación llamó la atención de ciudadanos, periodistas y creadores de contenido por la información que reunía y por la forma en que fue presentada: una combinación de visualización de datos, scrollytelling y entrevistas.

<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">🇧🇴 🔭 Analizando datos de las Olimpiadas Científicas Plurinacionales desde 2012, comprobamos que los estudiantes de colegios privados se llevan la mayoría de los premios. Los medalleros reflejan desigualdades educativas que prevalecen en Bolivia.<a href="https://t.co/D2z7L1kXgq">https://t.co/D2z7L1kXgq</a></p>&mdash; Laboratorio de Tecnologías Sociales (@LabTecnoSocial) <a href="https://x.com/LabTecnoSocial/status/1649407505640960003?ref_src=twsrc%5Etfw">April 21, 2023</a></blockquote>

<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">De cada 10 estudiantes, 1 va a colegio particular. En 9 años de olimpiadas científicas plurinacionales, los estudiantes de colegios privados ganaron el 60 % de medallas; de los fiscales, el 30 %. Sólo el 9 % de los ganadores son del área rural. <a href="https://t.co/mXLsjk4JeN">https://t.co/mXLsjk4JeN</a></p>&mdash; Andrés Gómez Vela (@AndrsGomezV) <a href="https://x.com/AndrsGomezV/status/1653346743470137344?ref_src=twsrc%5Etfw">May 2, 2023</a></blockquote>

<script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

<div class="tiktok-wrapper"><blockquote class="tiktok-embed" cite="https://www.tiktok.com/@selim_tech_/video/7426420374545435909" data-video-id="7426420374545435909" style="max-width: 550px;min-width: 325px;"><section><a target="_blank" title="@selim_tech_" href="https://www.tiktok.com/@selim_tech_?refer=embed">@selim_tech_</a> 🇧🇴 ¿Cuál es el mejor COLEGIO de Bolivia? <a title="tdetech" target="_blank" href="https://www.tiktok.com/tag/tdetech?refer=embed">#tdetech</a> <a title="educacion" target="_blank" href="https://www.tiktok.com/tag/educacion?refer=embed">#Educacion</a> <a title="bolivia" target="_blank" href="https://www.tiktok.com/tag/bolivia?refer=embed">#Bolivia</a> <a target="_blank" title="♬ sonido original - T de Tech - Selim Tech" href="https://www.tiktok.com/music/sonido-original-T-de-Tech-7426420427018783494?refer=embed">♬ sonido original - T de Tech - Selim Tech</a></section></blockquote><script async src="https://www.tiktok.com/embed.js"></script></div>

Este proyecto me enseñó que, cuando la evidencia se presenta de forma clara y accesible, una investigación técnica puede convertirse en una conversación pública capaz de llegar mucho más allá de los círculos especializados e incidir en el debate ciudadano.

<a href="https://labtecnosocial.org/articulo-olimpiadas-cientificas/" target="_blank" rel="noopener noreferrer" class="btn-article">Leer investigación completa →</a>