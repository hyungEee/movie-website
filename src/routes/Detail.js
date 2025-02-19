import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import GlobalStyle from "../components/GlobalStyle";

function Detail(){
    const {id}=useParams();
    const [loading,setLoading]=useState(true);
    const [movie,setMovie]=useState([]);
    const getMovie=async()=>{
        const json= await(
          await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
          )
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(()=>{
        getMovie();
    },[]);
    return (
        <div>
        <GlobalStyle />
        {loading?(
          <h1>Loading...</h1>
        ):(
          <div>
            <MovieDetail 
              key={movie.id} 
              coverImg={movie.medium_cover_image}
              title={movie.title_long} 
              imdb={movie.imdb_code}
              lang={movie.language}
              runtime={movie.runtime}
              genres={movie.genres}
              likes={movie.like_count}
              rating={movie.rating}
              description={movie.description_full}
            />
          </div>
        )}
        </div> 
    )
}
export default Detail;