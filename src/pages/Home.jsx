import HotNews from "../components/hot_news/HotNews";
import ListPortal from "../components/ListPortal";
import MainLayout from "../layouts/MainLayout";
import useNews from "../hooks/useNews";

const Home = () => {
	const { loading, news } = useNews();

	return (
		<MainLayout>
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<ListPortal news={news} />
					<HotNews />
				</>
			)}
		</MainLayout>
	);
};

export default Home;
