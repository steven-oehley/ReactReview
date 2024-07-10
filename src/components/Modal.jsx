import PropTypes from "prop-types";

function Modal({ isVisible, onAccept, onDecline, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>Do you really want to delete this review?</p>
        <button className="modal-btn-yes" onClick={onAccept}>
          Yes
        </button>
        <button className="modal-btn-no" onClick={onDecline}>
          No
        </button>
        <button className="modal-btn-close" onClick={onClose}>
          Close
        </button>
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
