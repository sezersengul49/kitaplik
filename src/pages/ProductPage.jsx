import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../components/Card"
import FilterArea from "../components/FilterArea";
import { useSearchParams } from "react-router-dom";




const ProductPage = () => {

 const [books ,setBooks]=useState(null)

 const [searchParams]= useSearchParams();

 const order = searchParams.get('sırala')
 const query = searchParams.get('aramaTerimi')


  useEffect (()=> {

    const params = {

      _sort: 'title',
      _order: order=== 'z-a' ? 'desc' : 'asc',

      q: query,
    }

    axios.get('http://localhost:3000/books',{params})
    .then((res)=>setBooks(res.data))
    .catch((err)=> console.log(err));

  }, [order, query])
 
  return (
    <div className="flex-grow-1 p-5">
      <h3>{books?.length} Kitap Bulundu</h3>

       <FilterArea/>


<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 mt-5 g-5">
      {books?.map((book) => (
        <div key={book.id} className="col"> 
         <Card  book= {book}/>
      </div>

      ))}
      </div>
    </div>
  );
};

export default ProductPage
