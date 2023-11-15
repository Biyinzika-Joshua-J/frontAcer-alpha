"use client"
import React, {useState, useEffect} from 'react';
import { Button } from '@/components/ui/button';
import { saveQuizQuestion } from '@/lib/actions/Quiz/Actions';

const Page = () => {
  const [question, setQuestion] = useState('what is css?');
  const [category, setCategory] = useState('css');
  const [topic, setTopic] = useState('Intro');
  const [option1, setOption1] = useState('A programming language');
  const [option2, setOption2] = useState('A markup langauge');
  const [option3, setOption3] = useState('A styling langauge');
  const [option4, setOption4] = useState('A script langauge');
  const [explanation, setExplanation] = useState('Explanation of what is css here');
  const [answer, setAnswer] = useState('3');


  async function saveQuestion(){
    const questionObj = {
      question,
      category,
      topic,
      option1,
      option2,
      option3,
      option4,
      explanation,
      correctOption:answer,
    }
    try {
      const savedQuestion = await saveQuizQuestion(questionObj);
    } catch (error) {
      alert('error');
    }
  }

  return (
    <div>
        <div className="">
          <div className="">
            <h2 className="font-bold text-2xl pb-4">Add question</h2>
            <textarea cols={30} rows={10} className='border-2 border-black w-full'></textarea>
          </div>
          <div className="pb-4">
            <h2 className="font-bold text-2xl pb-4">Topic</h2>
            <input className='border-2 border-black w-full p-4' type='text' placeholder='Enter the topic here'/>
          </div>
          <div className="pb-4">
            <h2 className="font-bold text-2xl pb-4">Category</h2>
            <select className='border-2 border-black w-full p-4' name="" id="">
              <option value="">JavaScript</option>
              <option value="">CSS</option>
              <option value="">HTML</option>
            </select>
          </div>
          <div className="pb-4">
            <h2 className="font-bold text-2xl pb-4">Difficulty</h2>
            <select className='border-2 border-black w-full p-4' name="" id="">
              <option value="">easy</option>
              <option value="">medium</option>
              <option value="">hard</option>
            </select>
          </div>
          <div className="pb-4">
            <h2 className="font-bold text-2xl pb-4">Select Answer</h2>
            <select className='border-2 border-black w-full p-4' name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
          <div className="">
            <h2 className="font-bold text-2xl pb-4">Add Options</h2>
            <textarea placeholder='option 1' cols={30} rows={10} className='border-2 pb-4 border-black w-full'></textarea>
            <textarea placeholder='option 2' cols={30} rows={10} className='border-2 pb-4 border-black w-full'></textarea>
            <textarea placeholder='option 3' cols={30} rows={10} className='border-2 pb-4 border-black w-full'></textarea>
            <textarea placeholder='option 4' cols={30} rows={10} className='border-2 pb-4 border-black w-full'></textarea>
          </div>
          <div className="">
            <h2 className="font-bold text-2xl pb-4">Add Explanation</h2>
            <textarea cols={30} rows={10} className='border-2 border-black w-full'></textarea>
          </div>
        </div>
        <Button onClick={()=>saveQuestion()} className='bg-black text-white' >
          Save Question
        </Button>
    </div>
  )
}

export default Page