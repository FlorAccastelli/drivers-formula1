import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
const URL = 'http://localhost:3003/teams'
import { filterByTeam, getDrivers } from "../../redux/actions";

function Teams (props) {

    const [teams, setTeams] = useState([]);
    const dispatch = useDispatch();

    useEffect( ()=>{
         axios.get(URL)
        .then(({ data })=>{
            setTeams(data)
            })
        .catch(error => console.error(error));
    }, []);

    const handleTeamOption = (event) => {
        dispatch(filterByTeam(event.target.value))
      }

      return(
        <div>
            <select size="5" onChange={handleTeamOption}>
            {teams.map((t) => {
                return <option key={t.id} value={t.name}>{t.name}</option>
            })}
            </select>
        </div>  
      );
        
    
}

export default Teams;