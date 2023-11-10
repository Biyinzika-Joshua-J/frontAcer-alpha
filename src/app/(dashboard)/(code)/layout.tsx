import React from "react";
import DashboardNavbar from "@/components/shared/Navbar/DashboardNavbar";
import LeftSidebar from "@/components/shared/Sidebars/LeftSidebar";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-[100vh]">
      
      <div className="">
         

            <section className="  ">
                <div className=" flex flex-col ">
                {children}
                </div>
            </section>

         
        </div>
    </main>
  );
};

export default Layout;
