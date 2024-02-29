import React, { useState } from 'react';
import styles from '@/styles/quizButton.module.css';

const QuizButton = () => {
    const [result, setResult] = useState('');
    const [userAnswer, setUserAnswer] = useState('');

    const checkAnswer = () => {
        if (userAnswer?.toLowerCase() === "b") {
            setResult("Correct! A hashmap is a data structure that can map keys to values.");
        } else {
            setResult("Incorrect. The correct answer is B. A hashmap is a data structure that can map keys to values.");
        }
    }

    return (
        <div className={styles.container}>
            <p className={styles.question}>What is a hashmap?</p>
            <div className={styles.answers}>
                <label style={{display: 'block'}}>
                    <input type="radio" value="a" checked={userAnswer === 'a'} onChange={() => setUserAnswer('a')} />
                    A) A type of function
                </label>
                <label style={{display: 'block'}}>
                    <input type="radio" value="b" checked={userAnswer === 'b'} onChange={() => setUserAnswer('b')} />
                    B) A data structure that can map keys to values
                </label>
                <label style={{display: 'block'}}>
                    <input type="radio" value="c" checked={userAnswer === 'c'} onChange={() => setUserAnswer('c')} />
                    C) A type of loop
                </label>
                <label style={{display: 'block'}}>
                    <input type="radio" value="d" checked={userAnswer === 'd'} onChange={() => setUserAnswer('d')} />
                    D) A type of array
                </label>
            
            </div>
            <button className={styles.button} onClick={checkAnswer}>Submit Answer</button>
            <p>{result}</p>
        </div>
    );
}

export default QuizButton;