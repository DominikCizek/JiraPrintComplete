import { useState } from 'react'
import './App.css'
import Sprint from './components/Sprint'
import SprintSelect from './components/SprintSelect'
import Logo from './components/Logo'
import Footer from './components/Footer'
import useJiraFetch from './hooks/useJiraFetch';

function App() {

  const [chosenSprintId, setchosenSprintId] = useState(null)
  const sprintList = useJiraFetch("/sprints");

  if(!sprintList ) return <h2 style={{textAlign: "center"}}>Načítám sprinty...</h2>

  console.log(chosenSprintId)
  return (
    <div className="App">
      <Logo />
      <SprintSelect data={sprintList} setSprint={(val) =>setchosenSprintId(val)} />
      {chosenSprintId &&<Sprint id={chosenSprintId} />}
      <Footer sprintsLoaded={chosenSprintId} /> 
    </div>
  )
}

export default App
