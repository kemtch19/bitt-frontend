import { Loading } from "../components/Loading";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const user = true;
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return user ? (
    <div className="flex w-full h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div>
        <Outlet />
      </div>
    </div>
  ) : (
    <Loading />
  );
};
