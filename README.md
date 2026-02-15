# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Run Application: npm run dev

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## React + Redux + Saga
Implement Readux + Saga in React here.
npm install react-redux
npm install redux-saga
1. create action.js, reducer.js and store.js files inside the redux folder
2. might be, if we have multiple reducer files then we should include all of them in single one that's why we introduce rootReducer.js

## Redux ToolKit
'createStore' is deprecated. That's why we used the Redux Toolkit for the "Store".

## Setup JSON Sever API
*Used for Fake/Custom Dummy API
Install: npm install json-server
Run the JSON Server: npx json-server db.json
http://localhost:3000/
Change Server Port (if required): npx json-server --watch db.json --port 3500
https://github.com/typicode/json-server

## BootStrap ICON
npm i bootstrap-icons
https://icons.getbootstrap.com/
