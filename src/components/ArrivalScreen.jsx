import { STOPS } from "../config/trail";

export default function ArrivalScreen({ stopIndex, score, onStart }) {
  const stop = STOPS[stopIndex];
  const message = stop.arrivalMessage ?? "TODO";
  const isFinal = stop.isFinal;

  return (
    <div className="screen arrival-screen">
      <div className="stop-badge">
        Stop {stopIndex + 1} / {STOPS.length}
      </div>
      <h2 className="arrival-name">{stop.name}</h2>
      <div className="arrival-message">
        <p>{message}</p>
        {isFinal && <p>Jullie hebben {score} punten verzameld.</p>}
      </div>
      {isFinal && (
        <div className="final-score" aria-label={`Eindscore: ${score} punten`}>
          <span className="final-score-label">Jullie eindscore</span>
          <strong>{score} punten</strong>
        </div>
      )}
      <button className="btn-primary" onClick={onStart}>
        {isFinal ? "Bekijk eindbericht →" : "Start opdracht →"}
      </button>
    </div>
  );
}
