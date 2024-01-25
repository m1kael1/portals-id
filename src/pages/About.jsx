import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";
import Button from "../components/common/Button";

export default function About() {
	return (
		<section className=" flex flex-col items-center justify-center">
			<Banner hash="next" />
			<div
				id="next"
				className="flex gap-2 justify-center items-center h-screen"
			>
				<NavLink to="/">
					<Button onClick={() => window.scrollTo(0, 0)}>Mulai Membaca</Button>
				</NavLink>
			</div>
		</section>
	);
}
