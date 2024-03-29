import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountryId } from "../Redux/action";
import CountryCard from'./CountryCard'
import Activity from "./Activity";
import './style/detail.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CountryDetail (props){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCountryId(props.match.params.id))
    },[dispatch, props.match.params.id])
    const idCountry = useSelector((state)=>state.allCountries)
    return(
        <div className="container">
            <div className="detail">
            {idCountry?.map((c)=>{
                return(
                    <div className="container-card"key={c.id}>
                        <CountryCard
                        flag = {c.flag}
                        name = {c.name}
                        continent = {c.continent}
                        id = {'ID : '+c.id}
                        capital = {`Capital :${c.capital}`}
                        subregion = {`Subregion :${c.subregion}`}
                        area = {`Area :${c.area} Km2`}
                        tld = {c.tld}
                        population = {c.population}
                        />
                        <div className="container-activities">
                        {c.Activities?.map((element)=>{
                            return(
                                    <Activity
                                    activity={'Activity : ' +element.name}
                                    difficulty={'Difficulty : ' +element.difficulty}
                                    duration={'Duration : '+element.duration + 'hrs'}
                                    season={'Season : '+ element.season}
                                    />
                            )
                        })}
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}