"use client"
import React from 'react'
import Editor from '@monaco-editor/react';
// {TODO: Add monaco editor and coding workspace}

const page = () => {
  return (
    <div>ui

<Editor theme={'vs-dark'} height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />;
    </div>
  )
}

export default page