import { Route,Routes } from "react-router-dom"

import "./App.css"
import Home from "./pages/Home/Home"
import Team from "./pages/Team/Team"
import Faculty from "./pages/Faculty/Faculty"
import Events from "./pages/Events/Events"
import Error from "./pages/Error/Error"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<Navbar/>} >
          <Route index element={<Home/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/faculty" element={<Faculty/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </main>
  )
}

export default App