🏦 Pagos E2E – Playwright + Cucumber + TypeScript

Proyecto de automatización End-to-End de un flujo de Pago de Servicios en una aplicación demo de Homebanking.

Este repositorio está pensado como template educativo para QA Engineers que quieran aprender o reforzar:

✅ Playwright

✅ Cucumber (BDD)

✅ TypeScript

✅ Page Object Model (POM)

✅ Descarga y validación de PDF

✅ Generación de reportes HTML

✅ Uso de Custom World en Cucumber

✅ Buenas prácticas en automatización

📌 Caso de Prueba Automatizado

Escenario implementado:

Login con usuario demo

Navegación a "Pago de Servicios"

Selección del servicio "🌐 Internet - Fibertel"

Validación del monto sugerido

Confirmación del pago

Validación del mensaje exitoso

Validación del botón "Descargar PDF"

Descarga del comprobante

Lectura del PDF

Validación de:

Nombre del usuario

Proveedor

Concepto del pago

Estado acreditado

Monto correcto

🧱 Arquitectura del Proyecto

Estructura organizada por responsabilidades:

src/tests
│
├── features
│ └── pago_servicio.feature
│
├── pages
│ ├── login.page.ts
│ ├── home.page.ts
│ └── pago.page.ts
│
├── step-definitions
│ └── pago.steps.ts
│
├── support
│ ├── hooks.ts
│ └── world.ts
│
├── utils
│ └── pdf.utils.ts

🧩 Patrón de Diseño

Se implementa:

Page Object Model (POM)

Custom World de Cucumber para compartir estado entre pasos

Separación clara entre:

Features

Steps

Pages

Hooks

Utils

⚙️ Tecnologías Utilizadas

Playwright

Cucumber

TypeScript

dotenv

pdf-parse

multiple-cucumber-html-reporter

Node.js

🚀 Instalación

Clonar el repositorio:

git clone https://github.com/TU-USUARIO/pagos-e2e.git

cd pagos-e2e

Instalar dependencias:

npm install

🔐 Variables de Entorno

Crear un archivo .env en la raíz del proyecto:

BASE_URL=https://homebanking-demo-tests.netlify.app

▶️ Ejecutar Pruebas

npm run test

Este comando:

Ejecuta Cucumber

Genera archivo JSON

Genera reporte HTML automáticamente

📊 Reporte HTML

Después de la ejecución, el reporte se genera en:

reports/html-report/index.html

Incluye:

Resultado del escenario

Metadata de ejecución

Información del navegador

PDF adjunto como evidencia

📄 Validación del PDF

Se utiliza la librería pdf-parse para:

Leer el texto del comprobante descargado

Normalizar el monto

Validar que el contenido coincida con lo esperado

Validaciones realizadas:

Nombre del cliente

Proveedor

Concepto del pago

Estado del pago

Monto correcto (normalizado)

🧠 Buenas Prácticas Aplicadas

Esperas explícitas cuando es necesario

Separación clara de responsabilidades

Manejo de estado con Custom World

Validaciones robustas

Evidencia adjunta al reporte

Configuración desacoplada mediante .env

Código pensado como base reutilizable

🎯 Objetivo del Proyecto

Este repositorio busca servir como:

Base para QA Juniors

Template reutilizable

Ejemplo práctico de BDD con Playwright

Ejemplo de validación automática de PDFs

Proyecto demostrable para portafolio profesional

👨‍💻 Autor

Ronaldo Genes
QA Automation Engineer
Colombia 🇨🇴
