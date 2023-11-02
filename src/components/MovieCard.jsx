import { Star } from "../assets/svg/Star";
import { Link } from "react-router-dom";

export const MovieCard = ({ data, index }) => {
	// Hier erstelle ich eine Karte (Card), um einen einzelnen Film darzustellen.
	return (
		<div className='card h-56 my-5 bg-primary text-primary-content'>
			<div className='card-body'>
				{/* Hier zeige ich den Titel des Films an. */}
				<h2 className='card-title'>{data.title}</h2>
				<div className='flex items-center'>
					{/* Hier zeige ich die Dauer des Films an. */}
					<p>{data.duration}</p>
					<div className='w-1/6 flex items-center'>
						{/* Hier zeige ich die Bewertung des Films an, gefolgt von einem Sternsymbol. */}
						<p className='inline'>{data.rate}</p>
						<Star />
					</div>
				</div>
				{/* Hier zeige ich das Genre des Films an. */}
				<p>{data.genre}</p>

				<div className='card-actions justify-end'>
					{/* Hier füge ich einen Link hinzu, der es dem Benutzer ermöglicht, mehr Details zum Film anzuzeigen. WORK IN PROGRESS -> noch keine Detail Page*/}
					<Link to={`/${index}`} className='btn'>
						see more
					</Link>
				</div>
			</div>
		</div>
	);
};
