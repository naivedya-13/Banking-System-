```markdown
# Banking System

A full-stack banking system with role-based access control, built with **Node.js (Express, MySQL)** backend and **React (Vite, Tailwind CSS)** frontend.

---

## Features

- **User Roles:** Customer and Banker with distinct permissions.
- **Authentication:** Secure registration, login, and logout using JWT tokens.
- **Customer Capabilities:** View own accounts, deposit, withdraw, and view transactions.
- **Banker Capabilities:** View all customers, all accounts, and transactions across accounts.
- **Transaction Logging:** Detailed transaction history with balance updates.
- **Responsive UI:** Built with React and styled using Tailwind CSS.

---

## Getting Started

### Prerequisites

- Node.js (v16+)
- MySQL Server

---

### Backend Setup

1. Clone the repository and navigate to the backend folder:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure your MySQL database and update credentials in `server/config/db.js`.

4. Create the required database and tables (example schema provided in the project).

5. Start the backend server:
   ```
   node server.js
   ```
   The backend runs on `http://localhost:5000` by default.

---

### Frontend Setup

1. Navigate to the frontend folder:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend dev server:
   ```
   npm run dev
   ```
   The frontend runs on `http://localhost:5173` by default.

---

## Usage

- Register as a **customer** or **banker**.
- Login to access your dashboard.
- Customers can manage their accounts and transactions.
- Bankers can view all customers, accounts, and transactions.

---

## API Endpoints Overview

### Authentication

- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login and receive JWT token.
- `POST /api/auth/logout` - Logout and invalidate token.

### Customer Routes (Require Customer Token)

- `GET /api/customer/accounts` - List customer’s accounts.
- `GET /api/customer/accounts/:accountId/transactions` - List transactions for an account.
- `POST /api/customer/accounts/:accountId/deposit` - Deposit funds.
- `POST /api/customer/accounts/:accountId/withdraw` - Withdraw funds.

### Banker Routes (Require Banker Token)

- `GET /api/banker/customers` - List all customers.
- `GET /api/banker/accounts` - List all accounts with user info.
- `GET /api/banker/accounts/:accountId/transactions` - List transactions for any account.

---

## Technologies Used

- **Backend:** Node.js, Express, MySQL, JWT, bcrypt
- **Frontend:** React, Vite, Tailwind CSS, Axios, React Router
- **Authentication:** JWT tokens with role-based access control

---

## Folder Structure

```
/server       # Backend API source code
/client       # Frontend React app source code
```

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or contributions, please open an issue or submit a pull request.

---

**Happy Banking!**
```

Citations:
[1] https://github.com/collector-bank/readme-template.md
[2] https://github.com/eitozx/Bank-Management-System/blob/master/README.md
[3] https://github.com/adrianhajdin/banking/blob/main/README.md
[4] https://github.com/IBM/example-bank/blob/main/README.md
[5] https://github.com/saadmk11/banking-system/blob/master/README.md
[6] https://github.com/saadmk11/banking-system
[7] https://github.com/matejavulic/E-BANK-Web-App/blob/master/README.md
[8] https://github.com/krishnadey30/Bank-Management-System/blob/master/README.md
[9] https://github.com/mishrkavita/Online-Banking-System-using-Java/blob/master/README.md
[10] https://github.com/singhnk288/Banking-Management-System-in-Flask/blob/master/README.md

---
Answer from Perplexity: pplx.ai/share
