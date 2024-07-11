import FeedbackData from "./data/FeedbackData";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

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
    setFeedbackToDelete(null);
  };

  const handleDecline = () => {
    setModalVisible(false);
    setFeedbackToDelete(null);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setFeedbackToDelete(null);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
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
