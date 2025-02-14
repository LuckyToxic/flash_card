import React, { useState } from 'react';
import { useNavigate } from 'react-router';


export default function QuestionList({ questions, setQuestions }) {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setAnswer(event.target.value);
  };

  const getNextPage = () => {
    if (answer === questions[count]?.answer){setScore((score) => score + 1)}
    if(answer.trim().length !== 0){
      if (count < 4) {
        setCount((count) => count + 1);
      } else {
        alert('Вопросов больше нет');
        (()=> navigate('/themes'))()
      }
      
      setAnswer('');
    }
  };

  return (
    <>
      <div>{questions[count]?.question || 'нет вопросов'}</div>
      <input
        name="answer"
        placeholder="введи ответ"
        value={answer}
        onChange={onChangeHandler}
      />
      <button type="submit" onClick={getNextPage}>
        Ответить
      </button>
      <div>Текущий счет: {score}</div>
    </>
  );
}
