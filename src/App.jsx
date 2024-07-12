// DATA IMPORTS
import FeedbackData from "./data/FeedbackData";

// COMPONENT IMPORTS
import Header from "./components/Header/Header";

// PAGE IMPORTS
import AboutPage from "./pages/AboutPage";

// REACT IMPORTS
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

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
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                feedback={feedback}
                setFeedback={setFeedback}
                handleDeleteClick={handleDeleteClick}
                isModalVisible={isModalVisible}
                handleAccept={handleAccept}
                handleDecline={handleDecline}
                handleCloseModal={handleCloseModal}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}
