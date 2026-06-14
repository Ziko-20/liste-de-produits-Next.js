# 🛍️ Product Store

A beginner-friendly e-commerce app built with **Next.js** and **Tailwind CSS**, using the [FakeStore API](https://fakestoreapi.com/).

---

## ✨ Features

- 📋 Browse a list of products
- 🔍 View product details (description, category, rating)
- 🛒 Add products to cart
- 🗑️ Remove products from cart
- 💾 Cart saved with `localStorage` (persists on page refresh)

---

## 🛠️ Tech Stack

| Tech | Usage |
|---|---|
| [Next.js 14](https://nextjs.org/) | React framework |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [FakeStore API](https://fakestoreapi.com/) | Products data |
| [React Icons](https://react-icons.github.io/react-icons/) | Icons |
| `localStorage` | Cart persistence |

---

## 📁 Project Structure

```
app/
├── globals.css          # Global styles
├── layout.tsx           # Root layout
├── page.tsx             # Home page (/)
├── cart/
│   └── page.tsx         # Shopping cart (/cart)
└── products/
    ├── page.tsx         # Product list (/products)
    └── [id]/
        └── page.tsx     # Product detail (/products/:id)
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Ziko-20/<your-repo-name>.git

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📸 Pages

| Page | Route |
|---|---|
| Product List | `/products` |
| Product Detail | `/products/:id` |
| Shopping Cart | `/cart` |

---

## 👨‍💻 Author

**Zakaria Lemchaouri**
<img width="1897" height="916" alt="Capture d&#39;écran 2026-06-14 193321" src="https://github.com/user-attachments/assets/a697d590-e76d-481b-8fb9-f542f87b86ea" />
<img width="1918" height="916" alt="image" src="https://github.com/user-attachments/assets/abe0bb4a-6e87-432a-a3ec-e0fc89a2e7fe" />
<img width="1917" height="920" alt="image" src="https://github.com/user-attachments/assets/cf878ecb-b50a-4f64-a80d-c5746ef81be9" />



[![Portfolio](https://img.shields.io/badge/Portfolio-000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-zakaria-lemchaouri.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ziko-20)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/zakaria-lemchaouri/)
