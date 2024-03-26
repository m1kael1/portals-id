import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";
import Button from "../components/common/Button";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import Footer from "../components/Footer";
import useNews from "../hooks/useNews";

export default function About() {
	const { news } = useNews("cnn/terbaru");
	return (
		<>
			<section className=" flex flex-col items-center justify-center mb-10">
				<Banner hash="next" />
				<div
					id="next"
					className="flex gap-2 justify-center items-center h-[50vh] "
				>
					<NavLink to="/">
						<Button onClick={() => window.scrollTo(0, 0)}>Mulai Membaca</Button>
					</NavLink>
				</div>
				<InfiniteMovingCards
					items={news?.data?.posts}
					direction="right"
					speed="slow"
				/>
			</section>
			<Footer />
		</>
	);
}
