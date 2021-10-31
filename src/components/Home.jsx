import React from "react";
//config
import {
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
} from "../config";

//componenets
import HeroImage from "./HeroImage/HeroImage";
import SearchBar from "./SearchBar/SearchBar";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";
import Spinner from "./Spinner/Spinner";
import Button from "./Button/Button";


//Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

//Image
import FallbackImage from "../images/no_image.jpg";


function Home() {
   const {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch();

    console.log(state);
    if(error) return <div>Something went wrong...</div>

    return (
        <>
        {!searchTerm && state.results[0] ? 
        <HeroImage 
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].title}
            text={state.results[0].overview}
        />
        :null}
        <SearchBar setSearchTerm={setSearchTerm}/>
        <Grid heading={searchTerm ? "Search Result" : "Popular Movies"}>
            {state.results.map((movie) => (
                <Thumb 
                    key={movie.id}
                    clickable
                    image={
                        movie.poster_path
                        ?`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        :FallbackImage
                    }
                    movieId={movie.id}
                />
            ))}
        </Grid>
        {loading && <Spinner />}
        {state.page<state.total_pages && !loading &&(
            <Button text="Load More" callback={() => setIsLoadingMore(true)}/>
        )}
        </>
    )
    }


    export default Home;