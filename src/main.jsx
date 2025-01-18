import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <App />
    <Footer />
  </BrowserRouter>,
);
