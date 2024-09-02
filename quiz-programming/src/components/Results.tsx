import { Question } from "@/types/Question";

type Props = {
    questions: Question[],
    answers: number[]
}

export const Results = ({ answers, questions }: Props) => {
    return (
        <div>
            {questions.map((item, key) => (
                <div key={key} className="mb-3">
                    <div className="font-semibold text-xl">{key + 1}. {item.question}</div>
                    <div className="mt-2">
                        {item.options.map((option, index) => (
                            <div 
                                key={index}
                                className={`px-3 border-gray-400 border py-2 rounded-md mb-1 ${
                                    index === item.answer ? 'bg-green-400' : 
                                    index === answers[key] ? 'bg-red-400' : 
                                    'bg-gray-200'
                                }`}
                            >
                                <span>{index === item.answer ? "Resposta Correta:" : 
                                    index === answers[key] ? "Sua Resposta:" : 
                                    null
                                } </span>
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}