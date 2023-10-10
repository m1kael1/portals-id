import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Landing() {
	const { data, setData } = useLocalStorage();
	const navigate = useNavigate();

	function handleGetStarted() {
		setData({ ...data, status: true });
		navigate(0);
	}

	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<h1 className="text-4xl font-light font-poppins">Selamat Datang </h1>
			<button
				onClick={handleGetStarted}
				className=" inline-flex mt-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
			>
				Mulai Baca Berita
				<svg
					className="w-3.5 h-3.5 ml-2 "
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 10"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M1 5h12m0 0L9 1m4 4L9 9"
					/>
				</svg>
			</button>
		</div>
	);
}
