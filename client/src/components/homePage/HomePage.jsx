import React from "react";
import Cards from "../cards/Cards";
import { useDispatch } from "react-redux";
import { getPage, sortByNameAsc, sortByNameDesc } from "../../redux/actions";
  
  export default function HomePage() {

    const dispatch = useDispatch();

    const handleSortOptionChange = (event) => {
      if (event.target.value === "ascName") {
        dispatch(sortByNameAsc());
      }
      if (event.target.value === "descName") {
        dispatch(sortByNameDesc());
      }
      if (event.target.value === "orderCharacter") {
        dispatch(getPage(1));
      }
    }

    return (
      <div>
        <select onChange={handleSortOptionChange}>
            <option value="orderCharacter">order...</option>
            <option value="ascName">Name (Asc)</option>
            <option value="descName">Name (Desc)</option>
        </select>
        <Cards />  
      </div>
    )
  }

