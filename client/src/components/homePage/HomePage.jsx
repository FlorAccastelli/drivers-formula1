import React from "react";
import fakeCards from "../../fakeCards";
  
  export default function HomePage() {
    const Cards = fakeCards.map(c=> 
        <div key={c.id}>{c.name.forename}
        <img src={c.image.url}></img>
        <p>Teams: {c.teams}</p>
        </div>)

    return(
        <div>
          {Cards}
        </div>  
    )
  }

