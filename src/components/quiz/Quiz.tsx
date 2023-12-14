"use client"
import React, {useEffect} from 'react'
import Prism from "prismjs";

import './prism.css'
import { formatCode } from '@/lib/utils';
import CodeSnippet from './CodeSnippet';
import QuizQuestion from './QuizQuestion';
import QuizOptions from './QuizOptions';
import QuizAnswerExplanation from './QuizAnswerExplanation';

const QuizComp = () => {

  useEffect(()=>{
    Prism.highlightAll();
  }, [])
   
  return (
    <div >
      <QuizQuestion/>
      <CodeSnippet/>
      <QuizOptions/>
      <QuizAnswerExplanation/>
    </div>
  )
}

export default QuizComp