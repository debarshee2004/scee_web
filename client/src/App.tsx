import { Route,Routes } from "react-router-dom"

import "./App.css"

import Navbar from "./components/Navbar/Navbar"
import Error from "./pages/Error/Error"

import Home from "./pages/Home/Home"
import Team from "./pages/Team/Team"
import Faculty from "./pages/Faculty/Faculty"
import Events from "./pages/Events/Events"

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<Navbar/>} >
          <Route index element={<Home/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/faculty" element={<Faculty/>} />
          <Route path="/events" element={<Events/>} />
        </Route>
        <Route path="*" element={<Error/>} />
      </Routes>
    </main>
  )
}

export default App