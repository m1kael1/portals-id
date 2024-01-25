const Button = ({ children, className, ...restProps }) => {
	return (
		<button
			{...restProps}
			className={`inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
