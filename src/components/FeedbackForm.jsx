import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setText(e.target.value);
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
          <Button variant="primary" disabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
