import React from "react";
//Router
import { useParams } from "react-router-dom";

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//components
import Grid from "./Grid/Grid";
import Spinner from "./Spinner/Spinner";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import Actor from "./Actor/Actor";

//Hook
import { useMovieFetch } from "../hooks/useMovieFetch";

//Fallback Image
import FallbackImage from "../images/no_image.jpg";

function Movie(){

    const {movieId} = useParams();
    const {state, loading, error } = useMovieFetch(movieId);

    console.log(state);

    if(loading) return <Spinner />;
    if(error) return <div>Something went wrong</div>

    return(
        <>
        <BreadCrumb movieTitle={state.original_title} />
        <MovieInfo movie={state}/>
        <MovieInfoBar time={state.runtime} budget={state.budget} revenue={state.revenue}/>
        <Grid heading="Actors">
            {state.actors.map(actor=>(
                <Actor 
                    key={actor.credit_id}
                    name={actor.name}
                    character={actor.character}
                    imgUrl={
                        actor.profile_path
                        ?`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                        : FallbackImage
                    }
                />
            ))}
        </Grid>
        </>
    )
}

export default Movie;