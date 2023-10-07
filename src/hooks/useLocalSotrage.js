import { useEffect, useState } from "react";

export default function useLocalStorage() {
	const [portalsData, setPortalsData] = useState(() => {
		return (
			JSON.parse(localStorage.getItem("portals-data")) || {
				status: false,
				readNews: [],
			}
		);
	});

	useEffect(() => {
		localStorage.setItem("portals-data", JSON.stringify(portalsData));
	}, [portalsData]);

	const getPortalsIdData = JSON.parse(localStorage.getItem("portals-data"));
	const status = getPortalsIdData ? getPortalsIdData.status : false;

	return { status, portalsData, setPortalsData };
}
