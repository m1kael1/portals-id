import SubCategory from "./SubCategory";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Category({ portal }) {
	return (
		<section className="relative group  ">
			<div className="bg-red-600 relative -z-10 rounded-md w-fit text-white text-xl group-hover:bg-slate-300 group-hover:text-red-600 transition-all ">
				<section className="pr-2 pl-3 py-1 uppercase flex items-center justify-between transition-all min-w-[0rem] group-hover:min-w-[11rem] font-poppins cursor-pointer font-medium ease">
					{portal.name}
					<RiArrowDropDownLine
						className="transition-all ease -rotate-90 group-hover:rotate-0 "
						size={32}
					/>
				</section>
			</div>
			<SubCategory portal={portal.name} newsCategory={portal.paths} />
		</section>
	);
}
