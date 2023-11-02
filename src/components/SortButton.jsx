import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export const SortButton = ({ text, sort }) => {
	const { movieData, setMovieData } = useContext(MovieContext);
	// eine Kopie von movieData weil sort das urspruengliche Arry veraendert und ohne Kopie wuerde die ganze Suche nicht funktionieren :D
	const sortedData = [...movieData];

	//Sortierfunktionen je nachdem welcher button gecklickt wurde bzw je nachdem welcher prop (props.sort oder auch {sort}) mitgekommen ist
	const handleSort = () => {
		if (sort === "dateA") {
			sortedData.sort((a, b) => a.year - b.year);
		} else if (sort === "dateD") {
			sortedData.sort((a, b) => b.year - a.year);
		} else if (sort === "rate") {
			sortedData.sort((a, b) => b.rate - a.rate);
		} else if (sort === "az") {
			sortedData.sort((a, b) => a.title.localeCompare(b.title));
		} else {
			sortedData.sort((a, b) => b.title.localeCompare(a.title));
		}

		// movieData updaten
		setMovieData(sortedData);
	};

	return (
		<>
			<button
				onClick={handleSort}
				className='btn btn-outline btn-primary btn-sm md:btn-md lg:btn-lg'
			>
				{text}
			</button>
		</>
	);
};
