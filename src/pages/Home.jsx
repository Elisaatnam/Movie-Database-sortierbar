import React, { useContext, useState, useEffect } from "react";
import { SortButton } from "../components/SortButton";
import { MovieContext } from "../context/MovieContext";
import { MovieCard } from "../components/MovieCard";

export const Home = () => {
	// Ich verwende den 'useState'-Hook, um den Zustand für die Eingabe im Suchfeld zu erstellen.
	const [searchInput, setSearchInput] = useState("");

	// Ich verwende 'useContext', um auf den Filmkontext zuzugreifen und erhalte die 'movieData'.
	const { movieData } = useContext(MovieContext);

	// Ich erstelle einen weiteren Zustand 'filteredData', um die gefilterten Filmdaten zu speichern.
	const [filteredData, setFilteredData] = useState(movieData);

	// Ich verwende 'useEffect', um die Filmdaten zu filtern, wenn sich die Sucheingabe oder die Filmdaten ändern.
	useEffect(() => {
		// Ich erstelle eine neue gefilterte Datenliste, die Filmtitel ignoriert und sowohl Groß- als auch Kleinschreibung berücksichtigt.
		const newFilteredData = movieData.filter(elt =>
			elt.title.toLowerCase().includes(searchInput.toLowerCase()),
		);

		// Ich aktualisiere den Zustand 'filteredData' mit den neuen gefilterten Daten.
		setFilteredData(newFilteredData);
	}, [searchInput, movieData]);

	return (
		// Hier erstelle ich den Hauptinhalt der Startseite.
		<main className='flex flex-col justify-center items-center p-4'>
			<div className='grid grid-cols-2 gap-1'>
				{/* Hier füge ich Sortierbuttons hinzu, um die Filmliste nach verschiedenen Kriterien zu sortieren. */}
				<SortButton text='Date Ascending' sort='dateA' />
				<SortButton text='Date Descending' sort='dateD' />
				<SortButton text='Best Rate' sort='rate' />
				<SortButton text='A-Z' sort='az' />
				<SortButton text='Z-A' sort='za' />
			</div>

			{/* Hier erstelle ich ein Eingabefeld für die Filmesuche und verbinde es mit dem 'searchInput'-Zustand. */}
			<input
				type='text'
				placeholder='Search for Movie'
				value={searchInput}
				onChange={e => setSearchInput(e.target.value)}
				className='input input-bordered input-primary w-full max-w-xs sm:input-sm md:input-md lg:input-lg'
			/>

			{/* Hier erstelle ich eine Rasteransicht der Filme, die auf der Suche basiert und die im 'filteredData'-Zustand gespeichert sind. */}
			<div className='w-full md:grid md:grid-cols-2 lg:grid-cols-3'>
				{filteredData.map((elt, index) => (
					<MovieCard data={elt} key={index} index={index} />
				))}
			</div>
		</main>
	);
};
