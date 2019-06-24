import React from 'react'
import {useArray, useBoolean, useMap, useNumber, useObject, useString} from "../src/index";

export default function Dom2(props){
    // const test = useBoolean('test');
    const test2 = useMap('test');

    return (
        <div>
            {/*<div>{JSON.stringify(test.value)}</div>*/}
            <div>{JSON.stringify(test2.value)}</div>
        </div>
    )
}
