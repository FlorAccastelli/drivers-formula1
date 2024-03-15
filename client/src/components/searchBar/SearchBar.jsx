import { useState } from "react";

export default function SearchBar(props) {
   // console.log(props);
   const [name, setName] = useState('')

   function handleChange(event){
      // console.log(evento.target.value);
      setName(event.target.value)
   }

   const search = () => {
      props.onSearch(name)
      setName('')
   }

   return (
      <div>
         <input type='search' onChange={handleChange} placeholder="Ingresa un nombre" value={name} />
         <button onClick={search}>Search</button>
      </div>
   );
}