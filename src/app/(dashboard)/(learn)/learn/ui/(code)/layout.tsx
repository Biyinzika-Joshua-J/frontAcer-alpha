import React from "react";
import DashboardNavbar from "@/components/shared/Navbar/DashboardNavbar";



const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      
      <div className="flex">
          

            <section className="bg-red-500 flex min-h-screen flex-1 flex-col  pb-6  max-md:pb-14 ">
                <div className="w-full  ">
                {children}
                </div>
            </section>

         
        </div>
    </main>
  );
};

export default Layout;
