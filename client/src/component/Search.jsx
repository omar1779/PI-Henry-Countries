import{getCountryId , getCountryName} from '../Redux/action/index'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Search (){
    const dispatch = useDispatch();
    const[name ,setName] = useState('');
    const[id ,setId] = useState('');
    const handledInputChange = (e) =>{
        e.preventDefault();
        if (e.target.value.length !== 3) {
            return setName(e.target.value)
        } else {
            return setId(e.target.value)
        }
    }
    const handleClick = (e) =>{
        e.preventDefault();
        if (name.length > 3) {
            return dispatch(getCountryName(name))
        } else {
            return dispatch(getCountryId(id))
        }
    }
    return(
        <div>
            <input
                type={'text'}
                placeholder={'Search Country'}
                onChange={(e)=>{
                    handledInputChange(e)
                }}
            />
            <button onClick={(e)=>{
                handleClick(e)
            }}>Search</button>
        </div>
    )
}