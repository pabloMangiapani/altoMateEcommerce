import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-lightr navbar-dark bg-dark"
    >
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
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link navbar-dark" href="#">
              Mates
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link navbar-dark" href="#">
              Yerbas
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link navbar-dark" href="#">
              Accesorios
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
