import CardPost from "../components/Post/CardPost";
import Label from "../components/common/Label";
import useArticles from "../hooks/useArticles";
import MainLayout from "../layouts/MainLayout";

const PostContent = () => {
	const { loading, articles } = useArticles();

	return (
		<MainLayout>
			<Label>Artikel</Label>
			<div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-2">
				{articles.map((article, index) => (
					<CardPost index={index} article={article} />
				))}
			</div>
		</MainLayout>
	);
};

export default PostContent;
