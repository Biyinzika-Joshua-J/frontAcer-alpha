import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-[100vh]">
      <Navbar />
      <div className=" flex-grow">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
