import { useState } from "react";
import { ImSearch } from "react-icons/im";

export default function SearchNews({ onSearch }) {
	const [searchQuery, setSearchQuery] = useState("");

	function handleSearch() {
		onSearch(searchQuery);
	}

	return (
		<section className="flex  gap-3">
			<input
				className="border-2 border-slate-400 py-1 px-1 rounded-md focus:outline-blue-500"
				value={searchQuery}
				placeholder="Cari Berita..."
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<button
				className="bg-red-600 font-poppins rounded-md text-white px-3 py-1"
				onClick={handleSearch}
			>
				<ImSearch size={20} />
			</button>
		</section>
	);
}
