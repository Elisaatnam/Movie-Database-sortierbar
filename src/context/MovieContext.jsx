import { createContext, useState } from "react";
import movies from "../data/data";

//MovieContext erstellen
export const MovieContext = createContext();

//den Provider direkt hier schon erstellen , so muss ich die App jsx nicht anfassen und ich wrappe es dann einfach in der main.jsx => Ein Provider ist eine Komponente, die Daten an andere Komponenten weitergibt.
//hier gibt der Provider die Daten an alle seine children weiter
export const MovieProvider = ({ children }) => {
	const [movieData, setMovieData] = useState(movies);
	console.log(movieData);
	// ich verwende den 'MovieContext.Provider', um die Filmdaten und die Funktion 'setMovieData' in den Context zu legen, sodass andere Komponenten darauf zugreifen können.
	// 'children' ist eine spezielle React-Variable, die alle Kindkomponenten dieser Komponente enthält.
	return (
		<MovieContext.Provider value={{ movieData, setMovieData }}>
			{children}
		</MovieContext.Provider>
	);
};
