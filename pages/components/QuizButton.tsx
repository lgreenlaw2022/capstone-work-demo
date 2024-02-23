import React, { useState } from 'react';

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

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#f5f5f5',
            maxWidth: '400px',
            margin: '0 auto'
        },
        button: {
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }
    }

    return (
        <div style={styles.container}>
            <p>What is a hashmap?</p>
            <div>
                <label>
                    <input type="radio" value="a" checked={userAnswer === 'a'} onChange={() => setUserAnswer('a')} />
                    A) A type of function
                </label>
                <label>
                    <input type="radio" value="b" checked={userAnswer === 'b'} onChange={() => setUserAnswer('b')} />
                    B) A data structure that can map keys to values
                </label>
                <label>
                    <input type="radio" value="c" checked={userAnswer === 'c'} onChange={() => setUserAnswer('c')} />
                    C) A type of loop
                </label>
                <label>
                    <input type="radio" value="d" checked={userAnswer === 'd'} onChange={() => setUserAnswer('d')} />
                    D) A type of array
                </label>
            </div>
            <button style={styles.button} onClick={checkAnswer}>Submit Answer</button>
            <p>{result}</p>
        </div>
    );
}

export default QuizButton;