## 🧩 Employee UI POC

A responsive Proof of Concept (POC) built with React, Tailwind CSS, and Context API.
This UI showcases employee data in both **tile view** and **grid view** with navigation, detail dialogs, and responsive menus.

---

### 📸 Features

- 🧭 Hamburger & Horizontal Menus
- 🗃️ Tile View: Card-based layout for employees
- 📊 Grid View: Table-based layout for full employee data
- 🔁 Toggle between tile and grid views
- 🔍 Expanded Employee Details in Modal (Dialog)
- 🧠 Global state management using Context API
- 🎨 Fully responsive design using Tailwind CSS

---

### 🚀 Getting Started

Clone the repository and install the dependencies.

```bash
git clone https://github.com/kashifakhan1996/employee-management-frontend.git
cd employee-management-frontend
npm install
```

---

### 🛠️ Scripts

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Run lint checks
npm run lint
```

---

### 💾 File Structure

```
src/
├── app/                 # Pages and layout
│   └── page.tsx         # Main entry page
├── components/
│   └── ui/              # Reusable UI components (card, button, dialog)
├── context/
│   └── TileContext.tsx  # Context API for tile/grid view toggle
├── pages/
│   └── EmployeeDashboard.tsx # Main dashboard with employee views
```

---

### 🔧 Technologies Used

- ⚛️ React 18 / Next.js
- 💨 Tailwind CSS
- 🎯 TypeScript
- 🧩 Lucide Icons
- 🌐 Context API

---

### 📦 Dependencies

Install with:

```bash
npm install react react-dom next
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react clsx
```

---

### 🌍 Environment

No `.env` is required for this POC.

---
