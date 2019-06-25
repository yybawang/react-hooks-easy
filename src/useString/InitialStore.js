import React from 'react'
import {namespaceParse} from "../utils/namespaceParse";
import {checkString} from "../utils/checkType";
import store, {createStore} from 'iostore'

let initialValues = {};
export default function initialStore(initialNamespace, initialValue){
    initialNamespace = namespaceParse(initialNamespace);
    if(initialValue !== undefined){
        checkString(initialValue);
        initialValues[initialNamespace] || (initialValues[initialNamespace] = initialValue);
        
        createStore({
            namespace: initialNamespace,
            value: initialValue,
            set(val){
                this.value = val;
            },
            reset(){
                this.value = initialValues[initialNamespace];
            },
            reInitial(value){
                initialValues[initialNamespace] = value;
                this.value = value
            },
            append(val){
                this.value += val;
            },
            prepend(val){
                this.value = val + this.value;
            }
        });
    }
    
    return store[initialNamespace];
}
