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
                checkNumber(val);
                this.value = Number(val);
            },
            reset(){
                this.value = initialValues[initialNamespace];
            },
            reInitial(value){
                checkNumber(value);
                initialValues[initialNamespace] = Number(value);
                this.value = value
            },
            increment(val){
                checkNumber(val);
                this.value += Number(val);
            },
            decrement(val){
                checkNumber(val);
                this.value -= Number(val);
            }
        });
    }
    
    return store[initialNamespace];
}
