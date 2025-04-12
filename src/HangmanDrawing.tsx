const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid pink",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "pink",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "pink",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "pink",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "pink",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "50deg",
      transformOrigin: "left bottom",
    }}
  />
)

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "pink",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-50deg",
      transformOrigin: "right bottom",
    }}
  />
)

const BODY_PART_ARR = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  guessNumbers: number
}

export function HangmanDrawing({ guessNumbers }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PART_ARR.slice(0, guessNumbers)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "pink",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      ></div>

      <div
        style={{
          height: "10px",
          width: "250px",
          background: "pink",
          marginLeft: "125px",
        }}
      ></div>

      <div
        style={{
          height: "400px",
          width: "10px",
          background: "pink",
          marginLeft: "125px",
        }}
      ></div>

      <div
        style={{
          height: "10px",
          width: "250px",
          background: "pink",
        }}
      ></div>
    </div>
  );
}
