import React from "react";
import CheckUserRole from "@/components/admin/CheckUserRole";
import Link from "next/link";
const Layout = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <>
    {/*TODO: restrict the admin page to only admins*/}
    <main className="flex flex-col min-h-[100vh]">
      <nav className="bg-black">
        <div className="mx-auto w-[90%] py-2">
          <div className="flex items-center justify-between">
            <div className="">
             <span className="text-3xl font-extrabold text-white">
                <Link href={'/admin'}>
                Admin Panel
                </Link>
             </span>
            </div>
            <div className="">
              <Link href={'/learn'} className="text-white mx-2">
                Dashbaord
              </Link>
              <Link href={'/admin/add_quiz_question'} className="text-white mx-2">
                Add Quiz
              </Link>
              <Link href={'/admin/add_ui_challenge'} className="text-white mx-2">
                Add UI
              </Link>
              <Link href={'/admin/add_algo_challenge'} className="text-white mx-2">
                Add Algo
              </Link>
              <Link href={'/admin/add_course'} className="text-white mx-2">
                Add Course
              </Link>
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
