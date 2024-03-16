import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <header className="navbar bg-body-tertiary text-dark">
      <div className="container-fluid">

      <Link to= "/">
        <span className="navbar-brand mb-0 h1 fs-3">Kitap Kurdu</span>
        </Link>

        <nav className="d-flex gap-2">
            <NavLink to="/" >Anasayfa</NavLink>
            <NavLink  to="/ürünler" >Ürünler</NavLink >

            <NavLink  to="/ekstra" >ekstra</NavLink >

        </nav>
      </div>
    </header>
  )
}

export default Header
