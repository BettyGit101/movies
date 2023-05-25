import React from 'react';
import SearchBar from '../UI/SearchBar';
import classes from "./Header.module.css";
import popcorenIcon from '../../assets/popcorenIcon.jpg';
import {SEARCH_BAR_CATEGORIES} from '../../utils/constants';

const Header = () => {
    return(
        <div className={classes.header}>
            <div className={classes.title}>
                <img className={classes.popcorenImage} src={popcorenIcon} alt="popcoren icon"></img>
                <div>Next Movies</div>
            </div>
            <div className={classes.searchBar}>
                <SearchBar categories={SEARCH_BAR_CATEGORIES}/> 
            </div>
        </div>
    )
}

export default Header;