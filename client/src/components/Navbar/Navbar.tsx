import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar">
          <h3>IEI SCEE AOT</h3>
          <div>
            <div className="menu">
              <Link className="li" to="/">Home</Link>
              <Link className="li" to="/team">Team</Link>
              <Link className="li" to="/faculty">Faculty</Link>
              <Link className="li" to="/events">Events</Link>
            </div>
          </div>
          <button className="membership">Become a Member</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
