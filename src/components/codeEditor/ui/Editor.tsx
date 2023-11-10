"use client";
import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { useUIEditorContext } from "@/context/UIEditorProvider";


const files = {
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: "//JavaScript code here",
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: "//CSS Code here",
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "// HTML code here",
  },
};

const UIChallengesEditor = () => {
  const [fileName, setFileName] = useState("script.js");
  const file = files[fileName];
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
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
        setSrcDoc(` <html>
        <head>
            <style>
                ${css}
            </style>
        </head>
        <body>
            ${html}
        </body>
        <script>
            ${js}
        </script>
    </html>`)
    setSrcDocumentUI(` <html>
    <head>
        <style>
            ${css}
        </style>
    </head>
    <body>
        ${html}
    </body>
    <script>
        ${js}
    </script>
</html>`)
    }, 250);

    return ()=>clearInterval(timeout);
    

  }, [html, css, js]);

  return (
    <div className={`flex flex-col h-full `}>
      <div className=" editor-ui__filebtns bg-[#303134]">
        <div className="flex items-center  h-full">
        
          <Button
            disabled={fileName === "index.html"}
            onClick={() => setFileName("index.html")}
            className={` rounded-none cursor-pointer ${fileName === "index.html" && 'border-b-2 border-white'}`}
          >
            index.html
          </Button>
          <Button
            disabled={fileName === "style.css"}
            onClick={() => setFileName("style.css")}
            className={` rounded-none cursor-pointer ${fileName === "style.css" && 'border-b-2 border-white'}`}
          >
            style.css
          </Button>
          <Button
            disabled={fileName === "script.js"}
            onClick={() => setFileName("script.js")}
            className={` rounded-none cursor-pointer ${fileName === "script.js" && 'border-b-2 border-white'}`}
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

export default UIChallengesEditor;
