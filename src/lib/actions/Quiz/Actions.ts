"use server"
import prisma from "@/lib/prisma"
import { QuizQuestionTypes } from "@/types/quiz";
import { NextResponse } from "next/server";

export const fetchQuestions = async () =>{
    const quizs = await prisma.quiz.findMany();
    return quizs;
}

export const saveQuizQuestion = async (quizQuestion: QuizQuestionTypes) => {
    try {
        const quiz = await prisma.quiz.create({
            data:{
                question : quizQuestion.question,
                option1 : quizQuestion.option1,
                option2 : quizQuestion.option2,
                option3 : quizQuestion.option3,
                option4 : quizQuestion.option4,
                correctOption : quizQuestion.correctOption,
                explanation : quizQuestion.explanation,
                category : quizQuestion.category,
                topic : quizQuestion.topic,
            }
        })
    
        return NextResponse.json({message:"Question created!", created: true})
    } catch (error) {
        return NextResponse.json({message:"Error!", created: false})
    }
}