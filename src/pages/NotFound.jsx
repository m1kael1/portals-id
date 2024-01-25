import { Link } from "react-router-dom";

export default function NotFound(params) {
	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<h1 className="text-4xl font-bold">404 Not Found</h1>
			<p className="mt-2">Halaman yang Anda cari tidak ditemukan.</p>
			<Link to="/" className="mt-4 text-red-600 hover:underline">
				Kembali Ke Beranda
			</Link>
		</div>
	);
}
