import { type AppType } from "next/dist/shared/lib/utils";
import QuizButton from "./components/QuizButton";

// CHECK: I think I need an account for it to load for the person, but I want it generic
const HomePage: AppType = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <QuizButton/>
        <iframe
            style={{
            width: "80%",
            height: 700,
            outline: "1px solid #252525",
            border: 0,
            borderRadius: 8,
            marginBottom: 16,
            zIndex: 100
            }}
            src="https://codesandbox.io/p/devbox/demo-embed-sandbox-qpgk4h?embed=1&file=%2Fmain.py"
        ></iframe>
    </div>
  );
};

export default HomePage;