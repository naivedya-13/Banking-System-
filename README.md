Thanks for the clarification! Based on your assignment specs and stack (React + Node.js + MySQL using MVC pattern), here is a customized `README.md` for your **Simple Banking System Assignment Project**:

---

```markdown
# 🏦 Simple Banking System

A full-stack banking system built using **Node.js**, **React.js**, and **MySQL**, following the **MVC architecture**. This system allows customers to log in, view and manage their transactions, and bankers to monitor customer accounts and transaction histories.

---

## 🎯 Objective

To implement a basic banking application that:
- Handles customer and banker logins
- Enables secure deposits and withdrawals
- Tracks transaction history
- Separates concerns using MVC principles

---

## 🛠 Tech Stack

| Technology | Description                    |
|------------|--------------------------------|
| React.js   | Frontend UI Framework          |
| Node.js    | Backend runtime environment    |
| Express.js | Web framework for Node.js      |
| MySQL      | Relational Database            |
| Axios      | HTTP client for API calls      |
| TailwindCSS| Styling                        |

---

## 🧱 Project Structure

```

root/
├── client/                # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Login, Dashboard, etc.
│   │   └── services/      # Axios API calls
│
├── server/                # Node.js backend (MVC pattern)
│   ├── controllers/       # Business logic
│   ├── models/            # Database queries
│   ├── routes/            # API endpoints
│   └── server.js          # Entry point
│
├── bank.sql               # SQL file for table creation
├── README.md              # Project documentation
└── package.json

````

---

## 🗃️ Database Setup

1. Create a database named **`Bank`**
2. Use the following tables:

### `Users` Table
| Field       | Type         | Description               |
|-------------|--------------|---------------------------|
| id          | INT (PK)     | User ID                   |
| name        | VARCHAR      | Name of the user          |
| email       | VARCHAR      | Unique email              |
| password    | VARCHAR      | Hashed password           |
| role        | ENUM         | 'customer' or 'banker'    |

### `Accounts` Table
| Field           | Type         | Description                          |
|------------------|--------------|--------------------------------------|
| id              | INT (PK)     | Account ID                           |
| user_id         | INT (FK)     | Linked user                          |
| account_number  | VARCHAR      | Unique account number                |
| balance         | DECIMAL      | Account balance                      |

### `Transactions` Table
| Field         | Type         | Description                          |
|---------------|--------------|--------------------------------------|
| id            | INT (PK)     | Transaction ID                       |
| account_id    | INT (FK)     | Linked account                       |
| type          | ENUM         | 'deposit' or 'withdraw'              |
| amount        | DECIMAL      | Transaction amount                   |
| description   | VARCHAR      | Reason or note                       |
| created_at    | TIMESTAMP    | Date and time                        |
| balance_after | DECIMAL      | Balance after this transaction       |

---

## 🔐 Authentication

- On successful login (via `/login` route), a 36-character alphanumeric access token is generated and returned.
- The frontend stores this token (in localStorage or memory).
- For every authenticated API call, the token must be sent in the `Authorization` header.

---

## 👤 Customer Flow

- Log in with email and password
- View accounts and transaction history
- Perform deposit or withdrawal via modal popup
- Withdrawal fails with **"Insufficient Funds"** message if balance is too low

---

## 🧑‍💼 Banker Flow

- Log in with banker credentials
- View all customer accounts
- Click on any account to view their transaction history

---

## 🚀 How to Run the Project

### 1. Backend

```bash
cd server
npm install
node index.js
````

> Make sure MySQL is running and credentials are correctly set inside your config files.

### 2. Frontend

```bash
cd client
npm install
npm run dev
```

## 📌 Notes

* The app does **not** use `.env` for this assignment.
* All configurations like DB credentials are hardcoded in `server/config/db.js` or a similar file.
* Passwords should be hashed using **bcrypt** in production-ready apps.

---

## 📄 License

This project is for educational purposes and assignments only.

---

## 👨‍💻 Developed by

**Naivedya Tripathi**

