import React from 'react';
import '../styles/Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="socialMedia">
                <TwitterIcon></TwitterIcon>
                <InstagramIcon></InstagramIcon>
                <FacebookIcon></FacebookIcon>
                <LinkedInIcon></LinkedInIcon>
                <p>&copy; 2023 FoodCorner.com</p>
            </div>
            
        </div>
    );
};

export default Footer;