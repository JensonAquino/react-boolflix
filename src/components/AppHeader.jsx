import axios from "axios";
import { useState } from "react";

const apiKey = "9d1063d346243d3931ce87274e56c0a6";
const apiUrl = "https://api.themoviedb.org/3";


function AppHeader() {

    const [searchValue, setSearchValue] = useState("")

    function getMovies() {

        axios.get(`${apiUrl}/search/movie`, {
            params: {
                api_key: apiKey,
                query: searchValue,
            },
        })
            .then((resp) => {
                console.log(resp);

            });
    }

    return (
        <div className="header">
            <p className="logo">
                BOOLFIX
            </p>
            <section>
                <input type="search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
                <button onClick={getMovies}>Cerca</button>
            </section>
        </div>

    )
}

export default AppHeader 