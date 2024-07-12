// COMPONENT IMPORTS
import Header from "./components/Header/Header";

// PAGE IMPORTS
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

// REACT IMPORTS

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// CONTEXT IMPORTS
import { FeedbackProvider } from "./context/FeedbackContext";

export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}
