export default function filterNews(newsPosts, searchQuery) {
	const filteredNews = newsPosts?.filter(
		(posts) =>
			posts.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			posts.description.toLowerCase().includes(searchQuery.toLowerCase())
	);
	return { filteredNews };
}
