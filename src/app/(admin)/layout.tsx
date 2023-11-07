import React from "react";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-[100vh]">
      <nav>admin nav</nav>
      <div className=" flex-grow">{children}</div>
      <footer>admin footer</footer>
    </main>
  );
};

export default Layout;
