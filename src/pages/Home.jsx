import HotNews from "../components/LatestNews/HotNews";
import ListPortal from "../components/ListPortal";
import MainLayout from "../layouts/MainLayout";
import useNews from "../hooks/useNews";
import PostContents from "../components/Post/PostContents";

const Home = () => {
	const { loading, news } = useNews();

	if (loading) {
		return (
			<MainLayout>
				<p>Loading...</p>
			</MainLayout>
		);
	}

	return (
		<MainLayout>
			<ListPortal news={news} />
			<HotNews />
			<PostContents />
		</MainLayout>
	);
};

export default Home;
