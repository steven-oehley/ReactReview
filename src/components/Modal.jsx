import PropTypes from "prop-types";

import Button from "./shared/Button";

function Modal({ isVisible, onAccept, onDecline, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>Do you really want to delete this review?</p>
        <div className="modal-buttons">
          <Button variant="modal-yes" onClick={onAccept}>
            Yes
          </Button>
          <Button variant="modal-no" onClick={onDecline}>
            No
          </Button>
          <Button variant="modal-close" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
