"use client";
import React from "react";
import UIChallengesEditor from "@/components/codeEditor/ui/Editor";
import DashboardNavbar from "@/components/shared/Navbar/DashboardNavbar";
import Content from "@/components/codeEditor/ui/Content";
import UIEditorProvider from "@/context/UIEditorProvider";
import { useClerk } from "@clerk/nextjs";
// {TODO: Add monaco editor and coding workspace}

const Page = () => {
  const {loaded:isClerkLoaded} = useClerk();
  
  return (
    <div className="min-h-[100vh] flex flex-col">
      <DashboardNavbar isFixed={false} />
      <UIEditorProvider>
        <div className="w-full  flex flex-1">
          <div className="w-[50vw] flex-1 ">
            <Content />
          </div>
          <div className="w-[50vw] flex flex-col flex-1">
            {isClerkLoaded && <UIChallengesEditor />}
          </div>
        </div>
      </UIEditorProvider>
    </div>
  );
};

export default Page;
