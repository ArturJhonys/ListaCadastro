import React from 'react';


export default function Button( { event, value} ){
    return(
        <button onClick={ ()=> event(value)}>
            [X]
        </button>
    );
}