import { AppProvider } from "./components/AppContext"
import ProjectList from "./components/ProjectList"



function App() {

  return (
    <AppProvider>
      <div>
        <h1>User Projects App</h1>
        <ProjectList />        
      </div>
    </AppProvider>
  )
}

export default App
