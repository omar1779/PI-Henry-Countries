import React, { Fragment } from "react";
import CountryCard from './CountryCard'
import { useState, useEffect } from "react";
import { getCountryFilter} from '../Redux/action/index.js'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import './style/home.css'

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
    const changeFilter = (e) =>{
        e.preventDefault();
        setFilter(e.target.value)
    }
    return (
        <div className="container-home">
            <div className="container-cards">
            {countries?.map((c)=>{
                return(
                    <Fragment>
                        <NavLink to={'/home/'+ c.id}>
                        <CountryCard
                            name={c.name}
                            flag={c.flag}
                            continent={c.continent}
                            population={c.population}
                            key={c.id}
                        />
                        </NavLink>
                    </Fragment>
                )
            })}
            </div>
            <div className="filter">
            {/* -------------------------------------------------------- */}
                <div className="container-filters-forms">
                    <h3>list order forms :</h3>
                    <select onChange={(e)=>{changeOrder(e)}}>
                        <option value="ASC">Ascending</option>
                        <option value="DESC">Descending</option>
                    </select>
                    <h4>list order forms :</h4>
                    <select onChange={(e)=>{changeFilter(e)}}>
                        <option value="">All countries</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Population">Population</option>
                    </select>
                </div>
                <div className="container-page-control">
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
        </div>
    )
}