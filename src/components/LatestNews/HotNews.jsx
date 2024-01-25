import useNews from "../../hooks/useNews";
import HotNewsLayout, { SubLayout } from "../../layouts/HotNewsLayout";
import CardLatestNews from "./CardLatestNews";
import { motion } from "framer-motion";
import { fadeInFromBottom } from "../../libs/variants";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function HotNews() {
	const portal = "cnn";
	const category = "terbaru";
	const catergoryUrl = `${portal}/${category}`;
	const { news } = useNews(catergoryUrl);
	const { data, setData } = useLocalStorage();

	function handleReadNews(news) {
		const filteredReadNews = data.readNews.filter(
			(item) => item.title !== news.title
		);
		setData({ ...data, readNews: [news, ...filteredReadNews] });
	}

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
						<CardLatestNews news={news} handleReadNews={handleReadNews} />
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
							<CardLatestNews
								subContent={true}
								news={news}
								handleReadNews={handleReadNews}
							/>
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
							<CardLatestNews
								subContent={true}
								news={news}
								handleReadNews={handleReadNews}
							/>
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
						<CardLatestNews news={news} handleReadNews={handleReadNews} />
					</motion.div>
				))}
			</HotNewsLayout>
		</>
	);
}
