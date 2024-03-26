export const fadeInFromBottom = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: index ? 0.2 * index : 0,
			duration: 0.2,
			type: "spring",
			stiffness: 10,
			damping: 5,
		},
	}),
};

export const fadeInFromTop = {
	initial: {
		opacity: 0,
		y: -20,
	},
	animate: (index) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.1 * index,
		},
	}),
};

export const fadeInFromLeft = {
	initial: {
		opacity: 0,
		x: -200,
	},
	animate: (index) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: index ? 0.2 * index : 0,
			duration: 0.2,
			type: "spring",
			stiffness: 10,
			damping: 5,
		},
	}),
};

export const fadeInFromRight = {
	initial: {
		opacity: 0,
		x: 100,
	},
	animate: (index) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.1 * index,
		},
	}),
};

export const opacityIn = {
	initial: {
		opacity: 0,
	},
	animate: (index) => ({
		opacity: 1,
		transition: {
			delay: 0.2 * index,
		},
	}),
};

export const textReveal = {
	initial: {
		opacity: 0,
	},
	animate: (index) => ({
		opacity: 1,
		transition: {
			duration: 0.3 * index,
			delay: index * 0.005,
		},
	}),
};
