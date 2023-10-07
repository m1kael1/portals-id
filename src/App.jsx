import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
// import NewsHistory from "./pages/NewsHistory";
import NotFound from "./pages/NotFound";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/news-history" element={<NewsHistory />} /> */}
				<Route path="/:portal/:category" element={<News />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
