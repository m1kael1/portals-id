import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../common/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostModals = ({ setAddPost, username, email, userId }) => {
	const [postData, setPostData] = useState(() => {
		const date = new Date();
		return {
			userId: userId,
			author: username,
			email: email,
			title: "",
			imageUrl: "",
			article: "",
			createdAt: date.toLocaleDateString(),
		};
	});
	const [titleError, setTitleError] = useState(null);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPostData({
			...postData,
			[name]: value,
		});
		if (name === "title") {
			if (value.trim() === "") {
				setTitleError("Masukkan Judul");
			} else {
				setTitleError(null);
			}
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (postData.title.trim() === "") {
			setTitleError("Masukkan Judul");
		} else {
			try {
				const res = await axios.post(
					`${import.meta.env.VITE_BASE_ARTICLES_URL}`,
					postData
				);
				navigate(0);
				if (res.status == 201) {
					setAddPost(false);
				}
			} catch (error) {
				console.error(error);
			}
		}
	};

	return (
		<div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 grid place-items-center px-8 z-[55]">
			<div className="max-w-4xl w-full relative mx-auto mt-8 p-6 bg-white rounded shadow-md ">
				<h2 className="text-xl font-semibold mb-4">Buat Artikel</h2>
				<div
					onClick={() => setAddPost(false)}
					className="absolute right-6 top-4 cursor-pointer"
				>
					<MdOutlineCancel size={25} color="red" />
				</div>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-sm mb-2">Judul</label>
						<input
							type="text"
							name="title"
							value={postData.title}
							onChange={handleChange}
							placeholder="Judul"
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 "
						/>
						{titleError && (
							<p className="text-red-500 text-sm mt-1">{titleError}</p>
						)}
					</div>
					<div className="mb-4">
						<label className="block text-sm mb-2">Link Gambar</label>
						<input
							type="text"
							name="imageUrl"
							value={postData.imageUrl}
							onChange={handleChange}
							placeholder="Link Gambar(Optional)"
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 "
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm mb-2">Artikel</label>
						<textarea
							type="text"
							name="article"
							value={postData.article}
							onChange={handleChange}
							cols="5"
							rows="10"
							placeholder="Masukkan artikel anda..."
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300
              shadow appearance-none leading-tight focus:shadow-outline resize-none 
              "
						/>
					</div>
					<div className="text-center">
						<Button type="submit">Kirim</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PostModals;
