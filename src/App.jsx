import { useState } from "react";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import axios from "axios";
const apiKey = "9d1063d346243d3931ce87274e56c0a6";
const apiUrl = "https://api.themoviedb.org/3";
function App() {

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  function getMovies(searchValue) {

      axios.get(`${apiUrl}/search/movie`, {
          params: {
              api_key: apiKey,
              query: searchValue,
          },
      })
          .then((resp) => {
              console.log(resp);
              
              setMovies(resp.data.results);

          });
  }

  function getSeries(searchValue) {

    axios.get(`${apiUrl}/search/tv`, {
        params: {
            api_key: apiKey,
            query: searchValue,
        },
    })
        .then((resp) => {
            console.log(resp);
            
            setSeries(resp.data.results);

        });
}
  function getAll(searchValue) {
    getSeries(searchValue);
    getMovies(searchValue);
  }

  return (
    <main>
      <AppHeader onSearch={getAll}/>
      <AppMain movies={movies} series={series}/>
    </main>
  )
}

export default App
