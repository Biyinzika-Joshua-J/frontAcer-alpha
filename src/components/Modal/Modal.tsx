"use client";
import React from "react";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ children }: { children: any }) => {
  return (
    <div className="hidden">
      <div
        onClick={() => {}}
        className="h-screen w-full fixed top-0 left-0 bg-black opacity-60"
      ></div>
      <div className="fixed md:w-[70%] w-[90%] rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-md z-50">
        <div className="flex items-center justify-between">
          <div className=""></div>
          <div className="">
            <Button>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-black"
                size="2x"
              />
            </Button>
          </div>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
