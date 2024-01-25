import React from "react";
import useArticles from "../../hooks/useArticles";
import useLocalStorage from "../../hooks/useLocalStorage";
import CardPost from "../Post/CardPost";

const ViewPosts = ({ handleEditArticle }) => {
	const { data } = useLocalStorage();
	const { articles } = useArticles(null, data.profile.userId);

	return (
		<section className="min-h-[35vh]">
			<p className="font-semibold font-poppins">
				<span className="font-bold text-red-600">{articles.length}</span>{" "}
				Artikel
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4	">
				{articles.map((article, index) => (
					<CardPost
						index={index}
						article={article}
						handleEditArticle={handleEditArticle}
					/>
				))}
			</div>
		</section>
	);
};

export default ViewPosts;
