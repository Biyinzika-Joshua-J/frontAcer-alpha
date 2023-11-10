import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import Link from "next/link";
import { SignedIn, UserButton, SignedOut } from "@clerk/nextjs";
import Theme from "./Theme";

interface Props {
  isFixed : boolean;
}

const DashboardNavbar = ({isFixed} :Props) => {
  return (
    <nav className={`shadow-lg ${isFixed&&'fixed'} z-50 w-full bg-white`}>
      <div className="w-[95%] mx-auto flex items-center justify-between py-6">
        <div className="">
          <span className="text-3xl ">
            front
            <span className="font-extrabold text-primary-main">Acer</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
            <div className="mr-4">
                <Theme/>
            </div>
          <div className="ml-4">
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
      </div>
    </nav>
  );
};

export default DashboardNavbar;
