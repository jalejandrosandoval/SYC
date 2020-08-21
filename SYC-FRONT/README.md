<p>
    <h1 align="center"> Proyecto Angular </h1>
</p>

## Estructura de Archivos del Proyecto

```bash
└─ Front-Angular
    ├─e2e
    ├─node_modules 
    └─src 
      ├─app
      ├─assets
      └─enviroments
```

## Requisitos Previos Para Angular

### Instalar NodeJs

* Descargar el instalador de [NodeJS](https://nodejs.org/es/).
* Ejecutar el instalador.

### Instalar Angular
Una vez instalado NodeJS, se procede a abrir la consola de NodeJS <b>(Node.js command prompt)</b>, esto es con el fin de ejecutar los comandos para instalar angular y sus dependencias.

* Instalar Angular en su ultima versión:
```bash
npm i -g @angular/cli
```

* Si se desea, instalar angular en una versión especifica se debe utilizar el siguiente comando:
```bash
npm i -g @angular/cli@'N°. Version'
```

* Para verificar la versión de angular instalada:

```bash
ng --version
```

### Crear Proyecto

Para la creación del proyecto desde 0, se realiza por medio de nodejs:

```bash
ng new NombreDelProyecto
```

### NodeModules

* Para instalar los nodemodules de proyecto se debe utilizar el siguiente comando:

```bash
npm i
```

### Instalar Otras Dependencias

Si se desea realizar desde 0 con la instalación del proyecto desde 0, se deben instalar uno a uno cada uno de los modules a utilizar; en este caso, se utilizará boostrap y algunos otros paquetes; Sin embargo, hay que tener en cuenta que al instalar cada dependencia se debe hacer su respectiva importación y/o llamado en el Archivo "Angular.JSON".

* #### Instalación de Boostrap -> Estilos
Para instalar boostrap se requieren las dependencias de JQUERY y de PopperJS:

```bash
npm i boostrap jquery @popperjs/core --save
```

* #### Instalación de FontAwesome -> Iconos
Para instalar fontawesome basta con la siguiente linea de comando:

```bash
npm install --save @fortawesome/fontawesome-free
```

* #### Instalación de NGX-TOASTR -> Notificaciones
Para instalar Toastr, se requiere de la siguiente linea de comando:

```bash
npm i ngx-toastr --save
```
Junto con la instalación del siguiente paquete, el cual ayuda a la funcionalidad del TOASTR.

```bash
npm i @angular/animations --save
```

* #### Instalación de Datatables -> Visualizar en tablas info

```bash
npm install datatables.net --save
npm install datatables.net-dt --save
npm install angular-datatables --save
npm install @types/jquery --save-dev
npm install @types/datatables.net --save-dev
```

### Llamar o Vincular las dependencias instaladas en el proyecto

Para hacer el llamado, la vinculación o la importanción de las depencias instaladas se debe modificar el archivo <b> angular.json </b>, más exactamente se deben agregar estas lineas:

```bash
"styles": [
    "src/styles.css",
    "node_modules/datatables.net-dt/css/jquery.dataTables.css"              
    ],
"scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/@popperjs/core/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js",
    "node_modules/datatables.net/js/jquery.dataTables.js"
    ]
```

## Configuración de Proxy

Se debe crear un archivo de tipo <b> config.proxy </b> para establecer una comunicación directa con el APIREST creada en .NETCORE esto se realiza de la siguiente manera:

* Se debe crear el archivo y llamarlo de la siguiente forma así:

```bash
proxy.conf.json
```

* Seguido a ello se debe reajustar el inicio del proyecto en el archivo <b> package.json </b> más exactamente se modfican la linea de ng serve:

```bash
"scripts": {
    ...
    "start": "ng serve"
    ...
  }
```

Y se agrega <b> --proxy-config proxy.conf.json </b>, con el fin de que exista una comunicación con la API:

```bash
"scripts": {
    ...
    "start": "ng serve --proxy-config proxy.conf.json"
    ...
  }
```

* Por ultimo para iniciar el proyecto se debe tener en cuenta que se iniciar el proyecto de la API y a su vez el de angular con la siguiente linea: 

```bash
npm start
```

