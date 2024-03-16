import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import MainPages from './pages/MainPages'
import ProductPage from './pages/ProductPage'
import Header from './components/Header'
import Footer from './components/Footer'
import DetailPage from './pages/DetailPage'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './components/Layout'




const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      
      <Route path='/' element={<MainPages/>}/>
      <Route path='/ürünler' element={<ProductPage/>}/>
       <Route path='/ürün/:id' element= { <DetailPage/>}/>

//*nested routes:iç içe routelar
        <Route path='/ekstra' element={ <Layout/>}> 
         <Route path='kategoriler' element={  <h1> Kategoriler</h1>} />
         <Route path='kampanyalar'  element={  <h1> Kampanyalar</h1>}/>

         <Route path='ayarlar'  element={  <h1> Ayarlar</h1>}/>



        </Route>

       //* tanımsız sayfa tanımlama
        <Route path="*" element={<NotFoundPage/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
