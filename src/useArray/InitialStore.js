import React from 'react'
import {namespaceParse} from "../utils/namespaceParse";
import {checkArray} from "../utils/checkType";
import store, {createStore} from 'iostore'
import {isFunction} from "iostore/src/util";

let initialValues = {};
export default function initialStore(initialNamespace, initialValue){
    initialNamespace = namespaceParse(initialNamespace);
    if(initialValue !== undefined){
        checkArray(initialValue);
        initialValues[initialNamespace] || (initialValues[initialNamespace] = [...initialValue]);
        
        createStore({
            namespace: initialNamespace,
            value: initialValue,
            async add(key, val = undefined){
                // 如果没传递第二个值，就当作是push，否则就是更改某一个键
                if(typeof val === "undefined"){
                    this.value.push(key);
                }else{
                    val = isFunction(val) ? await val() : val;
                    this.value[key] = val;
                }
                return this.value;
            },
            reset(){
                this.value = [...initialValues[initialNamespace]];
                return this.value;
            },
            async reInitial(val){
                val = isFunction(val) ? await val() : val;
                checkArray(val);
                initialValues[initialNamespace] = [...val];
                this.value = val;
                return this.value;
            },
            del(key){
                delete this.value[key];
            },
            async push(val){
                val = isFunction(val) ? await val() : val;
                this.value.push(val);
                return this.value;
            },
            async unshift(val){
                val = isFunction(val) ? await val() : val;
                this.value.unshift(val);
            },
            splice(index, length, ...value){
                this.value.splice(index, length, ...value);
                return this.value;
            },
        });
    }
    
    return store[initialNamespace];
}
