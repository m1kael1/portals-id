import { useEffect, useState } from "react";

export default function useLocalStorage() {
	const getData = JSON.parse(localStorage.getItem("portals-data"));
	const [data, setData] = useState(() => {
		return (
			getData || {
				status: false,
				readNews: [],
			}
		);
	});
	const status = getData ? getData.status : false;

	useEffect(() => {
		localStorage.setItem("portals-data", JSON.stringify(data));
	}, [data]);

	return { status, data, setData };
}
