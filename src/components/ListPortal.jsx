import { ListPortalLayout } from "../layouts/ListPortalLayout";
import { fadeInFromTop } from "../libs/variants";
import Category from "./ListPortal/Category";
import { Motion } from "./motion/Motion";

export const portals = ["cnn", "antara", "sindonews", "okezone", "cnbc"];

export default function ListPortal({ news }) {
	return (
		<ListPortalLayout>
			{news?.endpoints?.map((value, index) => {
				return (
					portals.includes(value.name) && (
						<Motion key={index} variants={fadeInFromTop} custom={index}>
							<Category portal={value} />
						</Motion>
					)
				);
			})}
		</ListPortalLayout>
	);
}
