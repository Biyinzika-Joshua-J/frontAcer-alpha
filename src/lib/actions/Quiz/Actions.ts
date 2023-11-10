"use server"
import prisma from "@/lib/prisma"

export const fetchQuestions = async () =>{
    const quizs = await prisma.quiz.findMany();
    return quizs;
}