"use client";
import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { useUIEditorContext } from "@/context/UIEditorProvider";


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



  function handleEditorChange(value, event){
    if (file.name === "index.html"){
        setHtml(value);
    }else if(file.name === "style.css"){
        setCss(value)
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
        
        
          <Button
            disabled={fileName === "main.py"}
            onClick={() => setFileName("main.py")}
            className={` rounded-none cursor-pointer ${fileName === "main.py" && 'border-b-2 border-white'}`}
          >
            main.py
          </Button>
          <Button
            disabled={fileName === "main.js"}
            onClick={() => setFileName("main.js")}
            className={` rounded-none cursor-pointer ${fileName === "main.js" && 'border-b-2 border-white'}`}
          >
            script.js
          </Button>
        
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
                Save
            </Button>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmsEditor;
