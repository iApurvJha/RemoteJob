import './App.css'
import Header from "./Components/Header.jsx"
import LatestJobs from "./Components/LatestJobs.jsx"
import ShowJobs from "./Components/ShowJobs.jsx"
import {Routes,Route,NavLink} from "react-router-dom"



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<>
        <Header />
        <LatestJobs />
      </>} />
      <Route path='/remote-jobs' element={<ShowJobs />}></Route>
    </Routes>
  
    
    </>
  )
}

export default App




// function App() {
//   return (
//     <>
//     <h1>Hello</h1>
//     </>
//   )
// }

// export default App

