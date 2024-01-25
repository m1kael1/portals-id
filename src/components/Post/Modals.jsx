import { motion } from "framer-motion";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";

const Modals = ({ article, handleCloseNote, handleEditArticle, path }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			className="z-[51] max-h-screen cursor-default mx-auto top-0 left-0 min-h-[150px] md:h-content max-w-[1000px] bg-white p-4 w-full md:rounded-md "
		>
			<div className="w-full relative  flex justify-between items-start l ">
				<div>
					<h1 className="  mb-2 mr-2 text-2xl font-bold tracking-tight ">
						{article.title}
					</h1>

					<p className=" text-[14px] mb-2">{article.createdAt}</p>
				</div>
				<button onClick={() => handleCloseNote()}>
					<MdOutlineClose size={25} />
				</button>
				<span
					className="absolute right-1 bottom-2"
					onClick={() => handleCloseNote()}
				>
					{path == "/profile" && (
						<button onClick={() => handleEditArticle(article)}>
							<BsPencilSquare size={20} />
						</button>
					)}
				</span>
			</div>
			<hr />

			<div className="custom-scrollbar my-2 h-[85%] md:max-h-[60vh]   overflow-y-scroll">
				{article?.imageUrl && (
					<img className="my-4" src={article?.imageUrl} alt="" />
				)}
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="whitespace-pre-wrap  pr-2  text-justify break-all "
				>
					{article.article}
				</motion.p>
			</div>
			<hr />
		</motion.div>
	);
};

export default Modals;
