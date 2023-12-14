import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../ui/button'
import { faCircleXmark, faClock } from '@fortawesome/free-solid-svg-icons';
import QuizTimer from './QuizTimer';

const QuizHeader = () => {
  return (
    <div>
        <div className="flex items-center justify-between pb-10">
            <div className="">
                <span className="text-gray-600 font-bold">
                    JavaScript
                </span>
            </div>
            <div className="">
                <div className="flex items-center">
                    {/*<div className="">
                        <FontAwesomeIcon icon={faClock} className='text-gray-400' size='2x'/>
                    </div>
  <span className="ml-4">20:00</span>*/}
                    <QuizTimer/>
                </div>
            </div>
            <div className="">
                <Button>
                    <FontAwesomeIcon icon={faCircleXmark} className='text-black' size='2x'/>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default QuizHeader