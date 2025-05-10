# 🛒 BAZAR – Local Product Shop (MERN)

**BAZAR** is a fullstack e-commerce web application built using the **MERN stack** (MongoDB, Express, React, Node.js).  
It is dedicated to promoting and selling **local products** such as fruits, vegetables, cold cuts, wines, and other regional specialties.

---

## 🌟 Features

### 🔐 Authentication

- User registration and login via JWT
- User profile page with ability to:
  - edit first name, last name, email, and password
  - logout

### 🛍️ Product Browsing

- Homepage and category-based navigation (`CategoryPage.tsx`, `Products.tsx`)
- Live search bar with:
  - autocomplete product suggestions
  - direct "Add to Cart" button

### 🧺 Shopping Cart

- Add products from any view (homepage, search, category)
- Modify cart:
  - Increase/decrease quantity
  - Remove items
- Cart is unique and linked to each authenticated user
- Stored and synchronized in MongoDB
- Instant updates using Redux Toolkit

### ✅ Order Confirmation

- "Validate Order" button:
  - Clears the cart
  - Shows a confirmation message

### 📄 Static Pages

- **Our Products**: Full product catalog
- **Our Producers**: Static info page about local producers
- **Our Stores**: Under construction

---

## 🧪 Backend Testing (Jest)

Implemented tests for:

- Server connection
- Authentication (`/api/auth`)

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/bazar.git
cd bazar
```

### 2. Install and configure the backend

```bash
cd server
npm install
```

Create a `.env` file in `/server`:

```env
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_secret
```

Start the backend:

```bash
npm run dev
```

### 3. Install and run the frontend

```bash
cd ../client
npm install
npm run dev
```

The frontend should be available at: [http://localhost:3000](http://localhost:3000)  
The backend at: [http://localhost:5000](http://localhost:5000)

---

## 📁 Project Structure

```
bazar/
├── client/                # React frontend
│   └── src/
│       ├── pages/         # Page components (Cart, Login, Register, Profile, etc.)
│       ├── components/    # UI components (Header, Footer, Product Cards, etc.)
│       ├── redux/         # Redux store, slices, hooks
│       ├── contexts/      # UserContext (login/logout)
│       └── ...
│
├── server/                # Express backend
│   └── src/
│       ├── controllers/   # Auth, product, cart logic
│       ├── routes/        # Express routes (auth, cart, product)
│       ├── models/        # Mongoose models (User, Product)
│       ├── middlewares/   # Auth middleware (JWT)
│       ├── tests/         # Jest test files
│       └── ...
```

---

## 🔮 Planned Improvements – v2

- Add a **map** component to locate stores (`Store.tsx`)
- Build a dedicated **"Promotions / New arrivals"** page from `HighlightCard.tsx`
- Add **Stripe integration** for online payment
- Extend profile page to include:
  - user address
  - payment preferences

---

## 🧾 License

This project is open-source and free to use for educational or personal use.

---

## 👨‍💻 Author

This project is part of a personal initiative to:

- deepen my understanding of the MERN stack,
- apply real-world fullstack development patterns,
- grow my GitHub portfolio through practical, complete applications.

**Feel free to contribute, fork, or provide feedback!**
