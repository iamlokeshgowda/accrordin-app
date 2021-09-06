import './App.css';
import React, {useState} from 'react';
import questionSet from './Data';
import Questions from './Questions';




function App() {
  const [questions, setQuestions] = useState(questionSet)
  return (
    <div className="App">
      <div className="main-page">
        <div className="container">
          <div className="row">
            <div className="col-4">
            <h3 className="heading">questions and answers about login</h3>
            </div>
            <div className="col-8">
              {questions.map((question)=>{
                return(
                  <Questions key={question.id} {...question}></Questions>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
