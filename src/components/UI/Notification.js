import React from "react";
import {Button} from "@mui/material";
import classes from "./Notification.module.css";

const Notification = ({color, message, buttonText}) => {

    const onClickHandler = () => {
        if (buttonText === 'Reload page') {
            window.location.reload(true);
        }
    }

    return (
        <div className={`${classes[color]} ${classes.content}`}>
            <h2>{message}</h2>
            {buttonText && <Button onClick={onClickHandler} 
                                   variant="contained" 
                                   color="secondary" 
                                   size="large">
                                   {buttonText}
                            </Button>}
        </div>
    );
};

export default Notification;
