import axios from "axios";
import { useEffect, useState } from "react";

export default function useArticles(id, userId) {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);

	const BaseURL = import.meta.env.VITE_BASE_ARTICLES_URL;
	const URL = id
		? `${BaseURL}${id}`
		: userId
		? `${BaseURL}?userId=${userId}`
		: BaseURL;

	useEffect(() => {
		async function getData() {
			setLoading(true);
			try {
				const { data } = await axios.get(URL);
				setArticles(data);
			} catch (err) {
				console.error(err.message);
			} finally {
				setLoading(false);
			}
		}
		getData();
	}, [URL]);

	return { loading, articles };
}
