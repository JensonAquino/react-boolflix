import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import axios from "axios";
const apiKey = "9d1063d346243d3931ce87274e56c0a6";
const apiUrl = "https://api.themoviedb.org/3";
function App() {
  
  return (
    <>
      <AppHeader/>
      <AppMain/>
    </>
  )
}

export default App
