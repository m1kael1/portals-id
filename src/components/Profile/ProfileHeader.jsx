import { LiaUserEditSolid } from "react-icons/lia";
import Button from "../common/Button";
import { BiAddToQueue } from "react-icons/bi";
import { useState } from "react";
import EditProfile from "./EditProfile";
import useLocalStorage from "../../hooks/useLocalStorage";
import PostModals from "../Profile/PostModals";
import EditModals from "../Profile/EditModals";

const ProfileHeader = ({
	isEditing,
	isAdding,
	editPost,
	setEditPost,
	isEditPost,
}) => {
	const { data, setData } = useLocalStorage();
	const { profile } = data;
	const [editProfile, setEditProfile] = useState(false);
	const [addPost, setAddPost] = useState(false);

	isEditing(editProfile);
	isAdding(addPost);

	return (
		<section className="flex justify-center items-center font-poppins my-8">
			<div>
				<h1 className="text-3xl font-bold text-center ">{profile.username}</h1>
				<p className="text-center">{profile.email}</p>
				<p className="text-center">
					{profile.phoneNumber ? `${profile.phoneNumber}` : ""}
				</p>
				<div className="flex justify-center mt-2 gap-3">
					<Button
						onClick={() => setEditProfile(!editProfile)}
						className="edit-profile"
					>
						<LiaUserEditSolid size={20} />
					</Button>
					<Button onClick={() => setAddPost(!addPost)} className="add-post">
						<BiAddToQueue size={20} />
					</Button>
				</div>
				{editProfile && (
					<EditProfile
						profile={profile}
						setEditProfile={setEditProfile}
						data={data}
						setData={setData}
					/>
				)}
				{addPost && (
					<PostModals
						setAddPost={setAddPost}
						username={profile.username}
						email={profile.email}
						userId={profile.userId}
					/>
				)}
				{editPost && (
					<EditModals setEditPost={setEditPost} isEditPost={isEditPost} />
				)}
			</div>
		</section>
	);
};

export default ProfileHeader;
