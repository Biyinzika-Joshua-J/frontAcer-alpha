"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import UIChallengesEditor from "@/components/codeEditor/ui/Editor";
import DashboardNavbar from "@/components/shared/Navbar/DashboardNavbar";
// {TODO: Add monaco editor and coding workspace}

const page = () => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <DashboardNavbar isFixed={false}/>
    <div className="w-full  flex flex-1">
      <div className="w-[50vw] flex-1 ">Description</div>
      <div className="w-[50vw] flex flex-col flex-1">
        <UIChallengesEditor/>
      </div>
    </div>
    </div>
  );
};

export default page;
