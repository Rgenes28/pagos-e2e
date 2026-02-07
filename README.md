#🏦 Pagos E2E – Playwright + Cucumber + TypeScript

##Proyecto de automatización End-to-End de un flujo de Pago de Servicios en una aplicación demo de Homebanking.

#🔗 Repositorio:
##https://github.com/Rgenes28/pagos-e2e

##Este proyecto fue construido como template educativo para QA Engineers que quieran aprender o reforzar:

###Playwright

###Cucumber (BDD)

###TypeScript

###Page Object Model (POM)

###Validación de PDFs

###Generación de reportes HTML

###Uso de Custom World en Cucumber

#📌 Caso de Prueba Automatizado

##Escenario implementado:

###Login con usuario demo

###Navegación a "Pago de Servicios"

###Selección del servicio "🌐 Internet - Fibertel"

###Visualización del monto sugerido

###Confirmación del pago

###Validación del mensaje exitoso

###Validación del botón "Descargar PDF"

###Descarga del comprobante

###Lectura automática del PDF

###Validación de:

###Nombre del usuario

###Proveedor

###Concepto del pago

###Estado acreditado

###Monto correcto (normalizado)

#🧱 Estructura del Proyecto
###src/tests
│
├── features
│   └── pago_servicio.feature
│
├── pages
│   ├── login.page.ts
│   ├── home.page.ts
│   └── pago.page.ts
│
├── step-definitions
│   └── pago.steps.ts
│
├── support
│   ├── hooks.ts
│   └── world.ts
│
├── utils
│   └── pdf.utils.ts

#🧩 Arquitectura y Buenas Prácticas

###Implementación de Page Object Model

###Separación clara de responsabilidades

###Uso de Custom World para compartir estado entre steps

###Validación robusta del PDF descargado

###Generación automática de reporte HTML

###Código estructurado para escalabilidad

#⚙️ Tecnologías Utilizadas

###Playwright

###Cucumber

###TypeScript

###dotenv

###pdf-parse

###multiple-cucumber-html-reporter

###Node.js

🚀 Instalación

Clonar el repositorio:

git clone https://github.com/Rgenes28/pagos-e2e.git
cd pagos-e2e


Instalar dependencias:

npm install

🔐 Variables de Entorno

Crear archivo .env en la raíz del proyecto

Agregar:

BASE_URL=https://homebanking-demo-tests.netlify.app

▶️ Ejecutar las Pruebas
npm run test


Este comando:

Ejecuta Cucumber

Genera el archivo JSON

Genera el reporte HTML automáticamente

📊 Reporte HTML

Después de la ejecución, el reporte se genera en:

reports/html-report/index.html


Incluye:

Resultado del escenario

Metadata de ejecución

Información del entorno

Evidencia del PDF descargado

📄 Validación del Comprobante PDF

Se utiliza pdf-parse para:

Leer el texto del comprobante

Normalizar valores numéricos

Validar:

Cliente

Proveedor

Concepto

Estado del pago

Monto correcto

Esta validación asegura que no solo la UI funciona correctamente, sino también el documento generado por el sistema.

🎯 Objetivo del Proyecto

Este repositorio busca servir como:

Template para QA Juniors

Ejemplo práctico de BDD con Playwright

Proyecto demostrable para portafolio profesional

Base escalable para futuras pruebas E2E

👨‍💻 Autor

Ronaldo Genes
QA Automation Engineer
Colombia
