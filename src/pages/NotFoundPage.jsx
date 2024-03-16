import { Link, useLocation } from "react-router-dom"


const NotFoundPage = () => {
  //*navigate ile gelen hata mesajına ulas
  const loc= useLocation()
  return (
    <div className="container py-6 d-flex flex-column gap-4 align-items-center">

      {loc.state&& <p className="bg-danger rounded p-2">{loc.state}</p> }
      
        <img className="img-fluid rounded w-75 my-5" src="/book.gif" alt="" />

        <div>
        <h1>Aradıgın sayfa bulunamadı</h1>
        <p>
            Böyle bir sayfa bulunamıyor Anasayfaya dönüp başka bir şey arayabilirsin
        </p>
         <Link to= {"/"} className="btn btn-primary ">
            Anasayfaya dön
         </Link>
         </div>
    </div>
  )
}

export default NotFoundPage