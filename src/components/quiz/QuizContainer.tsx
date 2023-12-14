import React from 'react'
import QuizHeader from './QuizHeader'
import QuizProgress from './QuizProgress'
import QuizQuestionsContainer from './QuizQuestionsContainer'
import Modal from '../Modal/Modal'
import { Button } from '../ui/button'
import { Switch } from "@/components/ui/switch"



const QuizContainer = () => {
  return (
    <>
        <main className='min-h-scree'>
           <div className="w-[80%] py-10 mx-auto">
            <div className="">
            <QuizHeader/>
            <QuizProgress/>
            <QuizQuestionsContainer/>
            <Modal>
              <h2 className='text-center font-bold text-3xl'>JavaScript Quiz</h2>

              <div className="py-4">
                <h2 className='text-center font-semibold text-2xl'>Total Questions</h2>
                <div className="text-center ">10 Questions</div>
              </div>
              <div className="py-4">
                <h2 className='text-center font-semibold text-2xl'>Total Score Points</h2>
                <div className="text-center ">50 Points</div>
              </div>
              <div className="py-4">
                <h2 className='text-center font-semibold text-2xl'>Total time</h2>
                <div className="text-center ">10 Minutes</div>
              </div>
              <div className="py-4">
                <h2 className='text-center font-semibold text-2xl'>Explanation & Answer</h2>
                <div className="text-center ">
                  <p>Show explanation and answer after answering every question</p>
                  <Switch className='bg-black'/>
                </div>
              </div>
              <div className="py-4">
                <h2 className='text-center font-semibold text-2xl'>Total time</h2>
                <div className="text-center ">10 Minutes</div>
              </div>

              <div className="flex items-center justify-center py-4">
                <Button variant={'default'} className='bg-black text-white'>Start Quiz</Button>
              </div>
            </Modal>
            </div>
           </div>
        </main>
    </>
  )
}

export default QuizContainer