import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import Button from "../common/Button";

export default function NewsPost({ post, handleReadNews = true }) {
	function setReadNews() {
		handleReadNews(post);
	}
	return (
		<div className="w-full sm:h-full sm:relative bg-white border  border-gray-200 rounded-lg shadow ">
			<img
				className="rounded-t-lg w-full"
				src={post.thumbnail}
				alt={post.title}
			/>

			<div className="p-5">
				<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-poppins ">
					{post.title}
				</h2>
				<pre className="text-gray-900 font-poppins text-sm mb-1">
					{formatDate(post.pubDate)}
				</pre>

				<p className="mb-3 font-normal text-gray-900 pb-8 dark:text-gray-400 font-poppins">
					{post.description}
				</p>
				<Link to={post.link} target="_blank">
					<Button
						onClick={handleReadNews ? setReadNews : null}
						className="sm:absolute sm:bottom-5"
					>
						Baca Berita
					</Button>
				</Link>
			</div>
		</div>
	);
}
