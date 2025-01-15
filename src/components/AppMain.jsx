import AppCardMovies from "./AppCardMovies"
import AppCardSeries from "./AppCardSeries"
function AppMain({ movies, series }) {
    return (
        <>
            <h1>film</h1>

            <div className="row">
                {movies.map((movie) => (
                    <AppCardMovies key={movie.id} curItem={movie} />
                ))}
            </div>
            <h1>serie tv</h1>
             <div className="row">
                {series.map((serie) => (
                    <AppCardSeries key={serie.id} curItem={serie} />
                ))}
            </div> 
        </>
    )
}

export default AppMain 