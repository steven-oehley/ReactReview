import Button from "./shared/Button";
import { useFeedbackContext } from "../context/FeedbackContext";

function Modal() {
  const { isModalVisible, handleAccept, handleDecline, handleCloseModal } =
    useFeedbackContext();

  if (!isModalVisible) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>Do you really want to delete this review?</p>
        <div className="modal-buttons">
          <Button variant="modal-yes" onClick={handleAccept}>
            Yes
          </Button>
          <Button variant="modal-no" onClick={handleDecline}>
            No
          </Button>
          <Button variant="modal-close" onClick={handleCloseModal}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
