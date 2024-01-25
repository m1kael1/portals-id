import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../libs/variants";
import Button from "../common/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Label from "../common/Label";
import { useState } from "react";
import Modals from "./Modals";
import { BsTrash3 } from "react-icons/bs";

const CardPost = ({ index, article, handleEditArticle }) => {
	const [openModals, setOpenModals] = useState(false);
	const url = window.location.href;
	const path = url.substring(url.length - 8);
	const navigate = useNavigate();

	const handleOpenModals = (params) => {
		setOpenModals(params);
	};
	const handleDelete = async () => {
		try {
			await axios.delete(
				`${import.meta.env.VITE_BASE_ARTICLES_URL}/${article.id}`
			);
			navigate(0);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<motion.div
			variants={fadeInFromLeft}
			initial="initial"
			animate="animate"
			custom={index}
			className="max-w-7xl relative"
		>
			<div className="relative group">
				<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
				<div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
					<svg
						className="w-8 h-8 text-purple-600 absolute left-3 top-6"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
						/>
					</svg>
					<div className="space-y-2 overflow-hidden">
						<h1 className="font-semibold text-lg text-black truncate">
							{article.title}
						</h1>
						<p className="truncate pb-1">{article.article}</p>
						<button
							onClick={() => handleOpenModals(true)}
							className="block text-indigo-400 group-hover:text-slate-800 transition duration-200"
						>
							Baca Artikel →
						</button>

						{path == "/profile" && (
							<BsTrash3
								onClick={() => handleDelete()}
								className="top-2  right-5 absolute cursor-pointer"
								size={20}
								color="red"
							/>
						)}
					</div>
				</div>
			</div>
			{openModals && (
				<div
					className={`fixed visible w-full h-full flex min-w-[300px] justify-center md:items-center left-0 top-0 z-50  bg-black bg-opacity-70 `}
				>
					<Modals
						path={path}
						article={article}
						handleCloseNote={() => handleOpenModals(false)}
						handleEditArticle={handleEditArticle}
					/>
				</div>
			)}
		</motion.div>
	);
};

export default CardPost;
