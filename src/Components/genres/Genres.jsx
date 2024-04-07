import React from 'react'
import { useSelector } from "react-redux";
import "./style.css"
const Genres = ({data}) => {
    const { genres } = useSelector((state) => state.home);
    
  return (
    <div className="genres">
    {data?.map((g) => {
      console.log(genres[g]);
        if (!genres[g]?.name) return;
        
        return (
            <div key={g} className="genre">
                {genres[g]?.name}
            </div>
        );
    })}
</div>
  )
}

export default Genres
