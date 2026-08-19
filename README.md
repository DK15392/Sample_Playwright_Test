# Playwright Login and Logout Automation

Simple Playwright automation framework written in TypeScript. It uses page objects, environment variables, and the Sauce Demo site as the default test application.

## Setup

```bash
npm install
npx playwright install chromium
cp .env.example .env
```

Update `.env` when testing another application:

```env
BASE_URL=https://your-application.example
TEST_USERNAME=your-user
TEST_PASSWORD=your-password
```

## Run tests

```bash
npm test
npm run test:headed
npm run typecheck
npm run report
```

The test verifies a successful login, opens the application menu, logs out, and verifies the user returns to the login page.

## Project structure

```text
src/pages/      Page Object Model classes
tests/          Playwright test specifications
playwright.config.ts
```