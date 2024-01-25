import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import Banner from "../components/Banner";
import { useState } from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { nanoid } from "nanoid";

export default function Landing() {
	const { data, setData } = useLocalStorage();
	const [username, setUsername] = useState("");
	const [validate, setValidate] = useState(true);
	const navigate = useNavigate();

	function handleGetStarted() {
		const trimmedUsername = username.trim();

		if (trimmedUsername !== "") {
			setData({
				...data,
				status: true,
				profile: {
					userId: nanoid(),
					username: trimmedUsername,
					email: null,
					phoneNumber: null,
				},
			});
			navigate(0);
		} else {
			setValidate(false);
		}
	}

	return (
		<div className=" flex flex-col items-center justify-center">
			<Banner hash="getStarted" />
			<div
				id="getStarted"
				className="flex gap-2 justify-center items-center h-screen"
			>
				<Input
					type="text"
					value={username}
					onClick={() => setValidate(true)}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Masukan Nama..."
					validate={validate}
				/>

				<Button onClick={handleGetStarted}>Mulai Membaca</Button>
			</div>
		</div>
	);
}
