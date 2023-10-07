import useNews from "../../hooks/useNews";
import HotNewsLayout, { SubLayout } from "../../layouts/HotNewsLayout";
import CardHotNews from "./CardHotNews";
import { motion } from "framer-motion";
import { fadeInFromBottom } from "../../libs/variants";

export default function HotNews() {
	const portal = "cnn";
	const category = "terbaru";
	const catergoryUrl = `${portal}/${category}`;
	const { news } = useNews(catergoryUrl);

	return (
		<>
			<HotNewsLayout>
				{news?.data?.posts?.slice(0, 1).map((news, index) => (
					<motion.div
						key={index}
						variants={fadeInFromBottom}
						animate={"animate"}
						initial={"initial"}
						custom={index}
					>
						<CardHotNews news={news} />
					</motion.div>
				))}
				<SubLayout>
					{news?.data?.posts?.slice(1, 5).map((news, index) => (
						<motion.div
							key={index}
							variants={fadeInFromBottom}
							animate={"animate"}
							initial={"initial"}
							custom={index + 1}
						>
							<CardHotNews subContent={true} news={news} />
						</motion.div>
					))}
				</SubLayout>

				<SubLayout>
					{news?.data?.posts?.slice(5, 9).map((news, index) => (
						<motion.div
							key={index}
							variants={fadeInFromBottom}
							animate={"animate"}
							initial={"initial"}
							custom={index + 5}
						>
							<CardHotNews subContent={true} news={news} />
						</motion.div>
					))}
				</SubLayout>
				{news?.data?.posts?.slice(9, 10).map((news, index) => (
					<motion.div
						key={index}
						variants={fadeInFromBottom}
						animate={"animate"}
						initial={"initial"}
						custom={index + 9}
					>
						<CardHotNews news={news} />
					</motion.div>
				))}
			</HotNewsLayout>
		</>
	);
}
