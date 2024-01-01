import React from 'react';
import styles from './CopyRights.module.css'

function CopyRights(){
    return(
        <div className={styles.wrapper}>
            <span>© 2020 Acme. All right reserved</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
        </div>
    );
}

export default CopyRights;