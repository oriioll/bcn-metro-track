### 🚇 BCN Metro Track  
### **Dynamic Line Visualizer for the Barcelona Metro**

BCN Metro Track is a modern, data-driven web application built with **Vanilla JavaScript and CSS** to dynamically visualize the official Barcelona Metro lines and their stops. The project highlights efficient DOM rendering, clean data mapping from nested arrays, and a polished dark-mode interface.

🔗 **Live Demo:**  
https://oriioll.github.io/bcn-metro-track

---

### ✨ Features

#### 🔄 Dynamic Rendering  
The stop list is fully regenerated based on the user's selected metro line, ensuring accurate and responsive visualization.

#### 🎨 Data-Driven Styling  
Official TMB line colors (L1, L3, L5, etc.) are applied directly from the dataset, guaranteeing accurate visual representation.

#### ⚡ Efficient Data Mapping  
JavaScript locates and extracts the ordered stop list using `.find()` and structured arrays, making the logic lightweight and efficient.

#### 🌙 Professional Dark Mode  
The interface uses the **Track Night** palette, the **Inter** typeface, and subtle gradients to enhance readability and modern aesthetics.

---

### 🛠️ Tech Stack

- **HTML5** – Interface structure  
- **CSS3** – Theming and styling with CSS variables  
- **Vanilla JavaScript** – Event handling, data filtering, DOM generation  
- **Structured Arrays** – Centralized line/stop/color data

---

### 🎨 Design Palette (CSS Variables)

| Variable          | Color     | Purpose |
|------------------|-----------|----------|
| `--bg-primary`     | `#1D1D1D` | Main background |
| `--bg-secondary`   | `#2D2D2D` | Panels and containers |
| `--text-main`      | `#EEEEEE` | High-contrast text |
| `--accent-ui`      | `#FFD700` | UI accent highlight |

---

### 📦 Data Structure Example

```js
const metroData = [
    { 
        line: "L5",
        color: "#0066cc",
        stops: [
            "Cornellà Centre",
            "Sant Ildefons",
            // ...
        ]
    },
    // ... other lines ...
];

### How it Works
The user selects a line from the control panel.

JavaScript retrieves the matching object from metroData.

The app dynamically renders a new list of <li> stop elements.

Elements are styled using the official TMB color for that line.