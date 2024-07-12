import { motion, AnimatePresence } from "framer-motion";

import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedbackData, handleDeleteClick }) {
  return (
    <ul className="feedback-list">
      <AnimatePresence>
        {feedbackData.length === 0 ? (
          <p style={{ color: "#fff", textAlign: "center" }}>No feedback yet</p>
        ) : (
          feedbackData.map((feedback, index) => (
            <motion.div
              key={feedback.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                id={feedback.id}
                key={feedback.id}
                text={feedback.text}
                rating={feedback.rating}
                reverse={index % 2 === 0}
                handleDeleteClick={handleDeleteClick}
              />
            </motion.div>
          ))
        )}
      </AnimatePresence>
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
