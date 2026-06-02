---
title: "Sistema de monitoreo Tukuy Pacha"
description: "Diseñé una plataforma web para la Organización Tukuy Pacha que simplifica el seguimiento de donaciones y beneficiarios para niños y jóvenes con discapacidad en Cochabamba."
category: "UI/UX Design"
date: "2024-06-01"
cover: "/thumbnail estudios de caso/4-monitoreo tukuy pacha.png"
tags: ["UI/UX", "Web app", "Sector social", "Bolivia", "Figma"]
readTime: 7
overview:
  cliente: "Organización Tukuy Pacha"
  herramientas: "Figma, Miro, FigJam"
  año: "2024"
  rol: "UX/UI Designer"
---

## El contexto

Tukuy Pacha es una organización cochabambina que trabaja con niños y jóvenes con discapacidad física y cognitiva. Su modelo de financiamiento se basa en donaciones individuales y corporativas que se destinan a programas de terapia, educación especial y acompañamiento familiar.

Con el tiempo, la organización fue creciendo y el sistema de seguimiento de donaciones —que funcionaba en hojas de cálculo y correos— se volvió insostenible. El equipo perdía tiempo valioso buscando información básica: ¿quién dona cuánto?, ¿cuántos beneficiarios atiende cada programa?, ¿qué donante no ha sido contactado en meses?

## El reto

El desafío central era diseñar para un equipo con **poca experiencia en herramientas digitales** y con muy poco tiempo. Las personas que usarían la plataforma son coordinadoras de programas y voluntarias, no administradoras de sistemas. Si la interfaz era compleja, simplemente no la usarían.

Al mismo tiempo, la organización necesitaba reportes claros para presentar a donantes corporativos: visualizaciones del impacto, número de beneficiarios atendidos, porcentaje de metas cumplidas. La plataforma tenía que servir tanto para el trabajo cotidiano como para la rendición de cuentas.

## El proceso

### Investigación con usuarios

Realicé cinco entrevistas con miembros del equipo de Tukuy Pacha: la coordinadora general, dos coordinadoras de programas y dos voluntarias que manejaban la base de donantes. También revisé las hojas de cálculo actuales para entender qué datos ya rastreaban y cuáles les faltaban.

Los hallazgos más importantes:
- El equipo quería saber "de un vistazo" si iban bien o mal en relación a sus metas mensuales
- El proceso de registrar una nueva donación tomaba demasiados pasos en el sistema anterior
- Las coordinadoras necesitaban ver el historial de cada beneficiario de forma rápida
- Los reportes para donantes se armaban manualmente cada trimestre, lo cual tomaba días

### Arquitectura y flujos

Definí tres módulos principales: **Donantes** (gestión de personas y organizaciones que aportan), **Beneficiarios** (seguimiento de niños y jóvenes atendidos) y **Reportes** (resúmenes automáticos para presentar a financiadores). Cada módulo tenía que ser independiente pero conectado.

Diseñé los flujos priorizando las tareas más frecuentes: registrar una nueva donación en menos de tres pasos, actualizar el estado de un beneficiario desde su ficha, y generar un reporte con un solo clic.

### Prototipado y pruebas

Hice dos rondas de pruebas de usabilidad con prototipos en Figma. En la primera ronda identifiqué problemas con la navegación entre módulos y con el formulario de registro de donaciones. En la segunda, validé las correcciones y obtuve retroalimentación positiva de todos los usuarios.

> La coordinadora general dijo que era la primera vez que veía un sistema donde "todo tenía sentido desde el principio". Ese fue el mejor feedback que pude recibir.

### Sistema de diseño

Desarrollé un sistema de componentes en Figma adaptado a las necesidades de la organización: paleta de colores accesible, tipografía clara, componentes de formulario con validación visible, y una biblioteca de iconos consistente. Todo documentado para facilitar el desarrollo futuro.

## Los resultados

La plataforma fue entregada como prototipo de alta fidelidad listo para desarrollo. Las pruebas finales mostraron:

- **Reducción del tiempo** de registro de donaciones de ~15 minutos a menos de 3 minutos
- **Tasa de éxito del 100%** en tareas clave durante las pruebas de usabilidad finales
- El módulo de reportes automáticos proyectaba ahorrar al equipo aproximadamente **2 días de trabajo manual** por trimestre
- La organización inició la búsqueda de financiamiento para el desarrollo técnico basándose en el prototipo
