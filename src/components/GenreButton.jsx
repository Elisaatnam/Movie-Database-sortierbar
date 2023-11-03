import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
export const GenreButton = ({ text, filteredData, setFilteredData }) => {
	const { movieData, setMovieData } = useContext(MovieContext);
	const movieCopy = [...movieData];

	const filterGenre = () => {
		const filterdMovies = movieCopy.filter(elt => elt.genre.includes(text));
		setFilteredData(filterdMovies);
	};

	return (
		<button
			onClick={filterGenre}
			className='btn btn-outline btn-primary btn-sm md:btn-md lg:btn-lg'
		>
			{text}
		</button>
	);
};
