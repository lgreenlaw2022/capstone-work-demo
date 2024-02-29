import { type AppType } from "next/dist/shared/lib/utils";
import QuizButton from "./components/QuizButton";
import styles from "@/styles/example.module.css";
import SyntaxQuiz from "./components/SyntaxQuiz";
import CodeFenceExample from "./components/CodefenceExample";
import CodeMirrorExample from "./components/CodeMirrorExample";
import HashMapIntro from "./components/StudyGuideExample";
import MonacoExample from "./components/MonacoExample";

const HomePage: AppType = () => {
  return (
    <div className={styles.container}>      
        <header className={styles.header}>Example Hashmap Unit Materials</header>
        <HashMapIntro/>

        <h1>Sample practice questions</h1>
        <QuizButton/>
        <SyntaxQuiz/> 

        <h1> Code editor tests</h1>
        <div style={{width: '800px'}}>
          <h3>Code Mirror Example</h3>
          <CodeMirrorExample/>
        </div>

        <div >
          <h3>Monaco Example</h3>
          <MonacoExample/>
        </div>
        
        <div>
          <h3>Code Sandbox Example</h3>
          <iframe
            style={{
            width: "900px",
            height: "600px",
            outline: "1px solid #252525",
            border: 0,
            borderRadius: 8,
            marginBottom: 16,
            zIndex: 100
            }}
            src="https://codesandbox.io/s/devbox-demo-embed-sandbox-qpgk4h?file=/main.py"
          ></iframe>
        </div>

        <div>
          <h3>Code Fence Example (nonfunctional)</h3>
          <CodeFenceExample/>
        </div>

      </div>        
  );
};

export default HomePage;