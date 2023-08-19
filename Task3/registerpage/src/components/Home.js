import React from "react"
import {useState} from 'react';
import './Home.css';
import {useLocation, useNavigate} from 'react-router-dom';

function Home (){
    const location=useLocation()

    const questions = [
        {
          questionText : 'What is the capital of India?',
          answerOptions : [
            {answerText: 'Hyderabad', isCorrect:false},
            {answerText: 'Delhi', isCorrect:true},
            {answerText: 'Mumbai', isCorrect:false},
            {answerText: 'Kolkata', isCorrect:false},
          ],
        },
        {
          questionText : 'Who is the CEO of Google and Alphabet?',
          answerOptions : [
            {answerText: 'SatyaNadela', isCorrect:false},
            {answerText: 'BillGates', isCorrect:false},
            {answerText: 'SundarPichai', isCorrect:true},
            {answerText: 'ElonMsk', isCorrect:false},
          ],
        },
        {
          questionText : 'Windows Operating System is Launced by which Company?',
          answerOptions : [
            {answerText : 'Apple', isCorrect:false},
            {answerText : 'Intel', isCorrect:false},
            {answerText : 'Google', isCorrect:false},
            {answerText : 'Microsoft', isCorrect:true},
          ],
        },
        {
          questionText : 'What is the name of India prestigious Moon Mission?',
          answerOptions : [
            {answerText : 'Chandrayaan', isCorrect:true},
            {answerText : 'Apollo', isCorrect:false},
            {answerText : 'Mangalyaan', isCorrect:false},
            {answerText : 'Gaganyaan', isCorrect:false},
          ],
        },
      ]
    
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [score, setScore] = useState(0);
      const handleAnsweroptiononClick = (isCorrect) =>{
        if (isCorrect){
          setScore(score+1);
        }
        const nextQuestion = currentQuestion+1;
        if (nextQuestion < questions.length){
          setCurrentQuestion(nextQuestion);
        }
        else{
          setShowScore(true);
        }
      };

    return (
        <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnsweroptiononClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Home