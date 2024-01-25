import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainLayout({ children }) {
	return (
		<main>
			<Header />
			<section className="max-w-7xl mx-auto px-2 min-h-screen mb-6 ">
				{children}
			</section>
			<Footer />
		</main>
	);
}
