# AVIATUR_developer_test
Proyecto para la visualización de resultados de búsqueda de hoteles para la compañía AVIATUR. Se encuentra compuesto por una aplicación front-end desarrollada usando el framework Angular y un API Rest elaborado mediante el framework NestJS.

## Especificaciones Técnicas

### Tecnologías Implementadas y Versiones
* [Angular 12.1.1](https://angular.io/)
* [NestJS 7.6.15](https://github.com/nestjs/nest)
* [MongoDB (Atlas)](https://github.com/mongodb/mongo)

### Instalación de frameworks
#### NestJS
- [Link](https://docs.nestjs.com/) de la documentación de NestJS
```bash
# Instalar NestJS mediante npm
npm i -g @nestjs/cli
```
#### Angular
- [Link](https://angular.io/guide/setup-local) de la documentación de Angular
```bash
# Instalar Angular mediante npm
npm install -g @angular/cli
```
### Ejecución del Proyecto en ambiente local

- Clonar el proyecto del repositorio de git
```bash
# clonar el proyecto
git clone https://github.com/BrianBORV/AVIATUR_developer_test.git
# entrar al directorio del proyecto
cd AVIATUR_developer_test
```
- Backend
```bash
# entrar al directorio del API REST
cd backend/aviatur-api
# instalar dependencias
npm install
# iniciar servicio
nest start
```
Luego de iniciar el servicio, el API REST se encontrará expuesta a través de la dirección http://localhost:8080/hoteles, que permite la conexión a la colección "hoteles" en la base de datos "aviatur-api" alojada en el servicio MongoDB Atlas. El API REST cuenta con la implementación del CRUD de hoteles mediante los endpoints POST, GET(GetAll y GetById), PUT y DELETE.

Adicionalmente, se puede consultar la documentación del API mediante la dirección http://localhost:8080/swagger, elaborada bajo el estándar OpenAPI 3.0.
- Frontend
```bash
# entrar al directorio del api rest 
# (desde la raiz del repositorio)
cd frontend/aviatur-app
# instalar dependencias
npm install
# iniciar servicio
ng serve
```
Después de iniciar los servicios, es posible acceder a la aplicación frontend ingresado a la dirección http://localhost:4200 en el navegador.

*NOTA:* Se recomienda ejecutar el API REST y la aplicación de Angular en instancias de terminal diferentes, así como en el orden indicado con anterioridad, con el fin de garantizar la ejecución adecuada del proyecto.

### Ejecución del Proyecto en ambientes productivos
- Clonar el proyecto del repositorio de git
```bash
# clonar el proyecto
git clone https://github.com/BrianBORV/AVIATUR_developer_test.git
# entrar al directorio del proyecto
cd AVIATUR_developer_test
```
- Backend
```bash
# entrar al directorio del API REST
cd backend/aviatur-api
# instalar dependencias
npm install
# compilar api
nest build
# Se genera la ruta /dist en la ubicación actual
# Copiar el directorio /dist y el directorio /node_modules al contenedor en el ambiente de producción
FROM node:current-alpine
WORKDIR /
COPY dist dist
COPY node_modules node_modules
# Ejecutar en el contenedor desde el archivo compilado
node dist/main
```
- Frontend
```bash
# entrar al directorio del api rest 
# (desde la raiz del repositorio)
cd frontend/aviatur-app
# instalar dependencias
npm install
# compilar aplicación
ng build
# ejecutar en ambiente de producción
npm run build:prod
```
