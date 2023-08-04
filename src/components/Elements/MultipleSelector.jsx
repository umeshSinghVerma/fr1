import React, { useEffect } from 'react'
import { Select, initTE } from "tw-elements";
export default function MultipleSelector(props) {
    useEffect(()=>{
        initTE({ Select });
    })
    return (
        <div dir='ltr'>
            <select data-te-select-init dir='ltr'>
                <option value="1">{props.text}</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
            </select>
        </div>
    )
}
