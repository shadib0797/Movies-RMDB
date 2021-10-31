import React from "react";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//Components
import Thumb from "../Thumb/Thumb";
//Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";
//Fallback Image
import FallbackImage from "../../images/no_image.jpg";

function MovieInfo({movie}){
    return(
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb 
                    image={
                        movie.poster_path
                        ?`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        :FallbackImage
                    }
                    clickable={false}
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>

                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div className="director">
                            <h3>DIRECTOR{movie.directors.length>1? "S" : ""}</h3>
                            {movie.directors.map((director)=>
                                <p key={director.credit_id}>{director.name}</p>
                            )}
                        </div>
                    </div>

                </Text>
            </Content>
        </Wrapper>
    )
}

export default MovieInfo;