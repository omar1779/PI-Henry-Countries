import React,{ useState , useEffect ,useRef, useLayoutEffect} from "react";
import {useDispatch , useSelector} from 'react-redux'
import {PostActivityCountry, getCountryName } from "../Redux/action";
import './style/CreateActivity.css'
export default function CreateActivity (){
    /* inicializo funciones y creo estados para mi componente */
    const dispatch = useDispatch();
    const [name,setName] = useState('')
    const [duration, setDuration] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [season, setSeason] = useState('')
    const [countryId, setCountryId] = useState([])
    const [countryObj, setCountryObj] = useState([])
    const [countrySearch, setCountrySearch] = useState([])
    const [error, setError] = useState(false)
    const countries = useSelector((state)=>state.allCountries)
    useLayoutEffect(()=>{
        dispatch(getCountryName(countrySearch))
    },[countrySearch, dispatch])
    const postName = (e)=>{
        e.preventDefault()
        if( e.target.value === null || e.target.value.length === 0 || !/^[a-zA-Z0-9& áéíóú]+$/.test(e.target.value) ) {
            setError(true)
        }else{
            setName(e.target.value)
            setError(false)
        }
    }
    const postDuration = (e)=>{
        e.preventDefault()
        if( isNaN(e.target.value) || e.target.value <0 ) {
            setError(true)
        }else{
            setDuration(e.target.value)
            setError(false)
        }
    }
    const postDifficulty = (e)=>{
        e.preventDefault()
        setDifficulty(e.target.value)
    }
    const postSeason = (e)=>{
        e.preventDefault()
        setSeason(e.target.value)
    }
    const handledInputChange = (e)=>{
        e.preventDefault()
        setCountrySearch(e.target.value)
    }
    const handledButton = (e)=>{
        e.preventDefault()
        setCountryObj([...countryObj, ...countries])
    }
    const handledButtonList = (e)=>{
        e.preventDefault()
        setCountryId([...new Set(countryObj.map((e) => e.id))])
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(name && duration && difficulty && season && countryId){
            dispatch(PostActivityCountry(name,duration,difficulty,season,countryId))
            alert('Activity Created')
        }else{
            alert('complete the form')
        }
    }
    return(
        <div className="containerForm">
            <form className="form" onSubmit={(e)=>{
                handleSubmit(e)
            }}>
                <h2>create a new activity</h2>
                <h3>Add countries</h3>
                <input
                    type={'text'}
                    placeholder={'Search Country'}
                    onChange={(e)=>{
                        handledInputChange(e)
                    }}
                />
                <div className="container-button">
                    <button className="button" onClick={(e)=>{
                        handledButton(e)
                    }}>search country</button>
                    <button className="button" onClick={(e)=>{
                        handledButtonList(e)
                    }}>Add to country list</button>
                </div>
                <h3>Activity</h3>
                <input className={error && 'danger'} type="text" placeholder="name" onChange={(e)=>{
                    postName(e)
                }}/>
                <h3>Duration in hours</h3>
                <input className={error && 'danger'} type="number" placeholder="duration" onChange={(e)=>{
                    postDuration(e)
                }}/>
                <h3>Difficulty</h3>
                    <select onChange={(e)=>{
                        postDifficulty(e)
                    }}>
                        <option value="1">Very easy</option>
                        <option value="2">Easy</option>
                        <option value="3">Normal</option>
                        <option value="4">Hard</option>
                        <option value="5">Very hard</option>
                    </select>
                <h3>select the season</h3>
                <div className="inputSelect">
                    <select onChange={(e)=>{
                        postSeason(e)
                    }}>
                        <option value="All the year">All the year</option>
                        <option value="Summer">Summer</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                        <option value="Autumn">Autumn</option>
                    </select>
                </div>
                <input className="submit" type="submit"/>
            </form>
        </div>
    )
}