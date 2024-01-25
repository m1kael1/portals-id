import { opacityIn } from "../libs/variants";
import Label from "../components/common/Label";

export function SubLayout({ children }) {
	return (
		<section className=" h-full grid grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 gap-2 bg-transparent">
			{children}
		</section>
	);
}

export default function HotNewsLayout({ children }) {
	return (
		<>
			<Label variants={opacityIn} initial={"initial"} animate={"animate"}>
				📰 Berita Terbaru
			</Label>
			<section className="mt-3 w-full grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-2 rounded-lg sm:p-0 mb-3 ">
				{children}
			</section>
		</>
	);
}
