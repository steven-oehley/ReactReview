import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ setFeedback }) => {
  const [text, setText] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);

  const handleSubmit = (e) => {
    // preventDefault on submit
    e.preventDefault();

    // create new feedback item
    const newFeedback = {
      id: uuidv4(),
      rating: selectedRating,
      text: text,
    };

    //set new feedback
    setFeedback((prev) => [newFeedback, ...prev]);

    // Reset after submission
    setText(""); // Clear the text input after submission
    setSelectedRating(0); // Clear the rating after submission
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const requiredReviewLength = 50;
  const btnDisabled =
    text.trim().length < requiredReviewLength || selectedRating === 0;
  const showTextAlert =
    text.trim().length >= 1 && text.trim().length < requiredReviewLength;
  const showRatingAlert = text.trim().length >= 1 && selectedRating === 0;

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: "0.5em" }}>
          How would you rate your experience with the React library?
        </h2>
        <RatingSelect
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
        <div className="input-group">
          <input
            type="text"
            placeholder="Your React review..."
            value={text}
            onChange={handleChange}
          />

          <Button variant="primary" disabled={btnDisabled}>
            Send
          </Button>
        </div>
        {showRatingAlert && (
          <p className="alert">Please select a rating for your review</p>
        )}
        {showTextAlert && (
          <p className="alert">
            Review needs to be at least {requiredReviewLength} characters long
          </p>
        )}
      </form>
    </Card>
  );
};

export default FeedbackForm;
