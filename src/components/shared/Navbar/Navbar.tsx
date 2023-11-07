import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import Link from "next/link";
import { SignedIn, UserButton, SignedOut } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav>
      <div className="mx-auto md:w-[80%] w-[95%]">
        <div className="flex justify-between py-4 items-center">
          <div className="">
            <span className="text-3xl ">
              front
              <span className="font-extrabold text-primary-main">Acer</span>
            </span>
          </div>
          <SignedOut>
            <div className="">
              <Link href="/sign-in" className="mr-6 font-bold uppercase">
                Sign In
              </Link>
              <ButtonPrimary
                link="/sign-up"
                text="Sign Up"
                classes="bg-black text-white hover:bg-gray-900 uppercase"
              />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                },
                variables: {
                  colorPrimary: "#ff7000",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
      <hr className="h-[1px] w-full bg-black" />
    </nav>
  );
};

export default Navbar;
