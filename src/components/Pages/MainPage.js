import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import classes from './MainPage.module.css';
import AvailableMovies from '../Movies/AvailableMovies';

const MainPage = () => {
    return(
        <div className={classes.pageContainer}>
            <Header />
            <AvailableMovies />
            <Footer />
        </div>
    )
}

export default MainPage;