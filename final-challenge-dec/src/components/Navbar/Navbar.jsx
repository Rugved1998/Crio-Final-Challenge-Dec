import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import ContactButton from '../ContactButton/ContactButton';

function Navbar(){
    return(
        <div className={styles.wrapper}>
            <Logo />
            <Menu />
            <ContactButton />
        </div>
    );
}

export default Navbar;