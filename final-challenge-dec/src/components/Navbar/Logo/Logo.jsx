import React from 'react';
import Logoimage from '../../../assets/Logo.png';

function Logo(){
    return(
    <div>
        <img src={Logoimage} alt="Logo" width={143}>
        </img>
    </div>
    );
}

export default Logo;