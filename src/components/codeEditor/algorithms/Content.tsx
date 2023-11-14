import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUIEditorContext } from "@/context/UIEditorProvider";

const tabBtnText = ["Description", "Hints", "Output", "Demo", "Solution"];

const Content = () => {
  const [activeContentTab, setActiveContentTab] = useState(0);
  const {srcDocument} = useUIEditorContext();
  return (
    <div className="mr-2 flex flex-col ">
      <div className="h-[50px] border-b-[0px] bg-[#A9A9A9] border-[#303134] w-full ">
        <div className=" h-full flex items-center">
          {tabBtnText.map((text, idx) => (
            <Button
              key={idx}
              className={`${activeContentTab===idx&&'text-black font-bold underline-offset-4 underline'}`}
              onClick={()=>setActiveContentTab(idx)}
            >
              {text}
            </Button>
          ))}
        </div>
      </div>
      <div className="h-[75vh]  overflow-y-auto overflow-hidden py-6 custom-scrollbar px-4">
        {activeContentTab === 0 && <p>Description Algos</p>}
        {activeContentTab === 1 && <p>Hints!</p>}
        {activeContentTab === 2 && <p>Output</p>}
        {activeContentTab === 3 && <p>Demo!</p>}
        {activeContentTab === 4 && <p>Solution</p>}
      </div>
    </div>
  );
};

export default Content;
