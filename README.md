# La guerra, la paz: el lenguaje hecho realidad

Landing page sobre el papel performativo del lenguaje en el conflicto y la paz en Colombia.

**Autor:** Gustavo Adolfo Pérez Pérez  
**Trabajo:** APUN 50 Años - Trabajo 7  
**ID:** 1021513348

## 🚀 Despliegue en GitHub Pages

### Opción 1: Crear un nuevo repositorio

1. **Crea un nuevo repositorio en GitHub:**
   - Ve a [github.com](https://github.com) e inicia sesión
   - Haz clic en el botón "New" (Nuevo) para crear un repositorio
   - Nombre sugerido: `apun-lenguaje-paz`
   - Marca como público (Public)
   - NO inicialices con README, .gitignore o licencia
   - Haz clic en "Create repository"

2. **Sube los archivos desde tu computadora:**
   
   Abre PowerShell en la carpeta `c:\Users\elcer\Desktop\catedras\apun` y ejecuta:

   ```powershell
   # Inicializar repositorio Git
   git init
   
   # Agregar todos los archivos
   git add .
   
   # Hacer el primer commit
   git commit -m "Initial commit: Landing page APUN"
   
   # Conectar con tu repositorio de GitHub (reemplaza TU_USUARIO con tu nombre de usuario)
   git remote add origin https://github.com/TU_USUARIO/apun-lenguaje-paz.git
   
   # Cambiar a la rama main
   git branch -M main
   
   # Subir los archivos
   git push -u origin main
   ```

3. **Activar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Haz clic en "Settings" (Configuración)
   - En el menú lateral, haz clic en "Pages"
   - En "Source", selecciona la rama `main` y la carpeta `/ (root)`
   - Haz clic en "Save"
   - Espera unos minutos y tu sitio estará disponible en:
     `https://TU_USUARIO.github.io/apun-lenguaje-paz/`

### Opción 2: Usar un repositorio existente

Si ya tienes un repositorio, simplemente copia los archivos a una carpeta y sigue el paso 3 anterior.

## 📁 Estructura de archivos

```
apun/
├── index.html      # Página principal
├── styles.css      # Estilos CSS
├── script.js       # JavaScript para interactividad
├── .nojekyll       # Archivo para GitHub Pages
└── README.md       # Este archivo
```

## 🎨 Características

- ✅ Diseño moderno y responsivo
- ✅ Animaciones suaves
- ✅ Optimizado para móviles
- ✅ Gradientes y efectos visuales
- ✅ Navegación fluida
- ✅ Accesibilidad mejorada

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (ES6+)
- Google Fonts (Inter)

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ Dispositivos móviles (iOS y Android)
- ✅ Tablets
- ✅ Escritorio

## 🔧 Personalización

Para personalizar el contenido, edita el archivo `index.html`.  
Para cambiar colores y estilos, modifica las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... más variables */
}
```

## 📝 Licencia

Este proyecto es parte del trabajo académico APUN 50 Años.

---

**Universidad Nacional de Colombia - Medellín**  
**Universidad de Antioquia**  
**Cátedra APUN-50 Años**
