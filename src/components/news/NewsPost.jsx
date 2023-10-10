import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";

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
				<Link
					to={post.link}
					onClick={handleReadNews ? setReadNews : null}
					target="_blank"
					className=" inline-flex sm:absolute sm:bottom-5  items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
				>
					Baca Berita
					<svg
						className="w-3.5 h-3.5 ml-2 "
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
}
