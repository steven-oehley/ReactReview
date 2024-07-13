import React, { createContext, useContext, useState } from "react";
import feedbackData from "../data/FeedbackData";

// create context
const FeedbackContext = createContext();

// create custom hook for useContext
export const useFeedbackContext = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(feedbackData);
  const [isModalVisible, setModalVisible] = useState(false);
  const [feedbackToDelete, setFeedbackToDelete] = useState(null);

  // Add your methods for handling state here
  const handleDeleteClick = (id) => {
    setFeedbackToDelete(id);
    setModalVisible(true);
  };

  const handleAccept = () => {
    setFeedback((prevFeedback) => {
      return prevFeedback.filter((item) => item.id !== feedbackToDelete);
    });
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
    <FeedbackContext.Provider
      value={{
        feedback,
        setFeedback,
        isModalVisible,
        handleDeleteClick,
        handleAccept,
        handleDecline,
        handleCloseModal,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
