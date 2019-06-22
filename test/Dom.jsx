import React from 'react'
import {useArray, useBoolean, useNumber, useObject, useString} from "../src/index";
import Dom2 from "./Dom2";
import Dom3 from "./Dom3";

export default function Dom(props){
    // const testBoolean = useBoolean('test', false);
    // const test = useNumber('test', 22);
    // const test = useObject('test', {'test1': '123', 'test2': '123', 'test3': '123'});
    // const test = useArray('test', [23]);
    const test = useString('test', '2');

    return (
        <div>
            <Dom2 />
            {/*<Dom3 />*/}
            {/*<button onClick={() => test.inc()}>Toggle</button>*/}
            <button onClick={() => test.append('sdfsdf')}>Toggle</button>
            <button onClick={() => test.set('11')}>Toggle</button>
        </div>
    )
}
