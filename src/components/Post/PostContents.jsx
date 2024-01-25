import React from "react";
import { Link } from "react-router-dom";
import Label from "../common/Label";
import { opacityIn } from "../../libs/variants";
import CardPost from "./CardPost";
import useArticles from "../../hooks/useArticles";

const PostContents = () => {
	const { loading, articles } = useArticles();
	return (
		<>
			<Label
				id="postingan"
				variants={opacityIn}
				initial={"initial"}
				animate={"animate"}
			>
				Artikel
			</Label>
			<section className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-2">
				{articles.map((value, index) => (
					<CardPost key={value.id} index={index} article={value} />
				))}

				<div className=" lg:col-span-2 text-center">
					<Link
						to="/postingan"
						className="text-blue-400"
						onClick={() => window.scrollTo(0, 0)}
					>
						Lihat Artikel Lain →
					</Link>
				</div>
			</section>
		</>
	);
};

export default PostContents;
