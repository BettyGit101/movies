import React from 'react';
import Rating from '../../UI/Rating';
import classes from './MovieItem.module.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const MovieItem = ({movieData,setModal,setSelectdeMoive}) => {

    const showMovieDetails = () => {
        setModal(true);
        setSelectdeMoive(movieData);
    }

    return (
        <div className={classes.movieCard}>
            <img className={classes.cover} src={movieData.image} alt="movie cover"/>
            <div className={classes.title}>
                <span>{movieData.title}&nbsp;</span>
                <span>({movieData.released})</span>
            </div>
            <div className={classes.rate}>
                <Rating rate={movieData.rating}/>
            </div>
            <div className={classes.readMore} onClick={showMovieDetails}>
                <span className={classes.text}>Read more</span>
                <ArrowRightAltIcon sx={{marginTop: '4px'}} />
            </div>
        </div>
    )
}

export default MovieItem
