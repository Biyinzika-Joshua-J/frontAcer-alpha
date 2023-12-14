import React from 'react'

const options = [
  {
    option : "A",
    content : "push()",
  },
  {
    option : "B",
    content : "pop()",
  },
  {
    option : "C",
    content : "shift()",
  },
  {
    option : "D",
    content : "unshift()",
  },
];

interface optionBtnProps {
  optionNumbering : string;
  optionContent : string;
}
const OptionButton = ({optionNumbering, optionContent}:optionBtnProps) => {
    return (
      <button className='w-full bg-gray-200 border-gray-400 border-2 rounded-2xl text-left py-4 px-8 my-4'>
        <span className="font-bold">{optionNumbering}. </span>
        <span className="ml-4">
          {optionContent}
        </span>
      </button>
    )
}

const QuizOptions = () => {
  return (
    <div className='py-8 flex flex-col'>
        
        {
          options.map((option, idx) => (
            <OptionButton key={idx} optionNumbering={option.option} optionContent={option.content}/>
          ))
        }
    </div>
  )
}

export default QuizOptions