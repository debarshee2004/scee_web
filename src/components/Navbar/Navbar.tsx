import "./Navabar.css"

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar">
          <h3>
          IEI SCEE AOT 
          </h3>
          <div>
            <a className="follow" href="">Home</a>
            <a className="follow" href="">About</a>
            <a className="follow" href="">Team</a>
            <a className="follow" href="">Faculty</a>
            <a className="follow" href="">Events</a>
          </div>
          <button className="membership">
            Become a Member
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar