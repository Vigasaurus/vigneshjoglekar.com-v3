import { useState, useEffect } from 'react';

export const useScreenClass = () => {
	const [windowSize, setWindowSize] = useState({
		width: -1,
		height: -1,
	});

	const screens = [
		{ size: 'xs', min: 0 },
		{ size: 'sm', min: 576 },
		{ size: 'md', min: 768 },
		{ size: 'lg', min: 992 },
		{ size: 'xl', min: 1200 },
		{ size: 'xxl', min: 1600 },
	];

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	let screenClass = '';
	screens.forEach((screen) => {
		if (windowSize.width > screen.min) {
			screenClass = screen.size;
		}
	});

	return {
		screenClass,
		screenClassIndex: screens.findIndex(
			(screen) => screen.size === screenClass
		),
		windowSize,
	};
};
