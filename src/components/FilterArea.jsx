import { useSearchParams } from "react-router-dom";


const FilterArea = () => {
const [searchParams, setSearchParams]= useSearchParams();


    const handleSubmit= (e)=> {
        e.preventDefault();

     searchParams.set('aramaTerimi', e.target[0].value);
     setSearchParams(searchParams);
    }

    const handleSelect =(e)=> {
        searchParams.set('sırala', e.target.value)
        setSearchParams(searchParams);
        
    }


  return (
    <div className="mt-3 d-flex gap-3 align-items-center justify-content-between">
        <div className="d-flex gap-3 align-items-center">
            <label>Sırala </label>

            <select defaultValue={searchParams.get('sırala')} onChange={handleSelect} className="form-select">
                <option>a-z</option>
                <option>z-a</option>

            </select>

        </div>
        <form 
        onSubmit={handleSubmit}
        className="d-flex gap-2" >
            <input defaultValue={searchParams.get('aramaTerimi')} className="form-control" placeholder="Aratılacak metin" type="text" />
            <button className="btn btn-primary">Ara</button>
        </form>
    </div>
  )
}

export default FilterArea