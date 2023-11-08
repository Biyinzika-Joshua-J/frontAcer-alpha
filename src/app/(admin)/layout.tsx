import React from "react";
import CheckUserRole from "@/components/admin/CheckUserRole";
const Layout = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <>
    {/*TODO: restrict the admin page to only admins*/}
    <main className="flex flex-col min-h-[100vh]">
      <nav>admin nav</nav>
      <div className=" flex-grow">{children}</div>
      <footer>admin footer</footer>
    </main>
    </>
  );
};

export default Layout;
