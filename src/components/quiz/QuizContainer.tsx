import React from 'react'
import QuizHeader from './QuizHeader'
import QuizProgress from './QuizProgress'
import QuizQuestionsContainer from './QuizQuestionsContainer'

const QuizContainer = () => {
  return (
    <>
        <main className='min-h-scree'>
            <QuizHeader/>
            <QuizProgress/>
            <QuizQuestionsContainer/>
        </main>
    </>
  )
}

export default QuizContainer