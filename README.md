# Aura Battle — Web Pública

Landing oficial de Aura Battle: marca, descarga del APK de Android y acceso
a partidas online. Es un sitio estático independiente del frontend de la app
(`https://aura-battle-nine.vercel.app/`), construido con HTML/CSS/JS y Vite.

## Requisitos

- Node.js 20 o superior.

## Instalar

```bash
cd landing
npm install
```

## Ejecutar en local

```bash
npm run dev
```

Abre `http://localhost:5173`. Para que el botón de descarga funcione en local,
copia el fichero `.env.example` a `.env` y pon tu URL real:

```bash
cp .env.example .env
```

## Cambiar la URL del APK de Android

El botón de descarga lee la variable de entorno:

```
VITE_ANDROID_DOWNLOAD_URL=https://...
```

En Vite, las variables expuestas al navegador deben tener el prefijo `VITE_`.
Edita el `.env` (local) o la variable en Netlify (producción) y reconstruye.
No hace falta tocar el código.

## Desplegar en Netlify

Con Netlify conectar tu repositorio:

| Ajuste             | Valor               |
| ------------------ | ------------------- |
| Base directory     | `landing`           |
| Build command      | `npm run build`     |
| Publish directory  | `dist`              |

Variables de entorno a añadir en Netlify:

- `VITE_ANDROID_DOWNLOAD_URL` → URL del APK.

El fichero `netlify.toml` ya incluye estos ajustes, pero la variable de entorno
debe configurarse en el panel de Netlify (Build settings → Environment).

También se puede desplegar con la CLI de Netlify:

```bash
npx netlify deploy --prod --dir=dist
```