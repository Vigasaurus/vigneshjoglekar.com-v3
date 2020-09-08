import React, { useEffect, useState } from 'react';
import { useScreenClass } from '../hooks/screenClass.hook';
import { Link } from 'react-router-dom';

const NotFound = () => {
	const [mounted, setMounted] = useState(false);
	const [chosenRedirect, setChosenRedirect] = useState({
		name: 'me',
		link: './',
	});
	const { screenClass } = useScreenClass();

	useEffect(() => {
		setTimeout(() => setMounted(true), 50);
		return () => {
			setMounted(false);
		};
	}, []);

	useEffect(() => {
		const options = [
			{ name: 'me', link: './about' },
			{ name: "what I've done", link: './works' },
			{ name: 'what I do best', link: './skills' },
			{ name: 'what I do for my community', link: './service' },
			{ name: 'how to get in touch with me', link: './contact' },
		];
		setChosenRedirect(options[Math.floor(Math.random() * options.length)]);
	}, []);

	return (
		<div
			className={`bg-background-primary flex flex-grow md:flex-row xs:flex-col z-0 ${
				mounted ? 'opacity-100 tw' : 'tw-longer opacity-0'
			}`}
		>
			<div className='w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 bg-transparent mt-16 md:ml-16 lg:ml-40 pt-0 xs:mx-5 xs:px-4 pb-1/10'>
				<h1 className='text-text-primary lg:text-6xl text-5xl font-bold leading-none font-title space-y-0'>
					Hey, this page doesn't seem&nbsp;to&nbsp;
					<span className='text-secondary'>exist</span>, sadly
				</h1>
				<h3 className='text-text-tertiary font-body font-bold mt-2 mb-8'>
					TRY THE {['xs', 'sm'].includes(screenClass) ? 'MENU' : 'LINKS'} ABOVE
				</h3>
				<h3 className='text-text-secondary xs:text-md md:text-lg lg:text-xl text-lg font-thin mt-7 font-body'>
					Try checking out more about {chosenRedirect.name},{' '}
					<Link to={chosenRedirect.link} className='text-accent-secondary'>
						here
					</Link>
					, instead!
				</h3>
				<div className='absolute left-0 w-3/4 lg:w-3/5 bg-background-tertiary about-background' />
			</div>
		</div>
	);
};

export default NotFound;
