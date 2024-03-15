import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getPage, searchByName } from "../../redux/actions";

export default function SearchBar(props) {
   // console.log(props);
   const [name, setName] = useState('');
   const driversPage = useSelector((state)=>state.driversPage);
   let currentPage = useSelector((state) => state.currentPage)
   const dispatch = useDispatch();

   function handleChange(event){
      // console.log(evento.target.value);
      setName(event.target.value);

   }

   const search = async (event) => {
    // event.target.value
    console.log("NAME:")
    console.log(name)
        dispatch(searchByName(name))
        //dispatch(getPage(currentPage))
}

   return (
      <div>
         <input type='search' onChange={handleChange} placeholder="Ingresa un nombre" value={name} />
         <button onClick={search}>Search name</button>
      </div>
   );
}