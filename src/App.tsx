import { ChangeEvent, ClipboardEvent, useState } from "react";
import "./App.css";
import Summarizing from "./components/summarizing";

function App() {
  const [userInput, setUserInput] = useState("");
  const [showSummarizing, setShowSummarizing] = useState(false);
  const handleUserInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value: userInput } = e.target;
    setUserInput(userInput);
  };

  const handleUserPastedData = (e: ClipboardEvent<HTMLTextAreaElement>) => {
    const data = e.clipboardData?.getData("text");
    if (data) {
      setUserInput(data);
    }
  };

  const summarizeText = () => {
    setShowSummarizing(true);
  };
  return (
    <>
      <textarea
        cols={30}
        rows={10}
        onChange={(e) => handleUserInput(e)}
        onPaste={(e) => handleUserPastedData(e)}
      />
      <button onClick={summarizeText}>Summarize</button>
      {showSummarizing && <Summarizing textToSummarize={userInput} />}
    </>
  );
}

export default App;
