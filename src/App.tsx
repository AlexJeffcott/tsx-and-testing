import { Router } from "./routes";
import { ErrorBoundary } from "./components";

export default function App() {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}
