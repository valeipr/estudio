---
title: "Mapas de densidad poblacional en 3D"
description: "Visualizaciones tridimensionales de la densidad poblacional en los 9 departamentos de Bolivia, construidas con el paquete Rayshader de R."
category: "Visualización de datos"
date: "2023-05-01"
cover: "/thumbnails/5-mapas 3d.png"
tags: ["R", "Rayshader", "Cartografía", "Visualización", "Bolivia"]
readTime: 4
overview:
  cliente: "Proyecto propio"
  herramientas: "R, Rayshader, Affinity Designer"
  año: "2023"
  rol: "Data visualizer"
---

## 🗺 Experimentando con Rayshader
Este pequeño proyecto nació porque creo que la visualización de datos, además de presentar de manera sencilla información compleja, también puede ser muy artística.

En 2023, muchos usuarios de #Rstats elaboraban y compartían mapas utilizando un paquete de R relativamente nuevo, Rayshader, que permite crear visualizaciones tridimensionales con un nivel de detalle impresionante. Así que, como proyecto personal, decidí experimentar con este paquete para representar los datos de [Kontur Population Density Dataset](https://ciudatoslab.org/datos/densidad-poblacional-de-bolivia-kontur-population-dataset-2022/), que presenta la densidad poblacional de diferentes territorios en hexágonos de 400 metros. 

El reto no era técnico en el sentido convencional, sino de **criterio estético**: cómo mapear la densidad a la altura, qué paleta de colores hacer justicia al territorio, desde qué ángulo iluminar y renderizar cada departamento del país.

Luego de varias horas renderizando, agregué texto y pequeños detalles de composición en Affinity Designer para poder compartirlo en las redes sociales del proyecto que dirijo, Ciudatos Lab. Puedes ver los resultados de este experimento aquí abajo 👇.

<div class="image-gallery">
  <a href="/mapas%203d/1.jpg"><img src="/mapas%203d/1.jpg" alt="Mapa 3D de densidad poblacional - departamento 1" /></a>
  <a href="/mapas%203d/2.jpg"><img src="/mapas%203d/2.jpg" alt="Mapa 3D de densidad poblacional - departamento 2" /></a>
  <a href="/mapas%203d/3.jpg"><img src="/mapas%203d/3.jpg" alt="Mapa 3D de densidad poblacional - departamento 3" /></a>
  <a href="/mapas%203d/4.jpg"><img src="/mapas%203d/4.jpg" alt="Mapa 3D de densidad poblacional - departamento 4" /></a>
  <a href="/mapas%203d/5.jpg"><img src="/mapas%203d/5.jpg" alt="Mapa 3D de densidad poblacional - departamento 5" /></a>
  <a href="/mapas%203d/6.jpg"><img src="/mapas%203d/6.jpg" alt="Mapa 3D de densidad poblacional - departamento 6" /></a>
  <a href="/mapas%203d/7.jpg"><img src="/mapas%203d/7.jpg" alt="Mapa 3D de densidad poblacional - departamento 7" /></a>
  <a href="/mapas%203d/8.jpg"><img src="/mapas%203d/8.jpg" alt="Mapa 3D de densidad poblacional - departamento 8" /></a>
  <a href="/mapas%203d/9.jpg"><img src="/mapas%203d/9.jpg" alt="Mapa 3D de densidad poblacional - departamento 9" /></a>
</div>

El proyecto me demostró que la visualización de datos hecha con cuidado puede volverse un objeto cultural y artístico. Datos bien visualizados pueden convertirse en algo que la gente quiere guardar, compartir y explicar a otros. Además, para mí, siempre es genial poder tratar cuestiones urbanas mediante los datos.