import PropTypes from "prop-types";
import styled from "styled-components";

const MovieContainer=styled.div`

    .movie_info{
        background-color: white;
        width:100vh;
        height:100vh;
        border-color: black;
        border-radius: 30px;
        position: relative;
        left: 5%;
    }
    .details{
        color: white;
        position: relative;
        left:10%;
        font-size: 2rem;
    }
    .movie_img{
        position: relative;
        top:5%;
        left:5%;
        border-color: black;
        border-style: solid;
        border-width: 4px;
    }
    .movie_title{
        position: relative;
        top:5%;
        left: 5%;
        font-weight:700;
        font-size: 1.5rem;
    }
    .movie_genre{
        position: relative;
        top:5%;
        left: 5%;
        font-weight:700;
        font-size: 1rem;
    }
    .infos{
        position: relative;
        top:5%;
        left: 5%;
        font-size: 1rem;
    }
    .movie_des{
        position: relative;
        width:89vh;
        top:5%;
        left: 5%;
        font-size: 1rem;
    }
    .line{
        position: relative;
        top:4%;
        width:90vh;
    }

`

function MovieDetail({key,coverImg,title,genres,imdb,lang,runtime,likes,rating,description}){
    return ( 
    <MovieContainer>
        <h2 class="details">Details</h2>
        <div class="movie_info">
            <img class="movie_img" src={coverImg} alt="title" />
            <h2 class="movie_title">{title}</h2>
            <ul class="movie_genre">
                {genres.map((g)=>(
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <br></br>
            <hr class="line"/>
            <div class="infos">
                <div>imdb code: {imdb}</div>
                <div>language: {lang}</div>
                <div>runtime: {runtime} min</div>
                <div>like: {likes} | rating: {rating}</div>
            </div>
            <br></br>
            <hr class="line"/>
            <div class="movie_des">{description}</div>    
        </div>
    </MovieContainer>
    );
}

MovieDetail.propTypes={
    key:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    imdb: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    runtime:PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
}

export default MovieDetail;