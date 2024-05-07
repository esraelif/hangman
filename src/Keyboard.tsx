import styles from "./Keyboard.module.css";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
type KeyboardProps = {
  activeLetter: string[];
  inactiveLetters: string[];
  disabled?: boolean;
  addGuessedLetter: (letter: string) => void;
};
export function Keyboard({
  activeLetter,
  inactiveLetters,
  disabled = false,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))",
        gap: "0.5rem",
        padding: "1rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInActive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn}${isActive ? styles.active : ""}
            ${isInActive ? styles.inactive : ""}
            `}
            disabled={isInActive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
