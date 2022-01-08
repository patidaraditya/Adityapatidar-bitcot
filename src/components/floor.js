import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Floor = () => {
  return (
    <div>
      <h2>Floor</h2>
      <nav>
        <ul>
          <li>
            <Link to="/building/floor/apartment">Apartment</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
