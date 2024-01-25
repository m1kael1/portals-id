const ViewControl = ({ setViewPost, viewPost }) => {
	return (
		<div className="flex gap-2 border-t-2 border-gray-300 py-2 w-full mb-4 border-b-2 ">
			<button
				onClick={() => setViewPost(true)}
				className={`font-poppins hover:underline hover:font-bold hover:text-xl transition-all  ${
					viewPost
						? "font-bold underline text-xl text-red-600"
						: "font-semibold"
				} `}
			>
				Post
			</button>
			<button
				onClick={() => setViewPost(false)}
				className={`font-poppins hover:underline hover:font-bold hover:text-xl transition-all  ${
					viewPost
						? "font-semibold"
						: "font-bold underline text-xl text-red-600 "
				} `}
			>
				Riwayat
			</button>
		</div>
	);
};

export default ViewControl;
