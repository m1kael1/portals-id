import { useState } from "react";
import NewsPost from "../News/NewsPost";
import NewsPostsHeader from "../News/NewsPostsHeader";
import useLocalStorage from "../../hooks/useLocalStorage";
import NewsPostLayout from "../../layouts/NewsPostLayout";
import { fadeInFromBottom } from "../../libs/variants";
import filterNews from "../../utils/filterNews";
import { motion } from "framer-motion";

export default function NewsHistory() {
	const { data } = useLocalStorage();
	const { readNews } = data;
	const [searchQuery, setSearchQuery] = useState("");
	const { filteredNews } = filterNews(readNews, searchQuery);

	function search(query) {
		setSearchQuery(query);
	}

	return (
		<>
			<NewsPostsHeader
				onSearch={search}
				portal={null}
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
								<NewsPost key={index} post={news} handleReadNews={false} />
							</motion.div>
						))
					)}
				</NewsPostLayout>
			)}
		</>
	);
}
