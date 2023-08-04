function Tag({ points }) {
  const difficulty = points === 10 ? "easy" : points === 20 ? "medium" : "hard";

  return (
    <div className={`tag tag-${difficulty}`}>{difficulty.toUpperCase()}</div>
  );
}

export default Tag;
