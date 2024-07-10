import PropTypes from "prop-types";

function FeedbackStats({ feedbackData }) {
  const average = (
    feedbackData.reduce(
      (prevVal, currentVal) => prevVal + currentVal.rating,
      0
    ) / feedbackData.length
  ).toFixed(0);

  return (
    <div className="feedback-stats">
      <h4>{feedbackData.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedbackData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeedbackStats;
