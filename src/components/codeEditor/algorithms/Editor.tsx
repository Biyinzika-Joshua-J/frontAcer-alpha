"use client";
import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { useUIEditorContext } from "@/context/UIEditorProvider";
import { DropdownMenuCheckboxes } from "@/components/codeEditor/algorithms/dropdown/MenuDropdown";


const files = {
  "main.js": {
    name: "main.js",
    language: "javascript",
    value: "//JavaScript code here",
  },
  "main.py": {
    name: "main.py",
    language: "python",
    value: "# Python Code here",
  },
  
};

const AlgorithmsEditor = () => {
  const [fileName, setFileName] = useState("main.js");
  const file = files[fileName];
  const [python, setPython] = useState('');
  const [js, setJs] = useState('');
  const [setsrcDoc, setSrcDoc] = useState('');
  const {setSrcDocumentUI} = useUIEditorContext();



  function handleEditorChange(value:any){
    if (file.name === "main.py"){
        setPython(value);
    }else if (file.name === "script.js"){
        setJs(value)
    }
  }

  useEffect(()=>{

    const timeout = setTimeout(()=>{
        setSrcDoc(``)
    }, 250);

    return ()=>clearInterval(timeout);
    

  }, [python, js]);

  return (
    <div className={`flex flex-col h-full `}>
      <div className=" editor-ui__filebtns bg-[#303134]">
        <div className="flex items-center  h-full">
          <DropdownMenuCheckboxes setFileName={setFileName}/>
        </div>
      </div>
      <div className="flex-1">
        <Editor
          theme={"vs-dark"}
          height={"100%"}
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
          className="flex-1 "
          onChange={handleEditorChange}
        />
      </div>
      <div className=" editor-ui__savebtn flex-1 bg-[#303134]">
        <div className="flex items-center  h-full">
            <Button className="bg-primary-main text-white">
                Console
            </Button>
            <Button className="bg-primary-main text-white">
                Run
            </Button>
            <Button className="bg-primary-main text-white">
                Submit
            </Button>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmsEditor;
