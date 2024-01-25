import { motion } from "framer-motion";
import { ListPortalLayout } from "../layouts/ListPortalLayout";
import { fadeInFromLeft } from "../libs/variants";
import Category from "./ListPortal/Category";

export const portals = ["cnn", "antara", "sindonews", "okezone", "cnbc"];

export default function ListPortal({ news }) {
	return (
		<ListPortalLayout>
			{news?.endpoints?.map((value, index) => {
				return (
					portals.includes(value.name) && (
						<motion.div
							key={index}
							variants={fadeInFromLeft}
							animate={"animate"}
							initial={"initial"}
							custom={index}
						>
							<Category portal={value} />
						</motion.div>
					)
				);
			})}
		</ListPortalLayout>
	);
}
