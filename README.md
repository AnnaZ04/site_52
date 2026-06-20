# Maison Meuble

Maison Meuble is a responsive furniture e-commerce website built with React, Vite, and Redux Toolkit. The project allows users to browse furniture categories, view product details, search products, add items to the cart, and complete an order.

## Live Demo

[View Maison Meuble on Vercel](https://site-52-7jut.vercel.app)

## Features

- Responsive homepage
- Multi-page navigation with React Router
- Product categories
- Product details page
- Product search
- Shopping cart
- Add, remove, increase, and decrease product quantities
- Cart persistence with localStorage
- Login page
- Registration page
- Checkout/order form
- Informational pages: About, Payment and Delivery, Guarantee, Contacts, Promotions
- Responsive design for desktop, tablet, and mobile

## Tech Stack

- React
- Vite
- Redux Toolkit
- React Redux
- React Router DOM
- Lucide React
- CSS
- Vercel

## Installation

Install the dependencies:

```bash
npm install
```

## Running the Project

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, for example:

```text
http://localhost:5173/
```

## Project Structure
```text
src/
├── app/
├── components/
├── features/
├── pages/
├── routes/
└── shared/
```

## Current Status

The frontend is functional and deployed on Vercel. Product data is currently stored locally in:

```text
src/shared/data/products.js
```

The cart is managed with Redux Toolkit and saved in localStorage so that cart items remain after page reload.