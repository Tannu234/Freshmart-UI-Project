# 🛒 FreshMart — Grocery E-Commerce UI

A clean, fully navigable grocery e-commerce UI built with **React + Vite**.  
No backend required — pure frontend UI.

---

## 📁 Project Structure

```
freshmart/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Root app + routing + cart state
    ├── theme.js              # Design tokens (colors)
    ├── index.css             # Global styles + Google Fonts
    ├── data/
    │   └── products.js       # Products, categories, nutrition data
    ├── components/
    │   ├── Navbar.jsx        # Top navigation bar
    │   ├── ProductCard.jsx   # Product grid card
    │   └── FormElements.jsx  # Shared: FormSection, FormField, TotalRow, GreenButton
    └── pages/
        ├── HomePage.jsx      # Hero + categories + product grid
        ├── DetailPage.jsx    # Product detail + nutrition + qty
        ├── CheckoutPage.jsx  # Address + payment + order summary
        ├── AuthPage.jsx      # Login / Sign up
        └── SuccessPage.jsx   # Order confirmation
```

---
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Status](https://img.shields.io/badge/Status-Completed-green)


## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```

### 3. Open in browser
```
http://localhost:5173
```

---

## 🏗 Build for production
```bash
npm run build
npm run preview
```

---

## ✨ Features

- **Home page** — Hero banner, category filter, promo strip, product grid
- **Product detail** — image, tags, star rating, qty selector, nutrition table
- **Checkout** — Address form, 3 payment options, promo code, live order summary with discount
- **Login / Sign up** — Tabbed auth, Google sign-in button
- **Order success** — Confirmation screen with order number
- Category-based filtering
- Quantity selector
- Dynamic cart updates
- Promo code support
---
### 🔐 Authentication
- Login form
- Sign up form
- Google sign-in UI
 ---
## 🎨 Tech Stack

| Tool        | Purpose              |
|-------------|----------------------|
| React 18    | UI components        |
| Vite 5      | Dev server + build   |
| Google Fonts| Playfair Display + DM Sans |
| Inline styles | Theming via `theme.js` |

---


