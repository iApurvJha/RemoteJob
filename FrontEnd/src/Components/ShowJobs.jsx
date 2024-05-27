import { useLocation } from "react-router-dom";
import Header from "./Header.jsx"
import ListJobs from "./ListJobs.jsx";

function ShowJobs() {
    const location = useLocation();
    const { country, category, jobTitle, jobLocation } = location.state || {};

    return (
        <div>
            <Header />
            {/* <ListJobs/> */}
            {/* <p>Country: {country}</p>
            <p>Category: {category}</p>
            <p>Job Title: {jobTitle}</p>
            <p>Job Location: {jobLocation}</p> */}
            <ListJobs country={country} category={category} jobTitle={jobTitle} jobLocation={jobLocation} />
            {/* <ListJobs /> */}
        </div>
    );
}

export default ShowJobs;

