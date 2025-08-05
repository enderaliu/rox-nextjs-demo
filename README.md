# 🧪 Rox Next.js Demo — E2E Testing with Playwright

This is a sample **Next.js 14** application demonstrating **decoupled end-to-end testing** using **Playwright** and **TypeScript**.

It showcases a minimal setup where the **app logic (pages/components)** is separated from the **test logic**, following best practices like the **Page Object Model (POM)**.

---

## ⚙️ Tech Stack

- [Next.js](https://nextjs.org)
- [Playwright](https://playwright.dev)
- TypeScript
- Dotenv (for environment variables)
- Page Object Model (POM) structure

---

## 📁 Project Structure

```
rox-nextjs-demo/
├── public/
├── src/
│   └── app/
│       └── page.tsx           # Main Next.js page
├── tests/
│   └── home.spec.ts           # Playwright test
├── .env                       # Environment variables
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/enderaliu/rox-nextjs-demo.git
cd rox-nextjs-demo
```

### 2. Install dependencies

```bash
npm install
```

> Note: This will install both Next.js and Playwright-related dependencies.

### 3. Install Playwright browsers

```bash
npx playwright install
```

---

## 🧪 Run the Project

### Start the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

### Run E2E tests with Playwright

```bash
npm run test:e2e
```

> This will run all tests located in the `tests/` directory.

---

## 📦 Scripts

| Script              | Description                      |
|---------------------|----------------------------------|
| `npm run dev`       | Starts the Next.js dev server    |
| `npm run test:e2e`  | Runs Playwright end-to-end tests |

---

