import React from 'react'
import {namespaceParse} from "../utils/namespaceParse";
import {checkObject} from "../utils/checkType";
import store, {createStore} from 'iostore'
import {isFunction} from "iostore/src/util";

let initialValues = {};
export default function initialStore(initialNamespace, initialValue){
    initialNamespace = namespaceParse(initialNamespace);
    if(initialValue !== undefined){
        checkObject(initialValue);
        initialValues[initialNamespace] || (initialValues[initialNamespace] = {...initialValue});
        createStore({
            namespace: initialNamespace,
            value: initialValue,
            async add(key, val){
                val = isFunction(val) ? await val() : val;
                this.value[key] = val;
                return this.value;
            },
            reset(){
                this.value = {...initialValues[initialNamespace]};
                return this.value;
            },
            async reInitial(val){
                val = isFunction(val) ? await val() : val;
                checkObject(val);
                initialValues[initialNamespace] = {...val};
                this.value = val;
                return this.value;
            },
            del(key){
                delete this.value[key];
                return this.value;
            },
            // 擴展數組的splice方法，方便在對象中排序
            splice(index, length, value){
                let temp = {...this.value}, temp_keys = Object.keys(temp), temp_values = Object.values(temp);
                temp_keys.splice(index, length, ...Object.keys(value));
                temp_values.splice(index, length, ...Object.values(value));
    
                let temp2 = {};
                for(let i in temp_keys){
                    temp2[temp_keys[i]] = temp_values[i];
                }
                this.value = temp2;
                return this.value;
            },
        });
    }
    
    return store[initialNamespace];
}
