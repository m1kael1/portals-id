import Header from "../components/Header";

export default function MainLayout({ children }) {
	return (
		<main>
			<Header />
			<section className="max-w-7xl mx-auto px-2 ">{children}</section>
		</main>
	);
}
