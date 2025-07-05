

# 🛒 E-Com Store

An elegant, **responsive e-commerce web app** built with cutting-edge tools like **Next.js 14**, **Stripe**, **Tailwind CSS**, and **Zustand** for smooth user experience and modern design.

---

## 🚀 How to Run the Project

### 🔁 Clone the Repository

```bash
git clone https://github.com/Keerthiks16/Niran---Ecom-Jewel-Website-with-Stripe-Integration.git
cd Niran---Ecom-Jewel-Website-with-Stripe-Integration
```

### 📦 Install Dependencies

```bash
npm install
```

### 🔐 Set Up Environment Variables

Create a `.env.local` file in the root and add:

```env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> ⚠️ Replace with your actual Stripe API keys from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys).

### 🧪 Run the Development Server

```bash
npm run dev
```

### 🌐 Open in Browser

Visit 👉 [http://localhost:3000](http://localhost:3000)

---

## 🛠 Tech Stack Used

| 🔧 Tool / Library           | 💡 Purpose                          |
| --------------------------- | ----------------------------------- |
| **Next.js 14 (App Router)** | Full-stack React framework          |
| **Stripe**                  | Payment gateway + product backend   |
| **Tailwind CSS**            | Utility-first modern styling        |
| **ShadCN/UI**               | Pre-built styled components         |
| **Zustand**                 | Lightweight state management (cart) |
| **TypeScript**              | Type safety across the codebase     |
| **Lucide React**            | Crisp and modern icon set           |

---

## ✨ Features

- ✅ **Stripe-powered product listings and secure checkout**
- 🖼️ **Dynamic product carousel & responsive product cards**
- 🛒 **Add-to-cart with quantity selection**
- 💾 **Persistent cart using Zustand middleware**
- 🔐 **Stripe-hosted secure payment flow**
- 🎨 **Modern UI with Tailwind CSS + ShadCN**

---

## 📄 Notes & Assumptions

- 📦 All product data is managed via the [Stripe Dashboard](https://dashboard.stripe.com/products).
- 🔐 Payments are handled by **Stripe Checkout**, ensuring no card data ever hits your server.
- 🧩 Only one backend API route is used (`/api/checkout`) for creating checkout sessions.
- ⚠️ Stripe product IDs are assumed to be valid — URL tampering isn’t handled in this version.
- ✅ A real Stripe account is required to test production payments (test mode works freely).

