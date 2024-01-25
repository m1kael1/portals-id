import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<header className="w-full h-auto bg-red-700 py-4 px-2 ">
			<section className=" px-8 flex justify-between items-center mx-auto">
				<NavLink to="/about">
					<h1 className="font-poppins text-2xl lg:text-4xl text-white font-semibold">
						Berita ID
					</h1>
				</NavLink>

				<ul className="flex gap-4 text-white">
					<NavLink to="/" className="text-lg lg:text-xl font-poppins">
						Beranda
					</NavLink>
					<NavLink to="/postingan" className="text-xl font-poppins">
						Artikel
					</NavLink>
				</ul>
				<NavLink
					to="/profile"
					className="lg:text-xl text-lg text-white font-poppins"
				>
					Profile
				</NavLink>
			</section>
		</header>
	);
}
