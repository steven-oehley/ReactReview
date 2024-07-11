import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedbackData, handleDeleteClick }) {
  return (
    <ul className="feedback-list">
      {feedbackData.length === 0 ? (
        <p style={{ color: "#fff", textAlign: "center" }}>No feedback yet</p>
      ) : (
        feedbackData.map((feedback) => (
          <FeedbackItem
            id={feedback.id}
            key={feedback.id}
            text={feedback.text}
            rating={feedback.rating}
            reverse={feedback.id % 2 === 0}
            handleDeleteClick={handleDeleteClick}
          />
        ))
      )}
    </ul>
  );
}

FeedbackList.propTypes = {
  feedbackData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default FeedbackList;
