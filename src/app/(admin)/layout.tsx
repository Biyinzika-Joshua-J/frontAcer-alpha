import React from "react";
import CheckUserRole from "@/components/admin/CheckUserRole";
import Link from "next/link";
const Layout = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <>
    {/*TODO: restrict the admin page to only admins*/}
    <main className="flex flex-col min-h-[100vh]">
      <nav className="">
        <div className="mx-auto w-[90%] py-2">
          <div className="flex items-center justify-between">
            <div className="">
             <span className="text-3xl font-extrabold">
                <Link href={'/admin'}>
                Admin Panel
                </Link>
             </span>
            </div>
            <div className="">
              items
            </div>
          </div>
        </div>
      </nav>
      <div className=" flex-grow w-[90%] mx-auto py-6">{children}</div>
      <footer className="  py-6 text-center bg-black text-white"><Link href='/'>frontAcer</Link></footer>
    </main>
    </>
  );
};

export default Layout;
