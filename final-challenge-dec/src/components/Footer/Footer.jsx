import React from 'react';
import styles from './Footer.module.css';
import IconMenu from './IconMenu/IconMenu';
import Logo from '../Navbar/Logo/Logo';
import Menu from '../Navbar/Menu/Menu';
import CopyRights from './CopyRights/CopyRights';

function Footer(){
    return(
    <div className={styles.wrapper}>
      
        <div className={styles.row}>
            <Logo/>
            <Menu />
            <IconMenu />
        </div>
        <div>
            <CopyRights/>
        </div>

    </div>
    );
} 

export default Footer;