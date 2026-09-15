import { useState } from "react";

export default function RebusPuzzle({ puzzle, onSolved, onWrongAttempt, onReveal }) {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [solved, setSolved] = useState(false);
  const [revealedImages, setRevealedImages] = useState(() => puzzle.images.map(() => false));

  function handleRevealImage(index) {
    if (revealedImages[index]) return;
    setRevealedImages((previous) => previous.map((revealed, imageIndex) => (
      imageIndex === index ? true : revealed
    )));
    onReveal();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const normalizedInput = input.trim().toLowerCase().replace(/\s+/g, " ");
    const correct = normalizedInput === puzzle.answer.toLowerCase();
    if (correct) {
      setFeedback("correct");
      setSolved(true);
      setTimeout(onSolved, 800);
    } else {
      setFeedback("wrong");
      onWrongAttempt();
    }
  }

  return (
    <div className="puzzle-interactive rebus-puzzle">
      <div className="rebus-images">
        {puzzle.images.map((image, index) => (
          <figure className="rebus-item" key={image}>
            {revealedImages[index] ? (
              <img src={image} alt={`Deel ${index + 1} van de rebus`} className="rebus-image" />
            ) : (
              <button className="btn-hint rebus-reveal-btn" type="button" onClick={() => handleRevealImage(index)}>
                Deel {index + 1} bekijken (-2 punten)
              </button>
            )}
            {solved && puzzle.parts?.[index] && (
              <figcaption>{puzzle.parts[index]}</figcaption>
            )}
          </figure>
        ))}
      </div>
      <form className="answer-form" onSubmit={handleSubmit}>
        <input
          className={`answer-input${feedback === "wrong" ? " input-wrong" : feedback === "correct" ? " input-correct" : ""}`}
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Jouw antwoord..."
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          readOnly={solved}
        />
        {!solved && (
          <button className="btn-primary" type="submit" disabled={!input.trim()}>
            Controleer &rarr;
          </button>
        )}
      </form>
      {feedback === "correct" && <p className="correct-feedback">Dat is goed!</p>}
      {feedback === "wrong" && <p className="wrong-feedback">Helaas, dat is niet goed. Probeer het nog eens!</p>}
    </div>
  );
}
