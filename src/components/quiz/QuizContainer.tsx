import React from 'react'
import QuizHeader from './QuizHeader'
import QuizProgress from './QuizProgress'
import QuizQuestionsContainer from './QuizQuestionsContainer'

const QuizContainer = () => {
  return (
    <>
        <main className='min-h-scree'>
           <div className="w-[80%] py-10 mx-auto">
            <div className="">
            <QuizHeader/>
            <QuizProgress/>
            <QuizQuestionsContainer/>
            </div>
           </div>
        </main>
    </>
  )
}

export default QuizContainer