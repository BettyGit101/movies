import React from 'react';
import classes from './Rating.module.css';
import StarIcon from '@mui/icons-material/Star';

const Rating = ({rate, outOf}) => {
    
    return(
        <div className={classes.startsNum}>
            <StarIcon fontSize="large" />
            {rate ? 
                <span>
                    <span className={classes.spacing}>{rate}</span>
                    {outOf && <span>/{outOf}</span>}         
                </span>
            :
                <span className={classes.spacing}>Not Rated</span>
            }  
        </div>    
    )
}

export default Rating;