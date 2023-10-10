import SearchNews from "../SearchNews";
import { motion } from "framer-motion";
import { fadeInFromRight, fadeInFromLeft } from "../../libs/variants";

export default function NewsPostsHeader({
	onSearch,
	searchQuery,
	portal,
	category,
}) {
	const portalLogoUrl =
		portal === "cnn"
			? "https://upload.wikimedia.org/wikipedia/commons/2/20/Logo_of_CNN_Indonesia.svg"
			: portal === "antara"
			? "https://asset.brandfetch.io/idmQ4nxuiX/idVa-pC7FU.jpeg?updated=1692882362133"
			: portal === "cnbc"
			? "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CNBC_logo.svg/300px-CNBC_logo.svg.png"
			: portal === "sindonews"
			? "https://sm.sindonews.net/mobile/2016/images/newicon/favicon-40x40.png"
			: portal === "okezone"
			? "https://cdn.okezone.com/underwood/revamp/2019/logo/desktop/icon.png"
			: null;

	return (
		<section className="flex items-center justify-center gap-y-3 sm:justify-between flex-wrap mt-4 px-8 py-2  sm:sticky sm:top-0 z-50  backdrop-blur-md">
			<motion.div
				variants={fadeInFromLeft}
				initial="initial"
				animate="animate"
				custom={4}
				className="flex items-center gap-2"
			>
				{portalLogoUrl ? (
					<>
						<img width={60} src={portalLogoUrl} alt="" />{" "}
						<p className="uppercase font-poppins font-medium tracking-widest text-3xl">
							|
						</p>
					</>
				) : null}

				<h1 className="uppercase font-poppins font-medium tracking-widest text-3xl">
					{searchQuery ? `${category} | ${searchQuery}` : `${category}`}
				</h1>
			</motion.div>
			<motion.div
				variants={fadeInFromRight}
				initial="initial"
				animate="animate"
				custom={4}
			>
				<SearchNews onSearch={onSearch} />
			</motion.div>
		</section>
	);
}
