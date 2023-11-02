import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
	return (
		<>
			{/* der BrowserRouter ist in der main.jsx zu finden */}
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
