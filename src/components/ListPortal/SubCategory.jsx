import { Link } from "react-router-dom";
import { BiCircle } from "react-icons/bi";
import "../../App.css";
import { SubCategoryLayout } from "../../layouts/ListPortalLayout";

export default function SubCategory({ portal, newsCategory }) {
	return (
		<SubCategoryLayout>
			{newsCategory.map((category) => (
				<Link
					to={`/${portal}/${category.name}`}
					key={category.name}
					onClick={() => window.scrollTo(0, 0)}
					className="font-poppins rounded-md text-start capitalize flex items-center gap-2 border-2 px-1 py-1 hover:bg-red-600 hover:text-white transition-all"
				>
					<BiCircle size={10} /> {category.name}
				</Link>
			))}
		</SubCategoryLayout>
	);
}
