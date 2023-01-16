import React from 'react';

export default function Footer(props){
    return(
    <p className={`footerText ${!props.sprintsLoaded && "bottom"}`} >
        Copyright @ 2022 TappyTaps s.r.o.
    </p>
    )
    
}