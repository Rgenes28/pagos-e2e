# 🏦 Pagos E2E – Playwright + Cucumber + TypeScript

## Proyecto de automatización End-to-End que valida un flujo completo de Pago de Servicios en una aplicación demo de Homebanking.

### 🔗 Repositorio:
### https://github.com/Rgenes28/pagos-e2e

# 1️⃣ 📌 Descripción del Proyecto

## Este proyecto automatiza un flujo real de negocio simulando el comportamiento de un usuario final dentro de una aplicación bancaria.

## El objetivo es validar:

### Flujo completo de pago

### Descarga de comprobante en PDF

### Lectura automática del PDF

### Validación de información crítica del pago

## Se implementa utilizando:

### Playwright

### Cucumber (BDD)

### TypeScript

### Page Object Model (POM)

### GitHub Actions (CI)

# 2️⃣ 🧪 Caso de Prueba Automatizado
## 📍 Escenario implementado

### Login con usuario demo

### Navegación a Pago de Servicios

### Selección del servicio 🌐 Internet – Fibertel

### Visualización del monto sugerido

### Confirmación del pago

### Validación del mensaje exitoso

### Validación del botón Descargar PDF

### Descarga del comprobante

### Lectura automática del PDF

### Validación de:

### Nombre del usuario

### Proveedor

### Concepto del pago

### Estado acreditado

### Monto correcto (normalizado)

# 3️⃣ 🏗️ Estructura del Proyecto
    src
      └── tests

        ├── features
      
        │     └── pago_servicio.feature
      
        ├── pages
      
        │     ├── login.page.ts
      
        │     ├── home.page.ts
      
        │     └── pago.page.ts
      
        ├── step-definitions
      
        │     └── pago.steps.ts
      
        ├── support
        
        │     ├── hooks.ts
      
        │     └── world.ts
        
        └── utils
      
            └── pdf.utils.ts

### Arquitectura basada en:

### Page Object Model

### Separación clara entre Steps y lógica de UI

### Utilidades reutilizables para lectura de PDF

# 4️⃣ 🚀 Instalación y Ejecución
## 1️⃣ Clonar repositorio
### git clone https://github.com/Rgenes28/pagos-e2e.git
### cd pagos-e2e

## 2️⃣ Instalar dependencias
### npm install

## 3️⃣ Configurar variables de entorno

### Crear archivo .env

### BASE_URL=https://homebanking-demo-tests.netlify.app

## 4️⃣ Ejecutar pruebas
### npm run test

## 5️⃣ 📊 Reportes

### El proyecto genera reporte HTML con Cucumber.

### Al finalizar la ejecución:

### Se genera el reporte

### Se validan logs del flujo

### Se confirma lectura y validación del PDF

## 6️⃣ 🎯 Buenas Prácticas Implementadas

### Uso de Locator en lugar de selectores frágiles

### Uso de expect con auto-wait de Playwright

### Separación de responsabilidades

### Validaciones reales de negocio

### Manejo de descargas

### Normalización de texto para validación robusta

# 7️⃣ 👨‍💻 Autor

## Ronaldo Genes
## QA Automation Engineer

# 💡 Objetivo del Repositorio

### Este repositorio está pensado como template para colegas QA Junior que quieran:

### Aprender automatización E2E

### Implementar BDD con Cucumber

### Leer y validar PDFs en pruebas

### Aplicar buenas prácticas reales

### Si te sirve, dale ⭐ al repo y compártelo.











