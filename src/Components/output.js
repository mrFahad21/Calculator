import React from 'react';
import OutputRow from './OutputRow';

const Output = props => {
    return(
    <div>
        <OutputRow value={99} textSize={{fontSize: '20px'}} />
        <OutputRow value={100} textSize={{fontSize: '50px'}} />

    </div>
    
);
}

export default Output;