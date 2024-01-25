import { useState } from "react";
import Button from "../common/Button";
import { MdOutlineCancel } from "react-icons/md";

const EditProfile = ({ profile, setEditProfile, data, setData }) => {
	const [formData, setFormData] = useState({
		username: profile.username,
		email: profile.email,
		phoneNumber: profile.phoneNumber,
	});

	const [usernameError, setUsernameError] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
		if (name === "username") {
			if (value.trim() === "") {
				setUsernameError("Username kosong");
			} else {
				setUsernameError(null);
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.username.trim() === "") {
			setUsernameError("Username kosong");
		} else {
			setData({
				...data,
				profile: {
					...data.profile,
					email: formData.email,
					username: formData.username,
					phoneNumber: formData.phoneNumber,
				},
			});
			setEditProfile(false);
		}
	};

	return (
		<div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 grid place-items-center px-8 z-[55]">
			<div className="max-w-lg w-full relative mx-auto mt-8 p-6 bg-white rounded shadow-md">
				<h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
				<div
					onClick={() => setEditProfile(false)}
					className="absolute right-6 top-4 cursor-pointer"
				>
					<MdOutlineCancel size={25} color="red" />
				</div>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-sm mb-2">Username</label>
						<input
							type="text"
							name="username"
							value={formData.username}
							onChange={handleChange}
							placeholder="username"
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 "
						/>
						{usernameError && (
							<p className="text-red-500 text-sm mt-1">{usernameError}</p>
						)}
					</div>
					<div className="mb-4">
						<label className="block text-sm mb-2">Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="email@example.com"
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm mb-2">Phone Number</label>
						<input
							type="tel"
							name="phoneNumber"
							value={formData.phoneNumber}
							onChange={handleChange}
							placeholder="08123456789"
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
						/>
					</div>
					<div className="text-center">
						<Button type="submit">Simpan</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditProfile;
