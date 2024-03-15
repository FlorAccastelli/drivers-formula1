import React from "react";
import Cards from "../cards/Cards";
import { useDispatch } from "react-redux";
import { sortByNameAsc, sortByNameDesc, reset, sortByDobAsc, sortByDobDesc, filterByTeam } from "../../redux/actions";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useState } from "react";
  
  export default function HomePage() {

    const dispatch = useDispatch();
    const [drivers, setDrivers] = useState([]);

    


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

    const handleTeamOption = (event) => {
      dispatch(filterByTeam(event.target.value))
    }

    return (
      <div>
        <Link to='/drivers/create'>
          <button>Create your own driver</button>
        </Link>
        < SearchBar/>
        <select onChange={handleSortOptionChange}>
            <option value="RESET">RESET</option>
            <option value="ascName">Name (Asc)</option>
            <option value="descName">Name (Desc)</option>
            <option value="ascDob">Dob (Asc)</option>
            <option value="descDob">Dob (Desc)</option>
        </select>
        <select onChange={handleTeamOption}>
            <option value="McLaren">McLaren</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Prost">Prost</option>
            <option value="Sauber">Sauber</option>
            <option value="Jordan">Jordan</option>
            <option value="Williams">Williams</option>
            <option value="BMW">BMW</option>
            <option value="Renault">Renault</option>
            <option value="Minardi">Minardi</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Alpine">Alpine</option>
        </select>
        <Cards />  
      </div>
    )
  }

