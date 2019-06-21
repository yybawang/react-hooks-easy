import React from 'react'
import {useBoolean} from "../src/useBoolean/useBoolean";

export default function basic(props){
    const {boolean, toggleBoolean} = useBoolean(false);
    
    return (
        <div>
            <div>{boolean ? 'true': 'false'}</div>
            <button onClick={() => toggleBoolean()}>Toggle</button>
        </div>
    )
}