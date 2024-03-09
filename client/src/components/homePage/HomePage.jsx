import React from "react";
import Cards from "../cards/Cards";
import { useDispatch } from "react-redux";
import { sortByNameAsc, sortByNameDesc, reset, sortByDobAsc, sortByDobDesc } from "../../redux/actions";
  
  export default function HomePage() {

    const dispatch = useDispatch();

    const handleSortOptionChange = (event) => {
      if (event.target.value === "RESET") {
        dispatch(reset());
      }
      if (event.target.value === "ascName") {
        dispatch(sortByNameAsc());
      }
      if (event.target.value === "descName") {
        dispatch(sortByNameDesc());
      }
      if (event.target.value === "ascDob") {
        dispatch(sortByDobAsc());
      }
      if (event.target.value === "descDob") {
        dispatch(sortByDobDesc());
      }
    }

    return (
      <div>
        <select onChange={handleSortOptionChange}>
            <option value="RESET">RESET</option>
            <option value="ascName">Name (Asc)</option>
            <option value="descName">Name (Desc)</option>
            <option value="ascDob">Dob (Asc)</option>
            <option value="descDob">Dob (Desc)</option>
        </select>
        <Cards />  
      </div>
    )
  }

