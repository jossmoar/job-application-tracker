# Job Application Tracker

Dashboard para seguir postulaciones de trabajo: estado, contadores, búsqueda y filtros, con persistencia local.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Persistencia en `localStorage` (sin backend)

## Funcionalidad

- Contadores por estado (Total, Applied, Interview, Offer, Rejected)
- Agregar aplicación (empresa, puesto, fecha, estado)
- Cambiar estado desde la tarjeta
- Buscar por empresa o puesto
- Filtrar por estado
- Eliminar aplicación

## Desarrollo

```bash
npm install
npm run dev
```

Copie `.env.example` a `.env` y complete con su propia Project API Key de PostHog si quiere analíticas en su entorno local (PostHog solo captura en builds de producción, así que en `npm run dev` no hace nada).

## Build

```bash
npm run build
```

## Analíticas (PostHog)

El proyecto envía pageviews a PostHog, solo en producción (`import.meta.env.PROD`), para no ensuciar los datos con pruebas locales. Al desplegar en Vercel, agregue estas variables de entorno en **Project Settings → Environment Variables**:

- `VITE_POSTHOG_KEY`
- `VITE_POSTHOG_HOST`

(valores en `.env.example`, tomados de PostHog → Project Settings → Project API Key)
