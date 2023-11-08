import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHtml5} from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";

interface Props {

}

const QuizCard = ({icon, name, questions, progress}) => {
  return (
    <Link href={'/learn/quizs'}>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-80 rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-36 rounded-xl bg-clip-border">
            <FontAwesomeIcon icon={icon} size="10x" className="object-cover w-full h-full"/>
        
          
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
             {questions} Questions
            </p>
          </div>
         
        </div>
        <div className="p-6 pt-0">
          <div className="flex justify-between items-center">
          <span className="">Progress</span>
          <span className="">{progress}%</span>
          </div>
          <div className="progress w-full bg-gray-200 h-2 rounded-md relative">
            {/*TODO: fix bug, not all percentages show*/}
            <div className={`absolute transition-all top-0 left-0 bg-primary-main w-[${progress}%] h-2 rounded-md`}></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;
