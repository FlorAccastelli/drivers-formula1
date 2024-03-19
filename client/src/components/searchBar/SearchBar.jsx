import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";

export default function SearchBar(props) {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    function handleChange(event){
      setName(event.target.value);
    }

    const search = async (event) => {
    dispatch(searchByName(name));
    setName('');
    }

    return (
        <div>
            <input type='search' onChange={handleChange} placeholder="Ingresa un nombre" value={name} />
            <button onClick={search}>Search name</button>
        </div>
    );
}