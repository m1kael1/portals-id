import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Motion = ({ children, variants, className, custom }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<motion.span
			ref={ref}
			className={className}
			variants={variants}
			animate={isInView ? "animate" : "initial"}
			initial={"initial"}
			custom={custom}
		>
			{children}
		</motion.span>
	);
};
