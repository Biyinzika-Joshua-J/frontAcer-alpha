import React from 'react'
import QuizQuestion from './QuizQuestion'
import QuizOptions from './QuizOptions'
import QuizAnswerExplanation from './QuizAnswerExplanation'

const QuizQuestionsContainer = () => {
  return (
    <div>
        <div>
        <QuizQuestion/>
        <QuizOptions/>
        </div>
        <div>
            <QuizAnswerExplanation/>
        </div>
    </div>
  )
}

export default QuizQuestionsContainer