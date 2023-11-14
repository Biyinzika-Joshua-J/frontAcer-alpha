import React from 'react'
import QuizContainer from '@/components/quiz/QuizContainer';

const page = ({params}) => {
  const {quiz_id:quizId} = params;
  return (
    <>
      <QuizContainer/>
    </>
  )
}

export default page