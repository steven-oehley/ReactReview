import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

import { useState } from "react";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header text="Hello World!" />
      <div className="container">
        <FeedbackList feedbackData={feedback} />
      </div>
    </>
  );
}
