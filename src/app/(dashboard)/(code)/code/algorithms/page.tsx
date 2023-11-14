"use client"
import UIChallengesEditor from '@/components/codeEditor/ui/Editor'
import DashboardNavbar from '@/components/shared/Navbar/DashboardNavbar'
import UIEditorProvider from '@/context/UIEditorProvider'
import { useClerk } from '@clerk/nextjs'
import Content from "@/components/codeEditor/algorithms/Content";
import React from 'react'
import AlgorithmsEditor from '@/components/codeEditor/algorithms/Editor'

const Page = () => {
    const { loaded: isClerkLoaded } = useClerk();
  return (
    <div className="min-h-[100vh] flex flex-col">
      <DashboardNavbar isFixed={false} />
      <UIEditorProvider>
        <div className="w-full  flex flex-1">
          <div className="w-[50vw] flex-1 ">
            <Content />
          </div>
          <div className="w-[50vw] flex flex-col flex-1">
            {/* Only load Monaco editor after Clerk has loaded! else it will cause a bug */}
            {isClerkLoaded && <AlgorithmsEditor />}
          </div>
        </div>
      </UIEditorProvider>
    </div>
  )
}

export default Page