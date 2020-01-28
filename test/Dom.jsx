import React, {useEffect} from 'react'
import {useArray, useBoolean, useMap, useNumber, useObject, useString} from "../src/index";
import Dom2 from "./Dom2";
import Dom3 from "./Dom3";

export default function Dom(props){
    // const test = useBoolean('test', true);
    // const test2 = useNumber('test', 22);
    // const test = useNumber('test', '22');
    const test = useArray('test', [23]);
    // const test = useString('test', '2');
    useEffect(() => {
        function ss(){
            let s = test.add(244).then(val => {
                // console.log(val);
            });
        }
        ss();

    }, []);
    return (
        <div>
            {JSON.stringify(test)}
            {}
            <button onClick={() => {console.log(test.add(244))}}>Add</button>
            {/*<button onClick={() => test.set('11')}>Toggle</button>*/}
            {/*<button onClick={() => test.add('test4', '11')}>Toggle</button>*/}
        </div>
    )
}
