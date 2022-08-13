import CountryCard from './CountryCard'
import { useState, useEffect } from "react";
import { getCountryFilter} from '../Redux/action/index.js'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import './style/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home (){
    const [order, setOrder] = useState("ASC");
    const [page , setPage] = useState(0);
    const [filter, setFilter] = useState("");
    const [modeNight, setModeNight]= useState(false)
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
        if (page === 240) {
            setPage(0)
        }else {
            setPage(page + 10)
        }
    }
    const changeOrder = (e) =>{
        e.preventDefault();
        setOrder(e.target.value)
    }
    const changeFilter = (e) =>{
        e.preventDefault();
        setPage(0)
        setFilter(e.target.value)
    }
    const handler = (e)=>{
        e.preventDefault(e)
        if (modeNight===false){
            setModeNight(true)
        }else{
            setModeNight(false)
        }
    }
    return (
        <div className="container-home bg-light">
            <div className="filter">
                <div className="container-filters-forms">
                    <select onChange={(e)=>{changeOrder(e)}}>
                        <option value="ASC">Ascending</option>
                        <option value="DESC">Descending</option>
                    </select>
                    <select onChange={(e)=>{changeFilter(e)}}>
                        <option value="">All countries</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Population">Population</option>
                    </select>
                    <button onClick={
                        (e)=>{prev(e)}
                        }disabled={page <=0}
                        ><i class="fa-solid fa-angles-left text-light"></i>
                    </button>
                    <button onClick={
                        (e)=>{next(e)}
                        }/* disabled={countries.length < 10} */
                        ><i class="fa-solid fa-angles-right text-light"></i>
                    </button>
                </div>
            </div>
            <div className="container-cards text-decoration-none">
            {countries?.map((c)=>
                        <NavLink to={'/home/'+ c.id}key={c.id} style={{ textDecoration: 'none' }}>
                            <CountryCard
                                key={c.id}
                                name={c.name}
                                flag={c.flag}
                                continent={c.continent}
                                population={c.population}
                            />
                        </NavLink>
            )}
            </div>
        </div>
    )
}