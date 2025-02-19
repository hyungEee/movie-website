import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import GlobalStyle from "../components/GlobalStyle";

function Home(){
    const [loading,setLoading]=useState(true);
    const [movies,setMovies]=useState([]);
    const getMovies=async()=>{
      const json= await(
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(()=>{
      getMovies();
    },[]);
  
    return (
      <div>
        <GlobalStyle />
      {loading?(
        <h1>Loading...</h1>
      ):(
        <div>
          {movies.map((movie)=>(
            <Movie 
              key={movie.id} //key is required when we render components inside of arrays so React can know which elements are unique!
              id={movie.id} 
              coverImg={movie.medium_cover_image} 
              title={movie.title} 
              summary={movie.summary} 
              genres={movie.genres}
            />
          ))}
        </div>
      )}
      </div> 
    );
}
export default Home;