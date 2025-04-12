import { useCallback, useEffect, useState } from "react";
import wordLists from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWords } from "./HangmanWords";
import { Keyboards } from "./Keyboards";

function getWord() {
  return wordLists[Math.floor(Math.random() * wordLists.length)];
}

function App() {
  // Return random words
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLosing = incorrectGuesses.length >= 6;
  const isWinning = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letters: string) => {
      if (guessedLetters.includes(letters) || isLosing || isWinning) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letters]);
    },
    [guessedLetters, isLosing, isWinning]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    // hooking
    document.addEventListener("keypress", handler);

    // Remove event listen after its done working
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    // hooking
    document.addEventListener("keypress", handler);

    // Remove event listen after its done working
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

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
        <div style={{ fontSize: "3rem", textAlign: "center", color: "gray" }}>
          {isWinning && "Congrats, You won! refresh to restart."}
          {isLosing && "You lost! refresh and try again."}
        </div>

        {/*  3 customs components */}
        <HangmanDrawing guessNumbers={incorrectGuesses.length} />
        <HangmanWords
          revealWords={isLosing}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboards
            disabled={isWinning || isLosing}
            activeLetter={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetter={incorrectGuesses}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
    </>
  );
}

export default App;