import React from 'react';
import Modal from '../UI/Modal';
import Rating from '../UI/Rating';
import classes from './SelectedMoive.module.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const SelectedMoive = ({onCloseButtonClick, movieData}) => {
    const duration = movieData.runtime.replace('h','h ');

    return(
        <Modal onClose={onCloseButtonClick}>
            <div className={classes.container}>
                <div className={classes.sideBySide}>
                    <img src={movieData.image} alt="colored cover" className={classes.image}/>
                    <div className={classes.moreDetails}>
                        <div className={classes.details}>
                            <h1>{movieData.title}</h1>
                            <div>{duration}</div>
                            <Rating rate={movieData.rating} outOf='10' />
                            <div>{movieData.synopsis}</div>   
                        </div>
                        <div className={classes.backToList} onClick={()=> onCloseButtonClick(false)}>
                            <KeyboardBackspaceIcon sx={{marginTop: '4px'}} />
                            <span>Back to list</span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default SelectedMoive;