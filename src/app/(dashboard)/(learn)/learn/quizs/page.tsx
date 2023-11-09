import React from "react";
import QuizCard from "@/components/cards/QuizCard";
import { Quizs } from "@/constants/constants";

const QuizsContainer = () => {
  return (
   <div className="flex justify-center">
     <div className="grid lg:grid-cols-2  md:grid-cols-1 grid-cols-1  gap-10 ">
      {Quizs.map((quiz, idx) => (
        <div className="" key={idx}>
          <QuizCard
          key={idx}
          icon={quiz.icon}
          questions={quiz.questions}
          name={quiz.name}
          progress={quiz.progress}
        />
        </div>
      ))}
    </div>
   </div>
  );
};

export default QuizsContainer;
