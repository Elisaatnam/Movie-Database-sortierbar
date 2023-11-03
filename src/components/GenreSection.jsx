import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { GenreButton } from "./GenreButton";

export const GenreSection = ({ filteredData, setFilteredData }) => {
	const { movieData } = useContext(MovieContext);
	const movieCopy = [...movieData];
	//Set erzeugen => Während Arrays Sammlungen beliebiger Elemente sind, die beliebig oft im Array vorkommen dürfen, sind Sets Sammlungen, in denen jeder Wert nur einmal vorkommen kann... d.H. bei Set werden alle Duplikate rausgeschmissen!!! <3
	const genreArr = [...new Set(movieCopy.flatMap(elt => elt.genre))];
	//flatMap ist eine Array-Methode in JavaScript, die häufig verwendet wird, um ein mehrdimensionales Array in ein eindimensionales Array zu "flachen". Dies bedeutet, dass es verschachtelte Arrays auflöst und ihre Elemente in einem einzelnen flachen Array sammelt.

	return (
		<section>
			{genreArr.map((genre, index) => (
				<GenreButton
					key={index}
					text={genre}
					filteredData={filteredData}
					setFilteredData={setFilteredData}
				/>
			))}
		</section>
	);
};
