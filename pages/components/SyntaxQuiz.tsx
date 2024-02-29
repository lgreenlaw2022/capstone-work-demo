import React, { useState, ChangeEvent } from 'react';
import styles from '@/styles/syntaxQuiz.module.css';

const SyntaxQuiz: React.FC = () => {
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const question: string = 'Fill in the code to initialize a hashmap called my_dict below:';
    const correctAnswer: string = 'my_dict = {}';

    const checkAnswer = (): void => {
        if (userAnswer.trim() === correctAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setUserAnswer(e.target.value);
    };

    return (
        <div className={styles.container}>
            <p className={styles.question}>{question}</p>
            <input 
                type="text" 
                value={userAnswer} 
                onChange={handleInputChange} 
            />
            <button className={styles.button} onClick={checkAnswer}>Submit Answer</button>
            {isCorrect !== null && (
                <p>{isCorrect ? 'Correct!' : 'Incorrect, try again.'}</p>
            )}
        </div>
    );
};

export default SyntaxQuiz;