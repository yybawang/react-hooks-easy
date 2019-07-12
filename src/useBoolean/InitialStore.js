import React from 'react'
import {namespaceParse} from "../utils/namespaceParse";
import {checkBoolean} from "../utils/checkType";
import store, {createStore} from 'iostore'
import {isFunction} from "iostore/src/util";

let initialValues = {};
export default function initialStore(initialNamespace, initialValue){
    initialNamespace = namespaceParse(initialNamespace);
    if(initialValue !== undefined){
        checkBoolean(initialValue);
        initialValues[initialNamespace] || (initialValues[initialNamespace] = initialValue);
        
        createStore({
            namespace: initialNamespace,
            value: initialValue,
            async set(val){
                val = isFunction(val) ? await val() : val;
                checkBoolean(val);
                this.value = val;
                return this.value
            },
            reset(){
                this.value = initialValues[initialNamespace];
                return this.value;
            },
            async reInitial(val){
                val = isFunction(val) ? await val() : val;
                checkBoolean(val);
                initialValues[initialNamespace] = val;
                this.value = val
                return this.value;
            },
            toggle(){
                this.value = !this.value;
                return this.value;
            }
        });
    }
    
    return store[initialNamespace];
}
