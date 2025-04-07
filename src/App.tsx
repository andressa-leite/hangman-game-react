import { useState } from "react";
import wordLists from "./wordList.json";

function App() {

  // Randomize words
  const [wordToTrack, setWordToTrack] = useState(() => {
    return wordLists[Math.floor(Math.random() * wordLists.length)]
  })

  // Check randomized words
  const [trackedWord, setTrackedWord] = useState<string[]>([])

  return (
    <>
      <div
        style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <h1>Hello from React!</h1>
      </div>
    </>
  );
}

export default App;