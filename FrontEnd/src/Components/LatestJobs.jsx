// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useState , useEffect } from "react"
import { NavLink,useNavigate } from "react-router-dom"

function LatestJobs(){
    let countries = {'IND':'in','USA':'us','UK':'gb',"AUSTRIA":'at',"AUSTRALIA":'au',"BELGIUM":'be',"BRAZIL":'br',"SWITZERLAND":'ch',"CANADA":'ca',"GERMANY":"de","SPAIN":'es',"FRANCE":"fr",
        "ITALY":"it","MEXICO":'mz',"NETHERLANDS":'nl',"NEWZELAND":'nz',"POLAND":"pl","SINGAPORE":"sg","SOUTH-AFRICA":"za"
    }

    let [country,setCountry] = useState(countries["IND"])
    let [category,setCategory]= useState("it-jobs")
    let [categories,setCategories]=useState([])
    let [jobTitle,setJobTitle]=useState("software")
    let [jobLocation,setJoblocation]=useState("Pune")

    const navigate=useNavigate()
    function categoryChange(e){
        setCategory(e.target.value)
    }
    function countryChange(e){
        setCountry(countries[e.target.value])
    }
    function JobTitle(e){
        setJobTitle(e.target.value)
    }
    function JobLocation(e){
        setJoblocation(e.target.value)
    }

    function HandleNavigate(){
        navigate('/remote-jobs',{
            state:{
                country,
                category,
                jobTitle,
                jobLocation

            }
        })
    }


    useEffect(() => {
        axios.get("https://api.adzuna.com/v1/api/jobs/gb/categories?app_id=411f39fa&app_key=6f586f71576754e298bf9c5347d9716d")
            .then((response) => {

                const data = response.data;
                const newCategories = data.results.map((item) => item.tag);
                setCategories(newCategories);
                    

            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);


    return(
        <div className="latest-jobs">
            
            <div className="searchbar">
                <span><img className='search-favicon' src='/Searchfavicon.png' alt='Search-favicon'></img></span>
                <input type="text" placeholder="Job title, keyword" className="job-title" onChange={JobTitle} ></input>
                <span><img className='location-favicon' src='/Location.png' alt='Search-favicon'></img></span>
                <input type="text" placeholder="State, City" className="job-location" onChange={JobLocation}></input>
                <button className="latest-job-button" onClick={HandleNavigate}>
                    Latest Jobs
                </button>
        
            </div>
            <div className="parameters" >
                <select className="country" onChange={countryChange}>
                    {Object.keys(countries).map((el,ind)=>{
                        return(
                            <option key={ind}>
                                {el}
                            </option>
                        )
                    })}
                </select>
                <select className="category" onChange={categoryChange}>
                    {categories.map((el,ind)=>{
                        return(
                            <option key={ind}>{el}</option>
                        )
                    })}
                </select>
            </div>

        </div>
    )
}

export default LatestJobs




