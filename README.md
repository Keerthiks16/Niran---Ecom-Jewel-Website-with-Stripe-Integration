E-Com Store
An elegant and responsive e-commerce web app built with Next.js 14, Stripe, Tailwind CSS, and Zustand for state management.

🚀 How to Run the Project
Clone the Repository

bash
Copy
Edit
git clone https://github.com/your-username/ecom-store.git
cd ecom-store
Install Dependencies

bash
Copy
Edit
npm install
Set Up Environment Variables

Create a .env.local file at the root and add:

env
Copy
Edit
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
Replace the Stripe keys with your actual Stripe API keys.

Run the Development Server

bash
Copy
Edit
npm run dev
Open in Browser

Navigate to http://localhost:3000

🛠 Tech Stack Used
Tool / Library	Purpose
Next.js 14 (App Router)	Frontend + Backend framework
Stripe	Payment gateway and product management
Tailwind CSS	Utility-first styling
ShadCN/UI	Elegant UI components
Zustand	Lightweight global state for cart
TypeScript	Type-safe development
Lucide React	Icons used across the UI

📌 Features
Stripe-powered product listing and checkout

Responsive product carousel and detail pages

Add-to-cart with quantity controls

Persistent cart using zustand/middleware

Checkout integration with Stripe-hosted secure payment

Clean UI with Tailwind + ShadCN

📄 Notes / Assumptions
All products and pricing are managed via Stripe Dashboard.

Stripe Checkout handles all payment logic securely; no sensitive card data is handled in-app.

Assumes the user will not modify Stripe product IDs manually in the URL.

This project is frontend-heavy with minimal backend code (just one API route).

You must have a valid Stripe account to test real payments.