"use client"
import React, {useState, useEffect, useContext, createContext} from 'react'

interface ContextType {
    srcDocument: string;
    setSrcDocumentUI: (doc: string) => void;
  }

const Context = createContext<ContextType | undefined>(undefined);

const UIEditorProvider = ({children}) => {
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
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
  }

export default UIEditorProvider