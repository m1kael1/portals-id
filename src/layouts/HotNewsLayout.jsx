import { motion } from "framer-motion";
import { opacityIn } from "../libs/variants";

export function SubLayout({ children }) {
	return (
		<section className=" h-full grid grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 gap-2 bg-transparent ">
			{children}
		</section>
	);
}

export default function HotNewsLayout({ children }) {
	return (
		<>
			<motion.h2
				variants={opacityIn}
				initial={"initial"}
				animate={"animate"}
				className="font-poppins text-2xl font-semibold mt-4 flex"
			>
				<div className="relative">
					<span className="animate-ping absolute ">🔥</span>
					<span>🔥</span>
				</div>
				Berita Terbaru
			</motion.h2>
			<section className="mt-3 w-full h-[580px] grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-2 rounded-lg sm:p-0 ">
				{children}
			</section>
		</>
	);
}
