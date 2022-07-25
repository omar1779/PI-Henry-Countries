import React, { Fragment } from "react";
import CountryCard from './CountryCard'
import { useState, useEffect } from "react";
import { getCountryFilter} from '../Redux/action/index.js'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Search from "./Search";

export default function Home (){
    const [order, setOrder] = useState("ASC");
    const [page , setPage] = useState(0);
    const [filter, setFilter] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCountryFilter(page,order,filter))
    },[dispatch,order,page,filter])
    const countries = useSelector((state) => state.allCountries)
    const prev = (e) =>{
        e.preventDefault();
        if (page <=0) {
            setPage(0)
        } else {
            setPage(page - 10)
        }
    }
    const next = (e) =>{
        e.preventDefault();
        if (countries.length < 10) {
            return;
        } else {
            setPage(page + 10)
        }
    }
    const changeOrder = (e) =>{
        e.preventDefault();
        setOrder(e.target.value)
    }
    return (
        <div>
            <Search/>
            {countries?.map((c)=>{
                return(
                    <Fragment>
                        <NavLink to={'/home/'+ c.id}>
                        <CountryCard
                            name={c.name}
                            flag={c.flag}
                            continent={c.continent}
                            key={c.id}
                        />
                        </NavLink>
                    </Fragment>
                )
            })}
            <div>
                <h5>list order forms :</h5>
                <select onChange={(e)=>{changeOrder(e)}}>
                    <option value="ASC">Ascending</option>
                    <option value="DESC">Descending</option>
                </select>
            </div>
            <div>
                <button onClick={
                    (e)=>{prev(e)}
                    }disabled={page <=0}
                    >Prev
                </button>
                <button onClick={
                    (e)=>{next(e)}
                    }disabled={countries.length < 10}
                    >Next
                </button>
            </div>
        </div>
    )
}