import { Link } from "react-router-dom"


const MainPages = () => {
  return (
    <div className=" container d-flex flex-column gap-5 p-4">
      <h1 className="text-center">Hoşgeldiniz</h1>
      <img className="w-100 rounded-3" src="/wel.jpg" alt="" />

      <p>
         <Link to={'/ürünler'}> Ürünler sayfasında </Link> yeni çıkan bütün kitaplara ulaşabilirsniz
         </p>
    </div>
  )
}

export default MainPages
