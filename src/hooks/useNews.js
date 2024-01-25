import axios from "axios";
import { useEffect, useState } from "react";

export default function useNews(categoryNews = "") {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(false);

	const BaseURL = import.meta.env.VITE_BASE_NEWS_URL;
	const URL = categoryNews ? `${BaseURL}${categoryNews}` : BaseURL;

	useEffect(() => {
		async function getData() {
			setLoading(true);
			try {
				const { data } = await axios.get(URL);
				setNews(data);
			} catch (err) {
				console.error(err.message);
			} finally {
				setLoading(false);
			}
		}
		getData();
	}, [URL]);

	return { loading, news };
}
