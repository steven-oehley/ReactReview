import Header from "./components/Header";
import FeedBackItem from "./components/FeedBackItem";

export default function App() {
  return (
    <>
      <Header text="Hello World!" />
      <div className="container">
        <FeedBackItem />
      </div>
    </>
  );
}
