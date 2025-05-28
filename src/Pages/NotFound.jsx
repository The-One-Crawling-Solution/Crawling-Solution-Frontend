import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | The One Crawling Solution</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
          padding: "40px",
        }}
      >
        <h1 style={{ fontSize: "4rem", color: "#dc3545" }}>404</h1>
        <h2 className="mb-3">Oops! Page Not Found</h2>
        <p className="mb-4" style={{ maxWidth: "500px" }}>
          The page you're looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-lg" style={{ color: "#dc3545" }}>
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
