import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ViewControl from "../components/Profile/ViewControl";
import ViewPosts from "../components/Profile/ViewPosts";
import NewsHistory from "../components/Profile/NewsHistory";

const Profile = () => {
	const [viewPost, setViewPost] = useState(true);
	const [editProfile, setEditProfile] = useState(false);
	const [addPost, setAddPost] = useState(false);
	const [editPost, setEditPost] = useState(false);
	const [isEditPost, setIsEditPost] = useState({});

	const isEditing = (value) => {
		setEditProfile(value);
	};
	const isAdding = (value) => {
		setAddPost(value);
	};

	const handleEditArticle = (article) => {
		setIsEditPost(article);
		setEditPost(true);
	};

	return (
		<MainLayout>
			<ProfileHeader
				editPost={editPost}
				setEditPost={setEditPost}
				isEditing={isEditing}
				isAdding={isAdding}
				isEditPost={isEditPost}
			/>
			<ViewControl viewPost={viewPost} setViewPost={setViewPost} />
			{viewPost ? (
				<ViewPosts handleEditArticle={handleEditArticle} />
			) : (
				<NewsHistory />
			)}
		</MainLayout>
	);
};

export default Profile;
