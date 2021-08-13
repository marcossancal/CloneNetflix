import React from 'react';
import './FeaturedMovie.css';

export default({item})=>{

let genres = [];
for(let i in item.genres){
    genres.push(item.genres[i].name);
}


    return(
        <section className="featured" style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--box">
                        <div className="featured--title">
                            {item.original_name}
                        </div>
                        <div className="featured--infos">
                            <div className="vote">
                                {item.vote_average} ponto{item.vote_average !== 1 ? 's' : ''}
                            </div>
                            <div className="date">
                            {new Date(item.first_air_date).getFullYear()}
                            </div>
                            <div className="seasons">
                                {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
                            </div>
                        </div>
                        <div className="description">
                            {item.overview}
                        </div>
                        <div className="buttons">
                            <a href="" className="assistir">▸ Assistir</a>
                            <a href="" className="minhalista">+ Minha Lista</a>
                        </div>
                        <div className="genres">
                            <strong>Gêneros:</strong> {genres.join(", ")}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
}