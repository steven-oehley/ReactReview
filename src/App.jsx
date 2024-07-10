import FeedbackData from "./data/FeedbackData";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";

import { useState } from "react";
import Modal from "./components/Modal";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [isModalVisible, setModalVisible] = useState(false);
  const [feedbackToDelete, setFeedbackToDelete] = useState(null);

  const handleDeleteClick = (id) => {
    setFeedbackToDelete(id);
    setModalVisible(true);
  };

  const handleAccept = () => {
    setFeedback(feedback.filter((item) => item.id !== feedbackToDelete));
    setModalVisible(false);
  };

  const handleDecline = () => {
    setModalVisible(false);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedbackData={feedback} />
        <FeedbackList
          feedbackData={feedback}
          handleDeleteClick={handleDeleteClick}
        />
        <Modal
          isVisible={isModalVisible}
          onAccept={handleAccept}
          onDecline={handleDecline}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
}
