import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

const MovieContainer=styled.div`

    width:100vh;
    height:40vh;
    background-color: white;
    border-radius: 30px;
    position: relative;
    left: 10%;

        .movie_img{
        position: absolute;
        top: 7%;
        left: 4%;
        }
        .movie_link{
            position:absolute;
            top: 10%;
            left: 32%;
            font-size: 30px;
            color: black;
        }
        .movie_summ{
            position:absolute;
            width:60vh;
            height:25vh;
            top: 30%;
            left: 32%;
            font-size: 20px;
        }
        .movie_genre{
            position:absolute;
            top: 65%;
            left: 32%;
        }
`;

function Movie({id,coverImg,title,summary,genres}){
    return ( 
    <MovieContainer>
        <div class="movie_info">
            <img class="movie_img" src={coverImg} alt="title" />
            <h2>
                <Link class="movie_link" to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p class="movie_summ">{summary.length>235?`${summary.slice(0,235)}...`:summary}</p>
            <ul class="movie_genre">
                {genres.map((g)=>(
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    </MovieContainer>
    );
}

Movie.propTypes={
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired 
}

export default Movie;