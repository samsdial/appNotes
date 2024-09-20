# Proyecto Notas

Sergio Andres Martinez

## Descripción

Proyecto Notas es una aplicación diseñada para ayudar a los usuarios a organizar sus notas de una manera eficiente y accesible. La aplicación permite crear, editar y eliminar notas, así como categorizarlas para una mejor organización.

## Características

- Crear, editar y eliminar notas.
- Categorizar notas.
- Interfaz intuitiva y amigable.

## Tecnologías Utilizadas

- **React Native**: Para desarrollar la aplicación móvil y ofrecer una experiencia nativa en sistemas operativos Android e iOS.
- **TypeScript**: Para mejorar la calidad del código mediante el uso de tipos estáticos.
- **Redux**: Para la gestión del estado global de la aplicación.
- **Axios**: Para la comunicación con el backend mediante peticiones HTTP.
- **Express**: Framework para la creación del servidor backend.
- **MongoDB**: Base de datos NoSQL para almacenar la información de las notas.
- **Mongoose**: ODM para interactuar con MongoDB.
- **Jest**: Para realizar pruebas unitarias y asegurar la integridad de la aplicación.

## Instalación

Sigue estos pasos para instalar la aplicación en tu entorno local.

### Requisitos Previos

- Node.js
- npm o yarn
- MongoDB

### Instrucciones

1. Clona el repositorio:

```sh
git clone https://github.com/tu-usuario/proyecto-notas.git
```

2. Navega a la carpeta del proyecto:

```sh
cd proyecto-notas
```

3. Instala las dependencias del proyecto:

```sh
npm install
# o
yarn install
```

4. Configuración del servidor:

- Crea un archivo `.env` en la raíz del proyecto y añade tus variables de entorno (consultar `.env.example`):
  ```env
  MONGO_URI=your_mongodb_connection_string
  PORT=5000
  ```

5. Inicia el servidor:

```sh
npm run server
# o
yarn server
```

6. Inicia la aplicación:

```sh
npm start
# o
yarn start
```

## Uso

Una vez que la aplicación esté en funcionamiento, puedes acceder a ella desde tu dispositivo móvil (usando Expo Go para desarrollo rápido) o ejecutar en un emulador de Android/iOS.

## Contribuciones

¡Las contribuciones son bienvenidas! Sigue estos pasos para contribuir:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b nombre-de-la-rama`).
3. Realiza tus cambios y haz commit (`git commit -m 'Descripción de los cambios'`).
4. Sube tus cambios (`git push origin nombre-de-la-rama`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
