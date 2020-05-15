import React from 'react';


export default function Button( { onClick, value, text } ){
    return(
        <button onClick={ ()=> onClick(value)}>
            {text}
        </button>
    );
}