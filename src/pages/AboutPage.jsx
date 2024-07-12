import Card from "../components/shared/Card";

import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <div>
        <h1>About This App</h1>
        <p>
          Hi, I'm Steve, a passionate developer who created this app to practice
          and enhance my skills in React. You can connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/stevenjustinoehley/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          and check out my other projects on{" "}
          <a
            href="https://github.com/steven-oehley"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          This project code is available on{" "}
          <a
            href="https://github.com/steven-oehley/ReactReview"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          here.
        </p>
      </div>
      <Link to="/">Back to App...</Link>
    </Card>
  );
};

export default AboutPage;
