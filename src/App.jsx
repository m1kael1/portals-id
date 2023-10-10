import { BrowserRouter, Route, Routes } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import News from "./pages/News";
import NewsHistory from "./pages/NewsHistory";
import NotFound from "./pages/NotFound";

export default function App() {
	const { status } = useLocalStorage();

	return (
		<BrowserRouter>
			{status ? (
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/news-history" element={<NewsHistory />} />
					<Route path="/:portal/:category" element={<News />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			) : (
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			)}
		</BrowserRouter>
	);
}
