# 🎨 Generador de Paleta de Colores

Una aplicación web interactiva que genera paletas de colores aleatorias, permitiendo personalizar la cantidad de colores y elegir entre diferentes formatos de representación.

## 📋 Descripción

Este proyecto es un generador de paletas de colores que te permite:

- Generar paletas de colores aleatorias de forma dinámica
- Seleccionar la cantidad de colores (6, 8 o 9 colores)
- Visualizar los colores en dos formatos diferentes: Hexadecimal y HSL
- Cambiar entre formatos sin necesidad de regenerar la paleta
- Interfaz intuitiva y responsive

## ✨ Características

- **Generación de colores aleatoria**: Crea combinaciones de colores únicas cada vez
- **Múltiples formatos**:
  - Hexadecimal (#RRGGBB)
  - HSL (Hue, Saturation, Lightness)
- **Paletas personalizables**: Elige entre 6, 8 o 9 colores por paleta
- **Interfaz moderna**: Diseño limpio con tarjetas de color bien organizadas
- **Selector de cantidad de colores**: Dropdown para elegir cuántos colores deseas
- **Radio buttons para formato**: Cambia entre HEX y HSL sin regenerar

## 🏗️ Estructura del Proyecto

```
ProyectoFinal/
├── index.html          # Estructura HTML de la aplicación
├── CSS/
│   └── style.css       # Estilos y diseño responsivo
├── JS/
│   └── script.js       # Lógica de generación de colores
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

1. **Abrir la aplicación**: Abre `index.html` en tu navegador web
2. **Seleccionar cantidad de colores**: Usa el dropdown "Elige una opción" para elegir 6, 8 o 9 colores
3. **Elegir formato**: Selecciona entre Hexadecimal o HSL usando los radio buttons
4. **Generar paleta**: Haz clic en el botón "Generar paleta" para crear una nueva paleta
5. **Ver colores**: Los colores se mostrarán en las tarjetas con su código en el formato seleccionado

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Estilos y diseño responsivo con flexbox y grid
- **JavaScript (Vanilla)**: Generación de colores y manipulación del DOM
- **Conversión de colores**: Algoritmo de conversión HEX a HSL

## 📝 Funcionalidades Técnicas

### Generación de colores

- Genera códigos hexadecimales aleatorios válidos
- Almacena los valores originales en formato HEX

### Conversión HEX a HSL

- Algoritmo de conversión que transforma hexadecimal a HSL
- Mantiene precisión en los cálculos de tono, saturación y luminosidad

### Interactividad

- Event listeners para cambios en el dropdown de cantidad
- Event listeners para cambios en los radio buttons de formato
- Botón para regenerar la paleta manualmente

## 🎯 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de dependencias
- No requiere conexión a internet

## 📄 Licencia

Proyecto creativo personal - Libre para uso educativo.
