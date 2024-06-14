### Comenzando con PyE

Para aportar tu granito de arena a este proyecto, primero debes asegurarte de que todo funcione correctamente. Aquí tienes una guía paso a paso para poner en marcha el proyecto.

---

#### 1. Clonar el Repositorio

Primero, clona el repositorio desde GitHub:


```console
git clone https://github.com/Juanies/pye.git
```

---

#### 2. Configurar Variables de Entorno

Configura las variables de entorno locales creando un archivo \`.env.development.local\` con el siguiente contenido:

```env
POSTGRES_URL=""
POSTGRES_PRISMA_URL=""
POSTGRES_URL_NO_SSL=""
POSTGRES_URL_NON_POOLING=""
POSTGRES_USER=""
POSTGRES_HOST=""
POSTGRES_PASSWORD=""
POSTGRES_DATABASE=""
DISCORD_CLIENT_ID=""
DISCORD_CLIENT_SECRET=""
AUTH_SECRET=""
```

---

#### 3. Crear una Aplicación de Discord

Crea una aplicación de Discord con la siguiente URL de redirección:

```url
http://localhost:3000/api/auth/callback/discord
```

---

#### 4. Instalar Dependencias

Instala las librerías necesarias para el proyecto utilizando npm:

```console
npm install
```

---

#### 5. Iniciar el Servidor

Por último, pero no menos importante, inicia el servidor del proyecto:

```console
npm run dev
```

---



¡Y eso es todo! Ahora deberías tener el proyecto PyE funcionando correctamente en tu entorno local.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details

### ¿Y ahora? Te toca aportar

Si te gustaría contribuir al proyecto, sigue estos pasos:

1. **Fork del Repositorio**: Haz un fork del repositorio `pye` en tu cuenta de GitHub.

2. **Clonar Repositorio**: Clona tu fork del repositorio a tu máquina local usando Git:

   ```bash
   git clone https://github.com/TuUsuario/pye.git

3. Realizar Cambios: Realiza los cambios y mejoras que desees en tu copia local del proyecto.


4. Commit y Push: Sube tus cambios a tu repositorio en GitHub:


     ```bash
    git add .
    git commit -m "Añadido guía de inicio en Markdown"
    git push origin main


5. Crear Pull Request: Ve a la página de tu repositorio en GitHub y haz clic en el botón "Compare & pull request". Completa la información requerida para describir tu propuesta de cambios y envía el pull request.

6. Esperar Revisión: Espera a que los colaboradores del proyecto revisen tu pull request. Pueden sugerir cambios o aceptar tu contribución directamente.

7. Contribuir a proyectos de código abierto es una excelente manera de mejorar tus habilidades y ayudar a la comunidad. ¡Buena suerte con tu contribución a PyE!

#### Base de datos
```SQL
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL
);

CREATE TABLE oferta (
    id SERIAL PRIMARY KEY,
    iduser INT REFERENCES usuario(id)
);

CREATE TABLE reto (
    id SERIAL PRIMARY KEY,
    iduser INT REFERENCES usuario(id)
);

```
