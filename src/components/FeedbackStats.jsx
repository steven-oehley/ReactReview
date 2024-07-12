import { useFeedbackContext } from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback: feedbackData } = useFeedbackContext();

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

export default FeedbackStats;
