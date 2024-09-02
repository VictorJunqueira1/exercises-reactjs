"use client"

import { QuestionItem } from "@/components/QuestionItem"
import { Results } from "@/components/Results"
import { questions } from "@/data/questions"
import { useState } from "react"

const Page = () => {
  const title = "Quiz de Programação"
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)

  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleAswered = (answer: number) => {
    setAnswers([...answers, answer])
    loadNextQuestion()
  }

  const restartButton = () => {
    setAnswers([])
    setCurrentQuestion(0)
    setShowResult(false)
  }

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="w-full max-w-xl rounded-md shadow-gray-400 bg-gray-200 text-black shadow-md">
          <div className="p-5 font-semibold text-2xl border-b border-gray-400">{title}</div>
          <div className="p-5">
            {!showResult &&
              <QuestionItem
                count={currentQuestion + 1}
                onAnswer={handleAswered}
                question={questions[currentQuestion]}
              />
            }
            {showResult && 
              <Results questions={questions} answers={answers}/>
            }
          </div>
          <div className="p-5 text-center border-t border-gray-400">
            {!showResult &&
              `${currentQuestion + 1} de ${questions.length} perguntas`
            }
            {showResult &&
              <button onClick={restartButton} className="px-3 py-2 rounded-md bg-blue-500 text-white">Reiniciar Quiz</button>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Page;