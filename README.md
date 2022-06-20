# tsx-and-testing

A template to bootstrap React Typescript projects with testing set up

## Steps

1. Create repository in github with a readme, license and .gitignore
2. Start codespace
3. init npm project

```shell
npm init -y
```

4. Replace package.json

```json
{
  "name": "tsx-and-testing",
  "version": "1.0.0",
  "description": "A template to bootstrap React Typescript projects with testing set up",
  "type": "module",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/AlexJeffcott/tsx-and-testing.git"
  },
  "keywords": ["React", "Typescript", "tsx", "Vite", "Vitest", "Cypress"],
  "author": "Alex Jeffcott",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/AlexJeffcott/tsx-and-testing/issues"
  },
  "homepage": "https://github.com/AlexJeffcott/tsx-and-testing#readme",
  "engines": {
    "node": ">=16.X.X",
    "npm": ">=8.X.X",
    "yarn": "USE_NPM_PLEASE"
  },
  "scripts": {
    "start": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "format": "prettier --write ."
  }
}
```

5. Install non-testing deps

```shell
npm i react react-dom react-router-dom
npm i -D @types/react @types/react-dom @vitejs/plugin-react prettier typescript vite
```

6. Configure non-testing deps

```shell
printf "import { defineConfig } from 'vite';import react from '@vitejs/plugin-react';\n\nexport default defineConfig({plugins: [react()]})" > vite.config.ts

printf '{"compilerOptions": {"target": "ESNext","useDefineForClassFields": true,"lib": ["DOM", "DOM.Iterable", "ESNext"],"allowJs": false,"skipLibCheck": true,"esModuleInterop": false,"allowSyntheticDefaultImports": true,"strict": true,"forceConsistentCasingInFileNames": true,"module": "ESNext","moduleResolution": "Node","resolveJsonModule": true,"isolatedModules": true,"noEmit": true,"jsx": "react-jsx"},"include": ["src"],"references": [{ "path": "./tsconfig.node.json" }]}' > tsconfig.json

printf '{"compilerOptions": {"composite": true,"module": "ESNext","moduleResolution": "Node"},"include": ["vite.config.ts"]}' > tsconfig.node.json

printf '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>TSX and Testing</title></head><body><div id="root"></div><script type="module" src="/src/main.tsx"></script></body></html>' > index.html

mkdir src
mkdir src/routes
mkdir src/routes/landing
mkdir src/components
mkdir src/components/lazyLoader
mkdir src/components/errorBoundary

printf '/// <reference types="vite/client" />' > src/vite-env.d.ts

printf "import React from 'react';import ReactDOM from 'react-dom/client';import App from './App';import './index.css';\n\nReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode><App /></React.StrictMode>)" > src/main.tsx


printf "body {margin: 0;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu','Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}" > src/index.css

printf "import { Router } from './routes';import { ErrorBoundary } from './components';\n\nexport default function App() {return(<ErrorBoundary><Router /></ErrorBoundary>)}" > src/App.tsx

printf 'import React, { Suspense, lazy } from "react";import { BrowserRouter, Routes, Route } from "react-router-dom";import { LazyLoader } from "../components";\n\nconst LandingPage = lazy(() => import("./landing"));\n\nexport const Router = () => (<BrowserRouter><Suspense fallback={<LazyLoader />}><Routes><Route path="/" element={<LandingPage />} /></Routes></Suspense></BrowserRouter>);' > src/routes/index.tsx

printf 'import "./index.css";\n\nexport default function Landing() {return(<h1>Hello TSX and Testing!</h1>)};' > src/routes/landing/index.tsx

printf 'h1 {font-size: 4rem;}' > src/routes/landing/index.css

printf "export { ErrorBoundary } from './errorBoundary';export { LazyLoader } from './lazyLoader';" > src/components/index.ts

printf "import React from 'react';\n\nexport const LazyLoader = () => <div>loading</div>;" > src/components/lazyLoader/index.tsx

printf "import React, { Component, ErrorInfo, ReactNode } from 'react';\n\ninterface Props {children: ReactNode;}\n\ninterface State {hasError: boolean;}\n\nclass ErrorBoundary extends Component<Props, State> {public state: State = {hasError: false};\n\npublic static getDerivedStateFromError(_: Error): State {console.error(_);return { hasError: true };}\n\npublic componentDidCatch(error: Error, errorInfo: ErrorInfo) {console.error('Uncaught error:', error, errorInfo);}\n\npublic render() {if (this.state.hasError) {return <h1>Sorry.. there was an error</h1>;}\n\nreturn this.props.children;}}\n\nexport { ErrorBoundary };" > src/components/errorBoundary/index.tsx

npm run format
npm start
```
