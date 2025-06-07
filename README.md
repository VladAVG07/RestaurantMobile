
# RestaurantMobile

A cross-platform mobile application for browsing menus, placing orders, and managing deliveries in a restaurant ecosystem.

## 📱 Features

- Browse restaurant menus with categorized listings
- Place and manage food orders
- User authentication and persistent sessions
- Tab and drawer navigation for intuitive UX
- Dynamic backend integration using Axios
- Smooth, responsive UI built with React Native Paper and RNEUI

## 🧠 Technologies Used

- **Framework:** React Native + Expo
- **Navigation:** React Navigation (Stack, Drawer, Bottom Tabs)
- **Networking:** Axios
- **State & Storage:** Context API, AsyncStorage
- **UI Libraries:** RNEUI, React Native Paper, Vector Icons
- **Utilities:** Query-string, Reanimated, HTMLView

## 🗂️ Project Structure

```
src/
├── api/               # Axios config & API requests
├── components/        # Reusable UI components
├── context/           # Global app context
├── hooks/             # Custom hooks
├── navigation/        # Stack, tab, and drawer navigation
├── screens/           # Individual app views (Home, Cart, etc.)
├── services/          # Business logic, helpers
└── utils/             # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- Expo CLI (`npm install -g expo-cli`)

### Installation

```bash
git clone https://github.com/VladAVG07/RestaurantMobile.git
cd RestaurantMobile
npm install
```

### Running the App

```bash
npm start
```

Use the Expo Go app or an emulator to preview the app.

## 📄 License

MIT License.
