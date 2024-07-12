import { motion, AnimatePresence } from "framer-motion";

import FeedbackItem from "./FeedbackItem";
import { useFeedbackContext } from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback: feedbackData, handleDeleteClick } = useFeedbackContext();
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

export default FeedbackList;
