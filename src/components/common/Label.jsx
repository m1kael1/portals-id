import { motion } from "framer-motion";

const Label = ({ children, ...restProps }) => {
	return (
		<motion.h2
			{...restProps}
			className="font-poppins text-2xl font-semibold mt-4 flex"
		>
			{children}
		</motion.h2>
	);
};

export default Label;
