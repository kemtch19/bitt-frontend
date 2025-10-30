import { Route,  Routes } from "react-router-dom";
import { Feed } from "./page/Feed";
import { Layout } from "./page/Layout";
import { Login } from "./page/Login";
import { Notification } from "./page/Notification";
import { Profile } from "./page/Profile";
import { Message } from "./page/Message";
import { Settings } from "./page/Settings";

export const App = () => {
  const user = true;

  return (
    <Routes>
      <Route path="/" element={!user ? <Login /> : <Layout />}>
        <Route index element={<Feed />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};
