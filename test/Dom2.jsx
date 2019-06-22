import React from 'react'
import {useArray, useBoolean, useNumber, useObject, useString} from "../src/index";

export default function Dom2(props){
    const test = useString('test');

    return (
        <div>
            <div>{JSON.stringify(test.value)}</div>
        </div>
    )
}
