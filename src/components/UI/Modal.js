import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Background = props => {
    return(
        <div className={classes.background} 
             onClick={() => props.onClose(false)}>      
        </div>
    )
}

const ModalPopup = props => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('modal');

const Modal = (props) => {
    return(
        <Fragment>
            {ReactDOM.createPortal(<Background onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(<ModalPopup>{props.children}</ModalPopup>, portalElement)}
        </Fragment>
    )
}

export default Modal;