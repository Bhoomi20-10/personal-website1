// src/components/FSApp.js
import { Link } from "react-router-dom";

function FSApp() {
  return (
    <div className="fsapp">
      <h2>FS Practical App</h2>
      <p>This is my full stack practical project (e.g., FitnessPoint).</p>
      <Link to="/portfolio">⬅ Back to Portfolio</Link>
    </div>
  );
}

export default FSApp;
