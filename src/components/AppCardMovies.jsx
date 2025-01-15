

function AppCardMovies({ curItem }) {
    function RatingStars({ value }) {
        const halfValue = value / 2
        const roundedValue = Math.ceil(halfValue);
        const totalStars = 5;
        const fullStar = "★";
        const emptyStar = "☆";

        const stars = fullStar.repeat(roundedValue) + emptyStar.repeat(totalStars - roundedValue);

        return <div>{stars}</div>;
    }
    return (
        <>
            <div className="card">
                <div className="col">

                    Titolo:{curItem.title || curItem.name},
                    <br />
                    Titolo originale:{curItem.original_title},
                    <br />
                    Lingua:{curItem.original_language},
                    <br />
                    Voto:{curItem.vote_average},
                    <br />
                    <RatingStars value={curItem.vote_average} />
                </div>
                <div className="cover">
                    <img src={`https://image.tmdb.org/t/p/w342${curItem.backdrop_path}`} alt="" />
                </div>
            </div>
        </>
    )
}

export default AppCardMovies