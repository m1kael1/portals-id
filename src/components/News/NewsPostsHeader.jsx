import SearchNews from "../SearchNews";
import { motion } from "framer-motion";
import { fadeInFromRight, fadeInFromLeft } from "../../libs/variants";

export default function NewsPostsHeader({
	onSearch,
	searchQuery,
	portal,
	category = "",
}) {
	const portalLogoUrl =
		portal === "cnn"
			? "//upload.wikimedia.org/wikipedia/commons/thumb/9/91/CNN_Indonesia_logo.svg/300px-CNN_Indonesia_logo.svg.png"
			: portal === "antara"
			? "https://asset.brandfetch.io/idmQ4nxuiX/idVa-pC7FU.jpeg?updated=1692882362133"
			: portal === "cnbc"
			? "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/b9/e6/eb/b9e6ebdc-6eee-a081-f984-b00bd9f34863/AppIcon-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp"
			: portal === "sindonews"
			? "https://play-lh.googleusercontent.com/LSgpGO8zgGhnCxTTqJt-LDkOLN97Qc4JPsOZUbnnOjaMY9bP1M3_a3jmW9yt8M00EcM=w240-h480-rw"
			: portal === "okezone"
			? "https://play-lh.googleusercontent.com/R_GVBSv9f06SmakbDsgi40QI7hJgK1WXgYToAHhTCYP91HAZiXFhpWS1Rog-gjUBGnw=w240-h480-rw"
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
						<img width={60} src={portalLogoUrl} alt="" />
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
