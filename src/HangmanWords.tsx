type HangmanWordsProps = {
  guessedLetters: string[];
  wordToGuess: string;
  revealWords?: boolean;
};

export function HangmanWords({
  guessedLetters,
  wordToGuess,
  revealWords = false,
}: HangmanWordsProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        // using key in react is not recommended
        <span
          style={{ borderBottom: ".1rem solid gray", color: "peachpuff" }}
          key={index}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || revealWords
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && revealWords
                  ? "salmon"
                  : "peachpuff",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
