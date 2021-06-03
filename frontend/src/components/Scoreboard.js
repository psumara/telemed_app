import "./Scoreboard.css";

const DUMMY_SCORES = [
  { id: "1", time: 500 },
  { id: "2", time: 580 },
  { id: "3", time: 520 },
  { id: "4", time: 400 },
  { id: "5", time: 600 },
];

const Scoreboard = () => {
  return (
    <div className="scoreboard">
      Najlepsze wyniki:
      {DUMMY_SCORES.map((score, index) => (
        <p className="scores">
          {index + 1}: {score.time + " ms"}
        </p>
      ))}
      <a href="/home">
        <button className="home_button">Home</button>
      </a>
    </div>
  );
};

export default Scoreboard;
