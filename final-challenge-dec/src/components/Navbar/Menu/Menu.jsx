import React from 'react';
import styles from './Menu.module.css';

function Menu(){
    return(
        <div className={styles.wrapper}>
            <h5>
                Home
            </h5>
            <h5>
                Attorneys
            </h5>
            <h5>
                Practice Area
            </h5>
            <h5>
                About Us
            </h5>
            
        </div>
    );
}

export default Menu;