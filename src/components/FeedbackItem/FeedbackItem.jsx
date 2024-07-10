import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import Card from "./components/Card";

function FeedbackItem({ id, rating, text, reverse, handleDeleteClick }) {
  return (
    <Card reverse={reverse}>
      <div className="num-display">{rating}</div>
      <button onClick={() => handleDeleteClick(id)} className="close">
        <FaTimes color={reverse ? "#fff" : "#FFD700"} />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  reverse: PropTypes.bool.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default FeedbackItem;
