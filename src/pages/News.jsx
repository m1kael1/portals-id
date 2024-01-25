import { useState } from "react";
import { useParams } from "react-router-dom";
import useNews from "../hooks/useNews";
import MainLayout from "../layouts/MainLayout";
import NewsPostLayout from "../layouts/NewsPostLayout";
import { motion } from "framer-motion";
import { fadeInFromBottom } from "../libs/variants";
import useLocalStorage from "../hooks/useLocalStorage";
import filterNews from "../utils/filterNews";
import NewsPost from "../components/News/NewsPost";
import NewsPostsHeader from "../components/news/NewsPostsHeader";

export default function News() {
	const { portal, category } = useParams();
	const catergoryUrl = `${portal}/${category}`;
	const { loading, news } = useNews(catergoryUrl);
	const [searchQuery, setSearchQuery] = useState("");
	const newsPosts = news?.data?.posts;
	const { data, setData } = useLocalStorage();
	const { filteredNews } = filterNews(newsPosts, searchQuery);

	function search(query) {
		setSearchQuery(query);
	}

	function handleReadNews(news) {
		const filteredReadNews = data.readNews.filter(
			(item) => item.title !== news.title
		);
		setData({ ...data, readNews: [news, ...filteredReadNews] });
	}

	function showNewsPost() {
		if (loading) {
			return <p>Loading...</p>;
		}
		if (news.success) {
			if (filteredNews.length === 0) {
				return (
					<>
						<NewsPostsHeader
							onSearch={search}
							portal={portal}
							category={category}
							searchQuery={searchQuery}
						/>
						<p>Kata kunci "{searchQuery}" tidak ditemukan</p>
					</>
				);
			}
			return (
				<>
					<NewsPostsHeader
						onSearch={search}
						portal={portal}
						category={category}
						searchQuery={searchQuery}
					/>
					<NewsPostLayout>
						{filteredNews.map((news, index) => (
							<motion.div
								variants={fadeInFromBottom}
								initial="initial"
								animate="animate"
								custom={index}
								key={index}
							>
								<NewsPost post={news} handleReadNews={handleReadNews} />
							</motion.div>
						))}
					</NewsPostLayout>
				</>
			);
		}
		return (
			<>
				<NewsPostsHeader
					onSearch={search}
					portal={portal}
					category={category}
					searchQuery={searchQuery}
				/>
				<p className="capitalize">
					Berita <span className="uppercase ">{portal}</span> "{category}" Tidak
					Tersedia!
				</p>
			</>
		);
	}

	return <MainLayout>{showNewsPost()}</MainLayout>;
}
