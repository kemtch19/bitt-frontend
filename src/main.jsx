import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/User/UserProvider";
import { AuthProvider } from "./context/Auth/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <UserProvider> */}
    <AuthProvider>
      <App />
    </AuthProvider>
    {/* </UserProvider> */}
  </BrowserRouter>
);
