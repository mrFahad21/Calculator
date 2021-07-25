import React from 'react';
import OutputRow from './OutputRow';

const Output = props => {
    return(
    <div>
        <OutputRow value={props.answer} />
        <OutputRow value={props.user} textSize={{fontSize: '30px'}}/>

    </div>
    
);
}

export default Output;