
import './header.scss';
import React from 'react';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPassport } from "@fortawesome/free-solid-svg-icons";
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import { elastic as Menu } from 'react-burger-menu';

export default function () {
    const [open, setOpen] = React.useState(false);
    return (

        <div className='header'>
            <Menu isOpen={ open } noOverlay={true}>
                <img className='logo2' src='img/logo_black.png' />      
                <a id="home" className="menu-item" href="/">  <FontAwesomeIcon className='icon' icon={faHome}/> Главная</a>
                <a id="about" className="menu-item" href="galery"> <FontAwesomeIcon className='icon'  icon={faPhotoVideo}/> Галерея</a>
                <a id="contact" className="menu-item" > <FontAwesomeIcon className='icon'  icon={faPassport}/>  О нас</a>
            </Menu>

            <div className='toolbar'>
                <img className='logo' src='img/logo_black.png' />         
            </div>

        
        </div>
    );
}
