import React, { useEffect } from "react";
import Cards from "../cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { sortByNameAsc, sortByNameDesc, reset, sortByDobAsc, sortByDobDesc, filterByTeam, getDrivers, getPage, filterByOrigin } from "../../redux/actions";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import Teams from "../teams/Teams";
  
  export default function HomePage() {

    const dispatch = useDispatch();
    const allDrivers = useSelector((state)=>state.allDrivers);
    let currentPage = useSelector((state)=> state.currentPage)
    const driversPage = useSelector((state)=>state.driversPage);

    useEffect(()=>{
      dispatch(getDrivers())
      dispatch(getPage(currentPage))
    }, [])

    const handleSortOptionChange = (event) => {
      if (event.target.value === "RESET") {
        dispatch(getDrivers());
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

    const handleOriginOption = (event) => {
      dispatch(filterByOrigin(event.target.value))
    }

    return (
      <div>
        <Link to='/drivers/create'>
          <button>Create your own driver</button>
        </Link>
        < SearchBar/>
        <select onChange={handleSortOptionChange} defaultValue="OrderBy">
            <option value="OrderBy" disabled={true}>ORDER BY</option>
            <option value="RESET">Disorderly</option>
            <option value="ascName">Name (Asc)</option>
            <option value="descName">Name (Desc)</option>
            <option value="ascDob">Dob (Asc)</option>
            <option value="descDob">Dob (Desc)</option>
        </select>
        <Teams />
        <select onChange={handleOriginOption} defaultValue="filterByOrigin">
          <option value="filterByOrigin" disabled={true}>FILTER BY ORIGIN</option>
          <option value="fromDB">Drivers (DB)</option>
          <option value="fromAPI">Drivers (API)</option>
        </select>
        {allDrivers.length > 0 &&
        <Cards />
        }  
        {allDrivers.length === 0 &&
        <h3>No hay resultados</h3>
        }
      </div>
    )
  }

