"use client"
import React, {useState, useEffect, useContext, createContext} from 'react';

interface ContextType {
    srcDocument: string;
    setSrcDocumentUI: (doc: string) => void;
  }

const Context = createContext<ContextType | undefined>(undefined);

const UIEditorProvider = ({children}:{children:React.ReactNode}) => {
    const [srcDocument, setSrcDocument] = useState('');

    function setSrcDocumentUI(doc:string){
        setSrcDocument(doc);
    }
  return (
    <Context.Provider 
    value={{
        srcDocument,
        setSrcDocumentUI,
    }}>
        {children}
    </Context.Provider>
  )
}

export function useUIEditorContext() {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error("useUIEditorContext must be used within a ContextProvider");
    }
    return context;
  }

export default UIEditorProvider