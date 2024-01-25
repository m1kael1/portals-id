export function ListPortalLayout({ children }) {
	return (
		<section className="flex gap-3 flex-wrap py-3 sm:sticky sm:top-0 relative z-50  backdrop-blur-md ">
			{children}
		</section>
	);
}

export function SubCategoryLayout({ children }) {
	return (
		<section className="flex flex-col border-slate-30 z-50  bg-slate-300 mt-2 px-2 py-2 transition-all absolute rounded-sm gap-2 h-0 overflow-y-scroll custom-scrollbar top-0 opacity-0 w-full invisible group-hover:h-72 group-hover:top-6 group-hover:border-b-8  group-hover:opacity-100  group-hover:visible ">
			{children}
		</section>
	);
}
