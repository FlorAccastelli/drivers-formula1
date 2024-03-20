import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";
import styles from "./searchBar.module.css"

export default function SearchBar(props) {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    function handleChange(event){
      setName(event.target.value);
    }

    const search = async (event) => {
    dispatch(searchByName(name));
    }

    return (
        <div className={styles.searchBar}>
            <input type='search' onChange={handleChange} placeholder="Ingresa un nombre" value={name} />
            <button onClick={search}>Search name</button>
        </div>
    );
}