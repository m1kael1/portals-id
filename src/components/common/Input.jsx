const Input = ({ className, validate, setValidate, ...restProps }) => {
	return (
		<input
			{...restProps}
			className={`outline-none border-2 focus:border-blue-500 rounded-lg px-2 py-1 ${className} ${
				validate ? "" : "border-red-500"
			}`}
		/>
	);
};

export default Input;
