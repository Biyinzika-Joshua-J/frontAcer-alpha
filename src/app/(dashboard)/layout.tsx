import React from "react";
import DashboardNavbar from "@/components/shared/Navbar/DashboardNavbar";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-[100vh]">
      <DashboardNavbar/>
      <div className=" flex-grow">{children}</div>
     <footer>Dashboard footer</footer>
    </main>
  );
};

export default Layout;
