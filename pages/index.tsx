import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/hashmaps-example');
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Welcome</h1>
        <p>Start your learning journey by clicking on one of the units below</p>
      </div>
      <button className={styles.button} onClick={handleClick}>
        Hashmaps
      </button>
    </div>
  );
}