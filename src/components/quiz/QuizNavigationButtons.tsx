"use client"
import React from 'react'
import { Button } from '../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const QuizNavigationButtons = () => {
  return (
    <div className='mt-0 mb-8 flex items-center justify-between'>
        <div className=""></div>
        <div className="">
            <Button onClick={()=>{}} variant={'default'} className='bg-black text-white'>
                <span className="mr-4">Next</span>
                <span className="">
                    <FontAwesomeIcon icon={faArrowRight} size='lg'/>
                </span>
            </Button>
        </div>
    </div>
  )
}

export default QuizNavigationButtons