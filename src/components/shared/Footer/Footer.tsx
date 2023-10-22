import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-6 pt-10 px-4">
      <div className="mx-auto w-[80%] text-white">
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <div className="">
            <h2 className="text-3xl pb-2 text-white font-bold">Links</h2>
            <ul className="">
              <li className="py-2">
                <Link
                  href={"/"}
                  className="text-lg text-gray-200 hover:underline underline-offset-4"
                >
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href={"/"}
                  className="text-lg text-gray-200 hover:underline underline-offset-4"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-3xl pb-2 text-white font-bold">
              Authentication
            </h2>
            <ul className="">
              <li className="py-2">
                <Link
                  href={"/"}
                  className="text-lg text-gray-200 hover:underline underline-offset-4"
                >
                  Sign-in
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href={"/"}
                  className="text-lg text-gray-200 hover:underline underline-offset-4"
                >
                  Sing-up
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-3xl pb-2 text-white font-bold">Feedback</h2>
            <ul className="">
              <li className="py-2">
                <Link
                  href={"/"}
                  className="text-lg text-gray-200 hover:underline underline-offset-4"
                >
                  Feedback form
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href={"/"}
                  className="text-lg text-gray-200 hover:underline underline-offset-4"
                >
                  WhatsApp
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-white h-[1px] w-full mt-10" />
        <div className="text-center pt-6">
          <span className="text-gray-200 ">© Copyright fontAcer.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
