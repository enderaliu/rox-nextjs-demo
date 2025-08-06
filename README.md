# 🚀 Rox Next.js + Playwright Demo

This is a demo project showcasing how to use **Next.js (App Router)** with **Playwright** to test:
- UI rendering
- Async API calls
- React Context providers
- Zustand state management

---

## 🔧 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Playwright**
- **React Context**
- **Zustand**
- **Orval-style API mocking**

---

## 🔍 Feature Overview

This project includes several example pages to demonstrate E2E testing with Playwright:

| Page URL               | Description                              |
|------------------------|------------------------------------------|
| `/`                    | Home page with welcome text              |
| `/api-example`         | Fetches and displays mocked API response |
| `/context-example`     | Displays user data via React Context     |
| `/zustand-example`     | Interactive counter using Zustand store  |

---

## 📁 Project Structure

```
rox-nextjs-demo/
├── src/
│   ├── app/
│   │   ├── api-example/page.tsx
│   │   ├── context-example/page.tsx
│   │   ├── zustand-example/page.tsx
│   │   └── zustand/
│   │       └── store.ts
├── tests/
│   ├── ui/
│   │   └── home.spec.ts
│   ├── api/
│   │   └── api-example.spec.ts
│   └── state/
│       ├── context-example.spec.ts
│       └── zustand-example.spec.ts
```

---

## 📦 Scripts

| Script              | Description                            |
|---------------------|----------------------------------------|
| `npm run dev`       | Starts the Next.js development server  |
| `npm run test:e2e`  | Runs all Playwright E2E tests          |

---

## 🧪 Running the Project

### 1. Clone the repository

```bash
git clone https://github.com/enderaliu/rox-nextjs-demo.git
cd rox-nextjs-demo
```

### 2. Install dependencies

```bash
npm install
```

> This installs both Next.js and Playwright dependencies.

### 3. Install Playwright browsers

```bash
npx playwright install
```

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Run E2E tests

```bash
npm run test:e2e
```

This runs all tests in the `tests/` folder. 

---
