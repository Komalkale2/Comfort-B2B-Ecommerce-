# 🧶 Komal Handmade – MERN E-Commerce Website

A full-stack **MERN (MongoDB, Express, React, Node.js)** based e-commerce platform for selling **handmade products**, designed with a focus on simplicity, security, and smooth user experience.

---

## 🚀 Features

### 🛍️ User Features
- Browse and view handmade products
- Add products to the cart
- Place and track orders
- Create custom product orders
- Secure checkout system with order summary
- Responsive design for mobile and desktop

### 🧑‍💼 Admin Features
- Admin authentication with JWT
- Manage products (add, edit, delete)
- View and manage orders
- Upload product images to Cloudinary
- Manage custom orders submitted by users

---

## 🏗️ Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React.js, React Router DOM, Axios, Framer Motion |
| **Backend** | Node.js, Express.js, Mongoose |
| **Database** | MongoDB |
| **Authentication** | JWT (JSON Web Token) |
| **Cloud Storage** | Cloudinary |
| **Other Tools** | dotenv, bcryptjs, cors |

---

## ⚙️ Project Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Komalkale2/komal-handmade-mern.git
cd komal-handmade-mern
````

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:

```env
MONGO_URI=mongodb://localhost:27017/komalhandmade
PORT=5000
USE_CLOUDINARY=true
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
ADMIN_EMAIL=admin@komal.com
ADMIN_PASSWORD=12345
JWT_SECRET=your_jwt_secret
```

Run the backend server:

```bash
node server.js
```

Server will run at ➜ **[http://localhost:5000](http://localhost:5000)**

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

Frontend will run at ➜ **[http://localhost:3000](http://localhost:3000)**

---

## 🗂️ Folder Structure

```
komal-handmade-mern/
│
├── backend/
│   ├── config_db.js
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── uploads/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── README.md
│
└── .env.example
```

---

## 🧠 How It Works

* The **frontend (React)** consumes REST APIs served by the **backend (Express)**.
* **MongoDB** stores product, order, and user data.
* Admin authentication uses **JWT tokens**.
* Images are uploaded and stored securely via **Cloudinary**.
* Custom order requests allow users to personalize handmade products.

---

## 📸 Screenshots (Optional)

*(Add screenshots later for a better GitHub preview)*

---

## 🧩 Future Enhancements

* Integrate payment gateway (Razorpay / Stripe)
* Add product reviews and ratings
* Admin dashboard analytics
* Wishlist functionality
* Email order notifications

---

## 🤝 Contributing

Pull requests are welcome!
If you’d like to contribute, please fork the repo and create a new branch for your feature or fix.

---

## 🧑‍💻 Author

**👩 Komal Kale**
MERN Stack Developer
📧 [admin@komal.com](mailto:admin@komal.com)
🌐 [GitHub Profile](https://github.com/Komalkale2)

---

## 🛡️ License

This project is licensed under the **MIT License** – feel free to use and modify it.

---

> 💫 *"Handmade with code and creativity — just like every product in Komal Handmade."*
