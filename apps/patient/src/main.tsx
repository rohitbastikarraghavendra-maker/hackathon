import { createRoot } from "react-dom/client";
import { Intake } from "./intake/Intake";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./style.css";
createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <Intake />
  </ErrorBoundary>,
);
