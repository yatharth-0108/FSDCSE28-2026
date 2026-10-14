import React from "react";
import { Link } from "react-router-dom"; // <-- Add this import

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>{" "}
            {/* Changed from /registration to /register */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
