import { useState } from "react";
import wordLists from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWords } from "./HangmanWords";
import { Keyboards } from "./Keyboards";

function App() {
  // Randomize words
  const [wordToTrack, setWordToTrack] = useState(() => {
    return wordLists[Math.floor(Math.random() * wordLists.length)];
  });

  // Check randomized words
  const [trackedWord, setTrackedWord] = useState<string[]>([]);

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
        <div style={{ fontSize: "3rem", textAlign: "center", color: "gray" }}>Lose or Win</div>

        {/*  3 customs components */}
        <HangmanDrawing />
        <HangmanWords />
        <div style={{ alignSelf: "stretch"}}>
          <Keyboards />
        </div>
      </div>
    </>
  );
}

export default App;
