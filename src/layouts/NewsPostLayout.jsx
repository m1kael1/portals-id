export default function NewsPostLayout({ children }) {
	return (
		<ul className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid gap-3 max-w-6xl mx-auto px-1 mt-5 ">
			{children}
		</ul>
	);
}
