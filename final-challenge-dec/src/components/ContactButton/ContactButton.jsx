import React from 'react';
import styles from './ContactButton.module.css';

function ContactButton(){
    return(
        <div className={styles.wrapper}>
            <h5 className={styles.header}>
                Contact
            </h5>
        </div>
    );
}

export default ContactButton;