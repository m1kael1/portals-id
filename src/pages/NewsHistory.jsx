import { useState } from "react";
import NewsPost from "../components/news/NewsPost";
import NewsPostsHeader from "../components/news/NewsPostsHeader";
import useLocalStorage from "../hooks/useLocalStorage";
import MainLayout from "../layouts/MainLayout";
import NewsPostLayout from "../layouts/NewsPostLayout";
import { fadeInFromBottom } from "../libs/variants";
import filterNews from "../utils/filterNews";
import { motion } from "framer-motion";

export default function NewsHistory() {
	const { data, setData } = useLocalStorage();
	const { readNews } = data;
	const [searchQuery, setSearchQuery] = useState("");
	const { filteredNews } = filterNews(readNews, searchQuery);

	function search(query) {
		setSearchQuery(query);
	}

	function handleReadNews(news) {
		const filteredReadNews = data.readNews.filter(
			(item) => item.title !== news.title
		);
		setData({ ...data, readNews: [news, ...filteredReadNews] });
	}

	return (
		<MainLayout>
			<NewsPostsHeader
				onSearch={search}
				portal={null}
				category="Riwayat"
				searchQuery={searchQuery}
			/>
			{readNews.length === 0 ? (
				<p>Tidak ada riwayat berita yang dibaca</p>
			) : (
				<NewsPostLayout>
					{filteredNews.length === 0 ? (
						<p>Kata kunci "{searchQuery}" tidak ditemukan</p>
					) : (
						filteredNews.map((news, index) => (
							<motion.div
								variants={fadeInFromBottom}
								initial="initial"
								animate="animate"
								custom={index}
								key={index}
							>
								<NewsPost
									key={index}
									post={news}
									handleReadNews={handleReadNews}
								/>
							</motion.div>
						))
					)}
				</NewsPostLayout>
			)}
		</MainLayout>
	);
}
