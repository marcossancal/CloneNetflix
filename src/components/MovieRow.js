import React, { useState } from 'react';
import './MovieRow.css';
export default({title,items})=>{
    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth/2);
        if(x > 0){
            x=0;
        }
        setScrollX(0);
    }

    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth/2);
        if((window.innerWidth - items.results.length * 250) > x){
            x = (window.innerWidth - items.results.length * 250)
        }
        setScrollX(x);
    }
    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <span></span>
            </div>
            <div className="movieRow--Right" onClick={handleRightArrow}>
                <span></span>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft:scrollX,
                    width:items.results.length * 250,
                    transition:'all ease 0.5s'
                }}>
                    {items.results.length > 0 && items.results.map((item,key)=>(
                        <div key={key} className="movieRow--item">    
                            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}