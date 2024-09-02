import { Question } from "@/types/Question"
import { useState } from "react"

type Props = {
    question: Question,
    count: number,
    onAnswer: (answer: number) => void
}

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
    const [selectedAnswer, setSelectedAnswer] = useState<Number | null>(null)
    const checkQuestion = (key: number) => {
        if (selectedAnswer === null) {
            setSelectedAnswer(key)
            setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null)
            }, 850);
        }
    }

    return (
        <>
            <div>
                <div className="text-2xl font-semibold mb-5">{count}. {question.question}</div>
                <div>
                    {question.options.map((item, key) => (
                        <div
                            key={key}
                            onClick={() => checkQuestion(key)}
                            className={`border transition-all duration-150 px-3 py-2 rounded-md text-lg mb-4 cursor-pointer bg-blue-300 border-blue-400
                                    ${selectedAnswer !== null ? 'cursor-auto' : 'hover:bg-blue-400'}
                                    ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-300 border-green-500'}
                                    ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-300 border-red-500'}
                                `}
                        >{item}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}