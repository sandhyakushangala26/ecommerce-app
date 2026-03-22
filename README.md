# E-Commerce Web Application (Next.js)

##  Live Demo

 https://ecommerce-app-blond-zeta.vercel.app/
The app is deployed using **Vercel** with GitHub integration.

##  Project Overview

This is a simple e-commerce web application built using **Next.js (App Router)** and **TypeScript**.
The application allows users to browse products, view details, manage cart and wishlist, and perform a basic checkout.

##  Features

### Product Listing

* Fetch products from a public API
* Display product image, title, price, and description
* Loading and error handling

###  Product Details

* Dynamic routing (`/product/[id]`)
* Full product information
* Add to Cart & Wishlist

### Cart Functionality

* Add/remove products
* Increase/decrease quantity
* Persistent cart using localStorage
* Subtotal & total calculation

###  Wishlist

* Add/remove items
* Persist data using localStorage

###  Checkout

* Cart summary
* Basic form (name, email, address)


##  Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **State Management:** Context API
* **Deployment:** Vercel

## API Used

### Fake Store API

  https://fakestoreapi.com/

#### Endpoints:

* Get all products:

  https://fakestoreapi.com/products
  
* Get single product:

  https://fakestoreapi.com/products/{id}
  
##  Setup Instructions

### 1️. Clone the repository

```bash
git clone https://github.com/sandhyakushangala26/ecommerce-app.git
cd ecommerce-app
```

### 2️. Install dependencies

```bash
npm install
```

### 3️. Run the development server

```bash
npm run dev
```

### 4️. Open in browser

 http://localhost:3000

---

##  Build for Production

```bash
npm run build
npm start
```



