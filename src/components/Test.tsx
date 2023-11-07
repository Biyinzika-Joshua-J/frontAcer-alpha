"use client"
import prisma from '@/lib/prisma';
import React, { useEffect } from 'react'
import { fetchQuestions } from "@/lib/actions/Quiz/fetchQuestions.action";


const Test = () => {
  
    useEffect(()=>{
      async function fetchQuiz(){
        const questions = await fetchQuestions();
        console.log(questions)
        //setQuiz(quizs)
      }
      fetchQuiz();
    }, [])
  return (
    <div>Test</div>
  )
}

export default Test