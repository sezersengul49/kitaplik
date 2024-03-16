import { NavLink,Outlet, useNavigate, Navigate } from "react-router-dom"


const Layout = () => {

    const navigate= useNavigate();
    const user= {
        name:'ahmet',
        type:'admin',
    }

    if(user.type!=='admin') {

    // navigate('/')
    return  <Navigate to={'/'}/>

}
  return (
    <div className="d-flex gap-5 p-4">
        <aside className="d-flex flex-column bg-light p-3 rounded">
            <NavLink to= {'/ekstra/kategoriler'}>kategoriler</NavLink>
            <NavLink to= {'/ekstra/kampanyalar'}>kampanyalar</NavLink>
            <NavLink to= {'/ekstra/ayarlar'}>ayarlar</NavLink>

        </aside>
        <div>
            {/*Asıl sayfa içeriğini gösterir route da olan elementin içini basar*/}
           <Outlet/>
        </div>
    </div>
  )
}

export default Layout