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
Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
