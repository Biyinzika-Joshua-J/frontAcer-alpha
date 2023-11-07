import React from "react";
import DashboardNavbar from "@/components/shared/Navbar/DashboardNavbar";
import LeftSidebar from "@/components/shared/Sidebars/LeftSidebar";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-[100vh]">
      <DashboardNavbar/>
      <div className="flex">
            <LeftSidebar/>

            <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
                <div className="mx-auto w-full max-w-5xl bg-red-500">
                {children}
                </div>
            </section>

         
        </div>
    </main>
  );
};

export default Layout;
