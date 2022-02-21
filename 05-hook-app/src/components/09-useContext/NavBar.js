import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Hooks Context App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/"      active="active" className="nav-link">Home</NavLink>
            <NavLink to="/about" active="active" className="nav-link">About</NavLink>
            <NavLink to="/login" active="active" className="nav-link">Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar