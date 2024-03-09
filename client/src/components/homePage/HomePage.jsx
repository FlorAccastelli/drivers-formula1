import React from "react";
import Cards from "../cards/Cards";
import { useDispatch } from "react-redux";
import { sortByNameAsc } from "../../redux/actions";
  
  export default function HomePage() {

    const dispatch = useDispatch();

    const handleSortOptionChange = (event) => {
      dispatch(sortByNameAsc());
    }

    return (
      <div>
        <select onChange={handleSortOptionChange}>
                <option value="">Ordenar por...</option>
                <option value="ascName">Nombre (Asc)</option>
        </select>
        <Cards />  
      </div>
      
    )
  }

