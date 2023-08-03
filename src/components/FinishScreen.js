function FinishScreen({ points, maxPoints, percentage, highscore }) {
  let emoji;

  if (percentage === 100) {
    emoji = "🥳";
  } else if (percentage > 80 && percentage < 100) {
    emoji = "😎";
  } else if (percentage > 60 && percentage <= 80) {
    emoji = "🙂";
  } else {
    emoji = "😞";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
    </>
  );
}

export default FinishScreen;
