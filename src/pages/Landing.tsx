import React, { useEffect, useState } from 'react';

// Import Assets Required by this page
require('../assets/Portrait.png');
require('../assets/Dots.svg');

interface Props {}

const Landing = () => {
	const [mounted, setMounted] = useState(false);
	const [portraitLoad, setPortraitLoad] = useState(false);

	useEffect(() => {
		setTimeout(() => setMounted(true), 50);
		return () => {
			setMounted(false);
		};
	}, []);

	return (
		<div
			className={`bg-background-primary flex tw flex-grow md:flex-row xs:flex-col  ${
				mounted ? 'opacity-100 tw' : 'tw-longer opacity-0'
			}`}
		>
			<div className='flex-grow bg-transparent md:block hidden' />
			<div className='bg-transparent xs:mb-5 md:my-auto pt-0 mt-0 relative overflow-hidden md:w-3/12 sm:w-6/12 xs:w-7/12 self-end xs:mr-10 md:self-auto'>
				<img
					src='./assets/Portrait.png'
					className='w-full relative z-10 xs:float-right'
					onLoad={() => setPortraitLoad(true)}
				/>
				{!portraitLoad && <div className='portrait-placeholder' />}
				<img
					src='./assets/Dots.svg'
					className='absolute left-0 w-1/4 z-20 xs:w-1/3'
				/>
				<div className='absolute rounded-full bg-accent-transparent top-right-hidden xl:hidden block' />
			</div>
			<div className='md:w-5/12 lg:w-7/12 xl:w-6/12  bg-transparent md:my-auto mt-0 xl:pl-20 lg:pl-10 pr-2 pt-0 xs:mx-5 sm:-mt-16 xs:-mt-4 xs:px-4 '>
				<h1 className='text-text-primary lg:text-6xl text-5xl font-bold leading-none font-title space-y-0'>
					Hey, I'm a <p className='text-secondary'>full-stack</p>
					web&nbsp;developer.
				</h1>
				<h3 className='text-text-secondary lg:text-xl text-lg font-thin mt-6 font-body md:block hidden'>
					I'm Vignesh, a web developer and student from Dallas, Texas - check
					out what I do at the links above!
					{/* TODO: Change to "below" in single-page setup */}
				</h3>
				<h3 className='text-text-secondary lg:text-xl text-lg font-thin mt-6 font-body md:hidden'>
					I'm Vignesh, a web developer and student from Dallas, Texas - check
					out what I do in the menu above!
					{/* TODO: Change to "below" in single-page setup */}
				</h3>
			</div>
			<div className='flex-grow bg-transparent md:block hidden' />
		</div>
	);
};

export default Landing;

/*
    Gives the first impression you want a prospective employer or client to see
    Engages the audience to want to explore more
*/
