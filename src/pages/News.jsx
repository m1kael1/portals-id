import { useState } from "react";
import { useParams } from "react-router-dom";
import NewsPost from "../components/news/NewsPost";
import useNews from "../hooks/useNews";
import MainLayout from "../layouts/MainLayout";
import NewsPostLayout from "../layouts/NewsPostLayout";
import NewsPostsHeader from "../components/news/NewsPostsHeader";
import { motion } from "framer-motion";
import { fadeInFromBottom } from "../libs/variants";

export default function News() {
	const { portal, category } = useParams();
	const catergoryUrl = `${portal}/${category}`;
	const { loading, news } = useNews(catergoryUrl);
	const [searchQuery, setSearchQuery] = useState("");
	const newsPosts = news?.data?.posts;

	function search(query) {
		setSearchQuery(query);
	}

	const filter = newsPosts?.filter(
		(posts) =>
			posts.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			posts.description.toLowerCase().includes(searchQuery.toLowerCase())
	);

	function showNewsPost() {
		if (loading) {
			return <p>Loading...</p>;
		}
		if (news.success) {
			if (filter.length === 0) {
				return (
					<>
						<NewsPostsHeader
							onSearch={search}
							portal={portal}
							category={category}
							searchQuery={searchQuery}
						/>
						<p>"{searchQuery}" Tidak Ditemukan</p>
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
						{filter.map((value, index) => (
							<motion.div
								variants={fadeInFromBottom}
								initial="initial"
								animate="animate"
								custom={index}
								key={index}
							>
								<NewsPost post={value} />
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
