import React,{ useState , useLayoutEffect} from "react";
import {useDispatch , useSelector} from 'react-redux'
import {PostActivityCountry, getCountryName } from "../Redux/action";
import CountryCard from "./CountryCard";
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
    const [createActivity, setCreateActivity] = useState(false)
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
        if(e.target.value.length !==0){
            setCountrySearch(e.target.value)
        }
    }
    const handledButton = (e)=>{
        e.preventDefault()
        if(countryObj.length === 8){
            alert('you reached the maximum number of countries to search')
        }else{
            setCountryObj([...countryObj, ...countries])
        }
    }
    const handledButtonList = (e)=>{
        e.preventDefault()
        setCountryId([...new Set(countryObj.map((e) => e.id))])
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(name && duration && difficulty && season && countryId.length!==0){
            dispatch(PostActivityCountry(name,duration,difficulty,season,countryId))
            setCreateActivity(false)
            alert('Activity Created')
        }else{
            alert('complete the form')
        }
    }
    const returnActivity=(e)=>{
        e.preventDefault()
        setCreateActivity(true)
        setCountryObj([])
        setCountryId([])
    }
    return(
        <div>{createActivity
            ?<div className={`${countryObj.length === 0 ? 'containerForm' : 'containerDivide'}`}>
            <form className='form' onSubmit={(e)=>{
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
                        <option value="">Season</option>
                        <option value="Summer">Summer</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                        <option value="Autumn">Autumn</option>
                    </select>
                </div>
                <input className="submit" type="submit"/>
            </form>
            <div className="container-cards">
            {countryObj?.map((c,)=>{
                return(
                    <div>
                        <CountryCard
                            name={c.name}
                            flag={c.flag}
                            continent={c.continent}
                            population={c.population}
                        />
                    </div>
                )
            })}
            </div>
        </div>
            :<div className="container-title-activity">
                    <h1 className="title">Activity creator</h1>
                    <button className="return-activity" onClick={(e)=>{
                        returnActivity(e)
                    }}>Create a new activity</button>
            </div>
        }
        </div>
    )
}