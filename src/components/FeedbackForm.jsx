import PropTypes from "prop-types";

import { useState } from "react";

import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const btnDisabled = text.length === 0;

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: "0.5em" }}>
          How would you rate your experience with the React library?
        </h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Your React review..."
            value={text}
            onChange={handleChange}
          />
          <button className="btn" type="submit" disabled={btnDisabled}>
            Send
          </button>
        </div>
      </form>
    </Card>
  );
}

FeedbackForm.propTypes = {};

export default FeedbackForm;
