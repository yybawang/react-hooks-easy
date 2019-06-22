import React from 'react'
import {useBoolean, useNumber} from "../src/index";

export default function Dom3(props){
    const test = useNumber('test');
    
    return (
        <div>
            <div>{test.value}</div>
        </div>
    )
}
