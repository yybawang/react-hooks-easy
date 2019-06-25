import React from 'react'
import {namespaceParse} from "../utils/namespaceParse";
import {checkNumber} from "../utils/checkType";
import store, {createStore} from 'iostore'

let initialValues = {};
export default function initialStore(initialNamespace, initialValue){
    initialNamespace = namespaceParse(initialNamespace);
    if(initialValue !== undefined){
        checkNumber(initialValue);
        initialValue = Number(initialValue);
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
            increment(val){
                this.value += val;
            },
            decrement(val){
                this.value -= val;
            }
        });
    }
    
    return store[initialNamespace];
}
