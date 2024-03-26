import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { textReveal } from "../../libs/variants";

export const TextReveal = ({ variants, className, text }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<motion.span
			ref={ref}
			animate={isInView ? "animate" : "initial"}
			initial={"initial"}
		>
			{text.split(" ").map((word) => (
				<motion.p className="inline-block">
					{word.split("").map((char, index) => (
						<motion.span
							className={`inline-block ${className}`}
							variants={variants ? variants : textReveal}
							custom={index}
						>
							{char}
						</motion.span>
					))}
					<span>&nbsp;</span>
				</motion.p>
			))}
		</motion.span>
	);
};
