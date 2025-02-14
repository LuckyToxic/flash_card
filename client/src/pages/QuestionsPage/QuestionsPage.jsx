import { useEffect, useState } from "react"
import { QuestionsApi } from "../../entities/QuestionsApi"
import { useParams } from "react-router"
import QuestionList from "../../widgets/QustionList/QuestionList"


export default function QuestionsPage() {
  const [questions, setQuestions] = useState([])
  const{id}= useParams()

  useEffect(()=>{
    QuestionsApi.getAllById(id).then(({statusCode, error,data, message})=>{
      if(error) alert(message, 'Не получилось')
        setQuestions(data)
    })

  },[])
  
  
  return (
    <div>
      <QuestionList questions = {questions} setQuestions = {QuestionList} />
      </div>
  )
}
