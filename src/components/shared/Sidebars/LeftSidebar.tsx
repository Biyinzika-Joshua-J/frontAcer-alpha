"use client";
import React from "react";
import { sidebarLinks } from "@/constants/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faLaptopCode, faDiagramProject, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const icons = [faCircleQuestion, faLaptopCode, faDiagramProject];


const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <section className="z-10 light-border shadow-light-300 sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 dark:shadow-none max-sm:hidden lg:w-[266px] custom-scrollbar">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link, idx) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <>
              <Link
                key={link.route}
                href={link.route}
                className={`${
                  isActive
                    ? "bg-black text-white rounded-lg"
                    : "text-dark300_light900 "
                } flex items-center  gap-4 p-4`}
              >
               {/* <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={20}
                  height={20}
                  className={`${isActive ? "" : "invert-colors"}`}
            />*/}
            <FontAwesomeIcon icon={icons[idx]} />
                <p className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}>
                  {link.label}
                </p>
              </Link>
            </>
          );
        })}
      </div>
      <div className="pt-10">
      <SignedIn>
          <div className="flex flex-col gap-3">
              <Link href={'/learn'}>
                  <button  className="flex items-center  gap-4 p-4 small-medium btn-tertiary text-dark400_light900 light-border-2 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  {/*<Image
                    src={'/assets/icons/sign-up.svg'}
                    alt="sign up icon"
                    height={20}
                    width={20}
                    className="invert-colors lg:hidden"
    />*/}
                   <FontAwesomeIcon icon={faUser}/>
                  <span className="max-lg:hidden">
                    Profile
                  </span>
                  </button>
                </Link>
          
              
                <SignOutButton>
                  <button  className="flex items-center  gap-4 p-4 small-medium btn-tertiary text-dark400_light900 light-border-2 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  {/*<Image
                    src={'/assets/icons/sign-up.svg'}
                    alt="sign up icon"
                    height={20}
                    width={20}
                    className="invert-colors lg:hidden"
    />*/}
                  <FontAwesomeIcon icon={faRightFromBracket}/>
                  <span className="max-lg:hidden">
                    Sign Out
                  </span>
                  </button>
                </SignOutButton>
             
            
          </div>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;