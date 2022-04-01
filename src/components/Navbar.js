import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-lightr navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Alto Mate
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Mates
            </a>
            <a className="nav-link" href="#">
              Yerbas
            </a>
            <a className="nav-link" href="#">
              Accesorios
            </a>
          </div>
        </div>
        <CartWidget/>
      </div>
    </nav>
  );
};

export default Navbar;
