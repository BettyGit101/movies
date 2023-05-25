import React from 'react';
import classes from "./Footer.module.css";
import {Stack} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return(
        <div className={classes.footer}>
            <div className={classes.logo}>N</div>
            <div className={classes.contactUs}>Contact us</div>
            <div className={classes.contanctDetails}>support@nextmovies.com</div>
            <div className={classes.contanctDetails}>Mon - Fri | 6:00am - 5:00pm PT</div>
            <Stack spacing={2} direction='row' sx={{ marginBottom: '30px' }}> 
              <FacebookIcon />
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </Stack>
        </div>
    )
}

export default Footer;