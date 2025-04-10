export function HangmanWords() {
  const word = "Test";
  const guessedLetter = ["T", "e", "j", "t"];
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
      {word.split("").map((letter, index) => (
        // using key in react is not recommended
        <span style={{ borderBottom: ".1rem solid gray", color: "peachpuff" }} key={index}>
          <span
            style={{
              visibility: guessedLetter.includes(letter) ? "visible" : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
