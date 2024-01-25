import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";

export default function CardLatestNews({
	news,
	subContent = false,
	handleReadNews,
}) {
	function setReadNews() {
		handleReadNews(news);
	}
	return (
		<section
			className={` w-full h-full border-2 relative hover:border-4  overflow-clip group rounded-lg hover:z-10 transition-all ${
				subContent ? "sm:hover:scale-110 " : "sm:hover:scale-105"
			}`}
		>
			<Link to={news?.link} target="_blank" onClick={setReadNews}>
				<img
					src={news?.thumbnail}
					className="w-full h-full object-cover group-hover:scale-110 transition-all ease "
					alt={news?.title}
				/>
				<article className="absolute group-hover:bottom-0 opacity-1 group-hover:opacity-100 bg-black bg-opacity-50 group-hover:bg-opacity-80 -bottom-9 w-full h-fit px-2 py-2 text-white transition-all ease font-poppins ">
					<h1
						className={`min-h-[68px] sm:min-h-fit  group-hover:text-2xl pb-5 grop-hover:pb-0  transition-all ${
							subContent
								? "sm:text-xs sm:group-hover:text-sm text-xl"
								: "text-xl group-hover:text-2xl "
						}`}
					>
						{news?.title}
					</h1>
					<p
						className={` text-end ${subContent ? "sm:text-xs text-xl " : " "}`}
					>
						{formatDate(news?.pubDate)}
					</p>
				</article>
			</Link>
		</section>
	);
}
