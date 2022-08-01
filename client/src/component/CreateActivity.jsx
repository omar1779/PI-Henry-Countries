import React,{ useState , useEffect, Fragment} from "react";
import {useDispatch , useSelector} from 'react-redux'
import { getCountryFilter , PostActivityCountry } from "../Redux/action";
import './style/CreateActivity.css'
import Search from './Search'
export default function CreateActivity (){
    /* inicializo funciones y creo estados para mi componente */
    const dispatch = useDispatch();
    const [order, ] = useState("ASC");
    const [page , setPage] = useState(0);
    const [filter,] = useState("");
    const [name,setName] = useState('')
    const [duration, setDuration] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [season, setSeason] = useState('')
    const [countryId, setCountryId] = useState([])
    const postName = (e)=>{
        e.preventDefault()
    }
    return(
        <div className="containerForm">
            <form className="form">
                <h2>create a new activity</h2>
                <p>Activity</p>
                <input type="text" placeholder="name" onChange={(e)=>{
                    postName(e)
                }}/>
                <p>Duration in hours</p>
                <input type="text" placeholder="duration" />
                <p>Difficulty</p>
                <input type="text" placeholder="difficulty"/>
                <p>select the season</p>
                <div className="inputSelect">
                    <select>
                        <option value="All the year">All the year</option>
                        <option value="Summer">Summer</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                        <option value="Autumn">Autumn</option>
                    </select>
                </div>
                <Search/>
            </form>
        </div>
    )
}