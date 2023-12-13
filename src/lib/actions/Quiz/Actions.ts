"use server"
import prisma from "@/lib/prisma"
import { QuizQuestionTypes } from "@/types/quiz";
import { NextResponse } from "next/server";

// Create actions
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
                //TODO: add difficulty prop
            }
        })
        
        return NextResponse.json({message:"Question created!", created: true})
    } catch (error) {
        return NextResponse.json({message:"Error!", created: false})
    }
}

// Read actions
export const fetchQuestions = async () =>{
    const quizs = await prisma.quiz.findMany();
    return quizs;
}

// Update actions


// Delete actions


