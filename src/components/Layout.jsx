import { Loading } from "./Loading";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const user = true;
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return user ? (
    <div className="w-full flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 bg-amber-200">
        <Outlet />
      </div>
    </div>
  ) : (
    <Loading />
  );
};
