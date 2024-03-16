
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const DetailPage = () => {

    const [book,setBook]=useState(null)

   const navigate= useNavigate()
//dinamik sayfa

//1 urldeki id parametresini al
//useParams urle eklenmiş olan path paramsa erişim sağlar

const {id}=useParams();

//2 idsinin bildiğimiz kitabın bilgilerini al

useEffect(()=> {
    axios.get (`http://localhost:3000/books/${id}`)
    .then((res)=>setBook(res.data))

    .catch((err)=> {

navigate("/undefined" ,{state:err.message});
    })
},[])


  return (
    <div>
        {!book && <p>Yükleniyor..</p> }

        {book && (
            <div className="row my-5 p-5">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img
                    style={{maxHeight:'400px'}}
                    className="rounded img-fluid shadow"
                    src={book.image} alt= {book.title}/>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-3">
                    <h1>{book.title}</h1>

                    <div className="my-4">
                         <BookInfo label='yazar' value={book.author}/>
                         <BookInfo label="Açıklama" value={book.description}/>
                         <BookInfo label="yıl" value={book.year}/>
                         <BookInfo label="sayfa sayısı" value={book.page}/>
                    </div>
                    </div>
            </div>
        )}
    </div>
  )
}

export default DetailPage;

//* 2. component

const BookInfo =({label ,value})=> {
    return (
        <p className="fs-5">
            <span className="badge bg-danger me-3">{label}</span>
            <span>{value}</span>
        </p>
    )
}