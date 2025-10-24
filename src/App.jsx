import { Route,  Routes } from "react-router-dom";
import { Feed } from "./page/Feed";
import { Layout } from "./components/Layout";
import { Login } from "./page/Login";
import { Saludito } from "./components/Saludito";

export const App = () => {
  // const user = null; /* probar el loading sin ningun usuario */
  const user = true;

  return (
    <Routes>
      <Route path="/" element={!user ? <Login /> : <Layout />}>
        <Route index element={<Feed />} />
        <Route path="/saludo" element={<Saludito />} />
      </Route>
    </Routes>
  );
};
