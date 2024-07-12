import FeedbackForm from "../components/FeedbackForm";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackList from "../components/FeedbackList";
import Modal from "../components/Modal";

function HomePage() {
  return (
    <>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
      <Modal />
    </>
  );
}
export default HomePage;
