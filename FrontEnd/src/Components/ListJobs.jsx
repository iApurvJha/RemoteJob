import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';



function ListJobs(props) {

    const apiId = import.meta.env.VITE_API_ID;
    const apiKey = import.meta.env.VITE_API_KEY;
    let [res,setRes]=useState(["Hello"])
    let [cname,setCname]=useState([])
    let [applylink,setApplylink]=useState([])
    


    useEffect(() => {
        axios.get(`https://api.adzuna.com/v1/api/jobs/${props.country}/search/1?app_id=${apiId}&app_key=${apiKey}&results_per_page=9&title_only=${props.jobTitle}&where=${props.jobLocation}&category=${props.category}`)
            .then((response) => {

                const data = response.data;
                const newRes = data.results
                console.log(newRes)
                setRes(newRes);
                console.log(newRes)
                newRes.map((item)=>{
                    cname.push(item.company.display_name)
                    setCname(cname)
                })
                // console.log(cname)

                newRes.map((item)=>{
                    applylink.push(item.redirect_url)
                    setApplylink(applylink)
                })
                    

            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);
  return (

    <>
        {res.length> 0 ? 
    
    <div className='check'>
         <table >
            <th>
                <tr className='table'>
                    <th>Company Name</th>
                    <th>Role</th>
                    <th>Apply Link</th>
                </tr>
            </th>
        </table>
        
    

        {res.map((item, index) => (
            <div className='job-outer-div' >
                <div className='companyName'>{cname[index]}</div>
                <div className='jobTitle'>{item.title}</div>
                {/* <button className='ApplyLink'><a href={{applylink[index]}}></a></button>      */}
                <button className='ApplyLink' onClick={() => window.open(applylink[index], '_blank')}>Apply</button>
                {/* <button className='ApplyLink' onClick={() => window.location.href = applylink[index]}>Apply</button> */}


            </div>


        ))}



        
    </div> : <div><h1 className='No-jobs'>No Jobs Avalaible as per current search</h1></div>}
    </>

  )
}

export default ListJobs
