# Grade Tracker – Portal Web para Docentes y Administradores

## Descripción

Grade Tracker es una plataforma web desarrollada para la Escuela Metropolitana La Luz que permite a docentes y administradores gestionar información académica de manera centralizada.

El sistema facilita la captura de calificaciones, consulta de grupos y estudiantes, visualización de boletas, comunicación mediante comentarios y consulta de notificaciones, reemplazando procesos manuales realizados anteriormente mediante hojas de cálculo.

---

## Funcionalidades principales

### Docentes

* Consultar grupos asignados.
* Visualizar estudiantes por grupo.
* Capturar y actualizar calificaciones.
* Consultar boletas por trimestre.
* Consultar comentarios enviados por padres de familia.
* Consultar notificaciones institucionales.

### Administradores

* Supervisar información académica.
* Consultar reportes generales.
* Gestionar información institucional.

---

## Tecnologías utilizadas

### Frontend

* Angular
* Ionic Framework
* TypeScript
* HTML
* SCSS

### Backend (servicio externo)

Este proyecto consume una API REST desarrollada en Node.js y Express.

### Base de datos

PostgreSQL

---

## Requisitos previos

Antes de ejecutar el sistema es necesario contar con:

* Node.js 20 o superior
* npm
* Angular CLI
* Backend Grade Tracker en ejecución
* Base de datos PostgreSQL configurada

---

## Instalación

### 1. Clonar repositorio

```bash
git clone https://github.com/ElishebaTL/TC2007B-WEBAPP 
```

### 2. Entrar al proyecto

```bash
cd grade-tracker-web
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Configurar conexión con backend

Verificar el archivo:

```text
src/environments/environment.ts
```

y confirmar que la URL del backend corresponda al servidor donde se encuentra ejecutándose la API.

Ejemplo:

```typescript
apiUrl: 'http://localhost:3000/api'
```

---

## Ejecución

Iniciar el servidor de desarrollo:

```bash
ionic serve
```

La aplicación estará disponible en:

```text
http://localhost:8100
```

---

## Flujo general del sistema

1. Iniciar sesión.
2. Consultar grupos asignados.
3. Seleccionar un grupo.
4. Visualizar estudiantes.
5. Capturar o actualizar calificaciones.
6. Consultar boletas.
7. Revisar comentarios y notificaciones.

---

## Dependencias del sistema

El portal web depende de:

* API Backend Grade Tracker.
* Base de datos PostgreSQL.
* Conexión a internet o red local donde se encuentre alojado el backend.

Si el backend o la base de datos no están disponibles, el sistema no podrá recuperar información académica.

---

## Datos de demostración

El sistema incluye datos de ejemplo utilizados durante el desarrollo académico del proyecto para demostrar el funcionamiento de:

* Grupos
* Estudiantes
* Calificaciones
* Boletas
* Comentarios
* Notificaciones

---

## Equipo de desarrollo

Proyecto desarrollado para el curso TC2007B – Integración de Seguridad Informática en Redes y Sistemas de Software.

Equipo 3

* Andrés Jaramillo Barón
* María José Ruíz Martínez
* Elisheba Hannaí Trejo Leyva
* Héctor Kenneth Ramos Velázquez

Tecnológico de Monterrey
Semestre 2026-11

## Nota para el socio formador

Este repositorio corresponde únicamente al sistema web para docentes y administradores.

Para el funcionamiento completo de Grade Tracker también son necesarios:

- Repositorio Backend
- Repositorio Aplicación Móvil para Padres de Familia 
