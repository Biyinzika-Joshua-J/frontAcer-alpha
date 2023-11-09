import React from "react";
import DashboardNavbar from "@/components/shared/Navbar/DashboardNavbar";
import LeftSidebar from "@/components/shared/Sidebars/LeftSidebar";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-[100vh]">
      <DashboardNavbar/>
      <div className="flex">
         

            <section className="flex min-h-screen flex-1  pt-36 ">
                <div className="">
                {children}
                </div>
            </section>

         
        </div>
    </main>
  );
};

export default Layout;
