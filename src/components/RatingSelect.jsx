function RatingSelect({ selectedRating, setSelectedRating }) {
  const handleChange = ({ target }) => {
    setSelectedRating(+target.value);
  };

  return (
    <ol className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selectedRating === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ol>
  );
}
export default RatingSelect;
