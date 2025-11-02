import { Loading } from "../components/Loading";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";

export const Layout = () => {
  const user = true;
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return user ? (
    <div className="flex w-full h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 bg-[#efeff0]">
        <Outlet />
      </div>

      {/* menú para controlar el sidebar */}
      {sidebarOpen ? (
        <X
          className="absolute top-3 right-3 z-100 bg-white rounded-md size-10 text-gray-600 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      ) : (
        <MenuIcon
          className="absolute top-3 right-3 z-100 bg-white rounded-md size-10 text-gray-600 sm:hidden"
          onClick={() => setSidebarOpen(true)}
        />
      )}
    </div>
  ) : (
    <Loading />
  );
};
