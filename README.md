# Barbudos

Sitio web responsive para Barbudos con menú digital, reservaciones y programa
de puntos.

## Desarrollo local

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Copiar `.env.example` como `.env.local` y completar las credenciales de
   Supabase.

3. Ejecutar `supabase/schema.sql` desde el SQL Editor del proyecto de Supabase.

4. Iniciar el proyecto:

   ```bash
   npm run dev
   ```

## Despliegue en Vercel

1. Importar el repositorio `FroDev-CR/Barbudos`.
2. Mantener la configuración detectada de Next.js.
3. Agregar estas variables en Vercel:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_UPLOAD_KEY`
   - `NEXT_PUBLIC_SITE_URL` (opcional hasta conectar el dominio)
4. Desplegar.

La clave `SUPABASE_SERVICE_ROLE_KEY` se utiliza únicamente en rutas del
servidor y nunca debe agregarse al código del navegador.

## Fotografías del menú

La ruta `/admin/menu` permite subir o reemplazar las fotografías de cada
producto. Las imágenes se guardan en el bucket público `menu-images` de
Supabase Storage y aparecen automáticamente en el menú.

El formulario solicita el valor de `ADMIN_UPLOAD_KEY`. La clave se mantiene
solamente en memoria durante esa visita y no se almacena en el navegador.
