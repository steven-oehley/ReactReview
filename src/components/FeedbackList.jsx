import FeedBackItem from "./FeedbackItem";

function FeedbackList({ feedbackData }) {
  return (
    <ul>
      {feedbackData.map((feedback) => (
        <FeedBackItem
          key={feedback.id}
          text={feedback.text}
          rating={feedback.rating}
        />
      ))}
    </ul>
  );
}
export default FeedbackList;
