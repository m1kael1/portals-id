import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { fadeInFromTop } from "../libs/variants";

export default function Header() {
	return (
		<motion.header
			variants={fadeInFromTop}
			initial={"initial"}
			animate={"animate"}
			custom={3}
			className="w-full h-auto bg-slate-300 py-4 px-2 "
		>
			<section className=" px-8 flex justify-between items-center mx-auto">
				<h1 className="font-laviossa text-4xl">Berita ID</h1>
				<ul className="flex gap-4">
					<NavLink to="/" className="text-xl font-poppins">
						Beranda
					</NavLink>
					{/* <NavLink to="/news-history" className="text-xl font-poppins">
						Riwayat
					</NavLink> */}
				</ul>
			</section>
		</motion.header>
	);
}
