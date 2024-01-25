import React from "react";
import Label from "./common/Label";

const Footer = () => {
	return (
		<footer className="bg-red-700 text-white p-4 z-50">
			<div className="w-full flex justify-center">
				<Label className="">&copy; 2024 Berita ID. All Rights Reserved.</Label>
			</div>
		</footer>
	);
};

export default Footer;
