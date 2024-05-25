import axios from "axios";
import { useLocation } from "react-router-dom";

function ShowJobs() {
    const location = useLocation();
    const { country, category, jobTitle, jobLocation } = location.state || {};

    return (
        <div>
            <p>Country: {country}</p>
            <p>Category: {category}</p>
            <p>Job Title: {jobTitle}</p>
            <p>Job Location: {jobLocation}</p>
        </div>
    );
}

export default ShowJobs;

