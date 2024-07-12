import FeedbackForm from "../components/FeedbackForm";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackList from "../components/FeedbackList";
import Modal from "../components/Modal";

function HomePage({
  feedback,
  setFeedback,
  handleDeleteClick,
  isModalVisible,
  handleAccept,
  handleDecline,
  handleCloseModal,
}) {
  return (
    <>
      <FeedbackForm setFeedback={setFeedback} />
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
    </>
  );
}
export default HomePage;
