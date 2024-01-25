import { BrowserRouter, Route, Routes } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import About from "./pages/About";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import PostContent from "./pages/PostContent";
import Profile from "./pages/Profile";

export default function App() {
	const { status } = useLocalStorage();

	return (
		<BrowserRouter>
			{status ? (
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:portal/:category" element={<News />} />
					<Route path="/about" element={<About />} />
					<Route path="/postingan" element={<PostContent />} />
					<Route path="/profile" element={<Profile />} />
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
