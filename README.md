# 💼 PocketPay

PocketPay is a cross-platform React Native wallet app that enables users to securely manage their digital funds. The app supports OTP login, mock UPI-style transactions, wallet balance tracking, transaction history, budgeting, and more.

---

## 🚀 Features

- 🔐 OTP-based authentication (Firebase)
- 💳 Digital wallet with balance overview
- 💸 Add & send money (mock UPI/Razorpay integration)
- 📋 Recent transaction history
- 📈 Monthly budget tracker with charts
- 🔔 Push notifications (Firebase Cloud Messaging)
- 📍 Location-based offers (mocked)
- 🌙 Dark mode toggle
- 👆 Biometric authentication (Face ID / Touch ID)
- 🧪 Unit-tested with Jest

---

## 📱 Screens

| Screen             | Description                             |
|--------------------|-----------------------------------------|
| Login              | Mobile OTP-based login                  |
| Wallet             | View balance, add/send money            |
| Transactions       | Filterable list of past transactions    |
| Budget Tracker     | Set & visualize monthly budget          |
| Offers             | View location-based wallet offers       |
| Settings           | Toggle dark mode, biometric, logout     |

---

## 🧱 Tech Stack

- **React Native CLI** (not Expo)
- **TypeScript**
- **React Navigation v7** (Stack + Tab + Nested Stack)
- **Redux Toolkit** or **Zustand** for state management
- **Firebase** (Auth + FCM)
- **Razorpay SDK** (mock integration)
- **Victory Native / Recharts** for charts
- **Reanimated v3 + Lottie** for UI animations
- **Jest + Testing Library** for unit tests

---

