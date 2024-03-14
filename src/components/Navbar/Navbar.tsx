import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar">
          <h3>IEI SCEE AOT</h3>
          <div>
            <ul className="menu">
              <li>Home</li>
              <li>Teams</li>
              <li>Faculty</li>
              <li>Events</li>
            </ul>
          </div>
          <button className="membership">Become a Member</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
