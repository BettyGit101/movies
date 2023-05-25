import React, {useState, useEffect, useContext} from 'react';
import SelectedMoive from './SelectedMoive';
import MovieItem from './MovieItem/MovieItem';
import Notification from '../UI/Notification';
import classes from './AvailableMovies.module.css';
import MovieContext from "../../store/movie-context";
import CircularProgress from '@mui/material/CircularProgress';

const AvailableMovies = () => {

    const movieCtx = useContext(MovieContext);

    const [error, setError] = useState(null);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [modalIsShown, setModalIsShown] = useState(false);
    const [userSelectedMoive, setUserSelectedMoive] = useState();

    const modalDisplayHandler = (value) => {
        setModalIsShown(value);
    }

    const userSelectedMoiveHandler = (movie) => {
        setUserSelectedMoive(movie);
    }

    const displayMovieCards = (arrayToMap) => {
        return (
            arrayToMap.map(movie => <MovieItem key={movie.id} 
                movieData={movie} 
                setModal={modalDisplayHandler}
                setSelectdeMoive={userSelectedMoiveHandler}/>)
        )
    }


    let pageContent = "";
   
    if ( !movieCtx.isFiltered && movieCtx.items.length > 0 ) {
        pageContent = <div className={classes.movieItems}>
                            {displayMovieCards(movieCtx.items)}
                      </div>

    } 
    else if (movieCtx.isFiltered && movieCtx.filteredItems.length > 0) {
        pageContent = <div className={classes.movieItems}>
                            {displayMovieCards(movieCtx.filteredItems)}
                      </div>
    }
    else if (error) {
        pageContent = <Notification color="error"
                                    buttonText="Reload page"
                                    message='Somthing went wrong...'/>

    } else if (isPageLoading) {
        pageContent = <div className={classes.spinner}>
                                <CircularProgress />
                       </div>
    } else {
        pageContent = <Notification color="info"
                                    buttonText="Reload page"
                                    message='No Movies Found'/>
    }


    useEffect(() => {
        fetchMoviesHandler();
    },[])
    
    const fetchMoviesHandler = async() => {
        setError(null);
        setIsPageLoading(true);
    
        try {
          const response = await fetch("http://localhost:3000/movies");
         
          if (!response.ok) {
            throw new Error('Somthing went wrong!')
          }
    
          const moviesData = await response.json();
          movieCtx.addItems(moviesData);
        }

        catch(error) {
          setError(error.message);
        }
        setIsPageLoading(false);
      };



    return(
        <div className={classes.content}>
            <div className={classes.title}>
                <div>EXPLORE YOUR NEXT</div>
                <div>MOVIES AND TV SHOWS</div>
            </div>
            {pageContent}
            {modalIsShown && <SelectedMoive onCloseButtonClick={modalDisplayHandler} movieData={userSelectedMoive}/>}
        </div>
    )
   
}

export default AvailableMovies;
