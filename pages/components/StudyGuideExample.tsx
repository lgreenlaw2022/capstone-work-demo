import React from 'react';
import styles from '@/styles/studyGuide.module.css';

const HashMapIntro: React.FC = () => {
    return (
        <div className={styles.HashMapIntro}>
            <h1 >Introduction to Hashmaps</h1>
            <p>
            A hashmap, also known as a hash table, is a data structure that implements an associative array abstract data type. This means it can map keys to values. A hashmap uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
            </p>
            <p>
            Ideally, the hash function will assign each key to a unique bucket, but this situation is rarely achievable in reality (unless the hash keys are fixed; i.e., new entries are not allowed). Instead, most hash table designs assume that hash collisions—different keys that are assigned by the hash function to the same bucket—will occur and must be accommodated in some way.
            </p>
            <p>
            In a well-dimensioned hash table, the average cost (number of instructions) for each lookup is independent of the number of elements stored in the table. Many hash table designs also allow arbitrary insertions and deletions of key-value pairs, at constant average cost per operation.
            </p>
            <p>
            In many situations, hash tables turn out to be more efficient than search trees or any other table lookup structure. For this reason, they are widely used in many kinds of computer software, particularly for associative arrays, database indexing, caches, and sets.
            </p>
        </div>
    );
}

export default HashMapIntro;