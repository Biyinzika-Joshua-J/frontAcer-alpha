"use client"
import React, {useState, useEffect} from "react"
import { Progress } from "@/components/ui/progress"

function QuizProgress() {
  const [progress, setProgress] = useState(10)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(50), 500)
    return () => clearTimeout(timer)
  }, [])

  return (<div>
    <div className="flex justify-center items-center pb-4">
        <span className="text-gray-400">
            Question 15/30
        </span>
    </div>
    <div>
    <Progress value={progress} className="w-[100%]" />
    </div>
  </div>)
}


export default QuizProgress;