import React from 'react';
import styles from './IconMenu.module.css';
import {ReactComponent as Instagram} from "../../../assets/InstagramIcon.svg";
import {ReactComponent as Facebook} from "../../../assets/FacebookIcon.svg";
import {ReactComponent as Twitter} from "../../../assets/TwitterIcon.svg";
import {ReactComponent as PinInterest} from "../../../assets/PinIntrestIcon.svg";

function IconMenu(){
    return(
        <div className={styles.wrapper}>
           <Instagram />
           <Facebook />
           <Twitter />
           <PinInterest /> 

        </div>
    )

}

export default IconMenu;