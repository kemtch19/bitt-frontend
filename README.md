# 📱 Bitt — Frontend

**Bitt** es una red social tipo Twitter con chat en tiempo real.
Este repositorio contiene el **frontend** de la aplicación, construido con **React + Vite + TailwindCSS**.

---

## 🚀 Stack

* ⚛️ **React + Vite** — SPA rápida y modular
* 🎨 **TailwindCSS** — estilos modernos y minimalistas
* 🔗 **Axios / Fetch** — consumo de API REST
* 🔒 **JWT en cookies HttpOnly** — autenticación segura
* 💬 **Socket.io Client** — chat en tiempo real (futuro)

---

## 📂 Estructura del proyecto

```
bitt-frontend/
 ├── public/               # archivos estáticos
 ├── src/
 │   ├── components/        # componentes reutilizables
 │   ├── pages/             # páginas (Home, Login, Chat, etc.)
 │   ├── context/           # contextos globales (UserContext)
 │   ├── hooks/             # hooks personalizados
 │   ├── App.jsx            # rutas principales
 │   └── main.jsx           # punto de entrada
 ├── .env.example           # variables de entorno
 ├── package.json
 └── README.md
```

---

## ⚙️ Instalación

Clona el repositorio e instala dependencias:

```bash
# Clonar repo
git clone https://github.com/<tu-usuario>/bitt-frontend.git

# Entrar en carpeta
cd bitt-frontend

# Instalar dependencias
npm install
```

---

## 🔑 Configuración de entorno

Copia el archivo `.env.example` y renómbralo como `.env`:

```bash
cp .env.example .env
```

Completa las variables con tu configuración:

```env
VITE_API_URL=http://localhost:5000/api
VITE_CLOUDINARY_CLOUD_NAME=<your_cloud_name>
VITE_CLOUDINARY_UPLOAD_PRESET=<your_upload_preset>
```

---

## ▶️ Ejecución

Modo desarrollo:

```bash
npm run dev
```

Build de producción:

```bash
npm run build
```

Preview local del build:

```bash
npm run preview
```

---

## 🛠️ Features (MVP)

* [ ] Registro e inicio de sesión con cookies HttpOnly
* [ ] Crear y ver posts básicos
* [ ] Likes y comentarios
* [ ] Seguir/Dejar de seguir usuarios
* [ ] Chat en tiempo real con Socket.io
* [ ] Subida de imágenes (Cloudinary)
* [ ] Moderación de contenido

---

## 📌 Backend

Este frontend se conecta al repositorio:
👉 [bitt-backend](https://github.com/<tu-usuario>/bitt-backend)

---

## 📝 Notas

* Este repo es solo el **frontend**, la lógica de autenticación y API está en el backend.
* TailwindCSS ya está configurado para personalizar la paleta de colores.
* Recuerda que todas las variables de entorno en Vite deben empezar con `VITE_`.

---

## 📄 Licencia

Proyecto creado con fines de aprendizaje y portafolio.

