import React from 'react';


export default function Button( value ){
    return(
        <button onClick={ ()=> value}>
            [X]
        </button>
    );
}