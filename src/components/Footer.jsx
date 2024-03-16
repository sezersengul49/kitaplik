

const Footer = () => {
  return (
   
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top bg-body-tertiary">
    <p className="col-md-4 mb-0 text-muted">&copy; 2024 Company, Inc</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use /></svg>
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a  className="nav-link px-2 text-muted">Features</a></li>
      <li className="nav-item"><a  className="nav-link px-2 text-muted">Pricing</a></li>
      <li className="nav-item"><a className="nav-link px-2 text-muted">FAQs</a></li>
      <li className="nav-item"><a  className="nav-link px-2 text-muted">About</a></li>
    </ul>
  </footer>

  )
}

export default Footer
