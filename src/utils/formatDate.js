export default function formatDate(pubDate) {
	// Mengonversi tanggal menjadi objek Date
	const formatDate = new Date(pubDate);

	const date = formatDate.getDate();
	const month = formatDate.getMonth() + 1; // Ingat bahwa bulan dimulai dari 0
	const year = formatDate.getFullYear();

	// Daftar nama hari dalam Bahasa Indonesia
	const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
	// Mengambil indeks hari dari objek Date
	const dayIndex = formatDate.getDay();
	// Mendapatkan nama hari berdasarkan indeks
	const day = days[dayIndex];

	const postDate = `${day}, ${date}/${month}/${year}`;
	return postDate;
}
