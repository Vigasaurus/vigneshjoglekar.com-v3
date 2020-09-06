import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../contexts/theme.context';

// Import Assets Required by this page
require('../assets/Gmail.svg');
require('../assets/Twitter.svg');
require('../assets/Github.svg');

interface Props {}

const Contact = () => {
	const [mounted, setMounted] = useState(false);
	const { theme } = useContext(themeContext);

	useEffect(() => {
		setTimeout(() => setMounted(true), 50);
		return () => {
			setMounted(false);
		};
	}, []);

	return (
		<div
			className={`bg-background-primary flex tw flex-grow justify-center ${
				mounted ? 'opacity-100 tw' : 'tw-longer opacity-0'
			}`}
		>
			<div
				className='xs:w-11/12 sm:w-4/5 md:w-8/12 lg:w-9/12 xl:w-8/12 pt-16 pb-8 px-4 md:px-12 lg:px-16 bg-background-quaternary mb-auto  mt-16 flex flex-col items-center justify-between'
				style={{ borderRadius: '1.5rem' }}
			>
				<div className='text-center'>
					<h3 className='text-text-secondary lg:text-xl text-lg font-bold space-x-1 mt-6 font-body '>
						CONTACT ME
					</h3>
					<h1 className='text-text-primary lg:text-5xl text-4xl font-bold leading-none font-title space-y-0 mt-1 '>
						Let's talk!
					</h1>
				</div>
				<a href='mailto:hey@vigneshjoglekar.com'>
					<div className='flex justify-between items-center mt-6'>
						<img className='h-6' src='./assets/Gmail.svg' />
						<h3
							className='text-text-secondary lg:text-4xl md:text-3xl xs:text-2xl ml-2 md:ml-3 lg:ml-4 font-body overflow-x-hidden'
							style={{ textOverflow: 'ellipsis' }}
						>
							hey@vigneshjoglekar.com
						</h3>
					</div>
				</a>
				<div className='flex-grow py-4' />
				<div className='w-full py-2 flex justify-around items-center'>
					<Link to='./'>
						<img
							className='h-8'
							src={
								theme === 'base'
									? './assets/LogoDark.svg'
									: './assets/LogoLight.svg'
							}
						/>
					</Link>
					<div className='flex-grow' />
					<a href='https://github.com/Vigasaurus'>
						<img className='h-8 mr-4' src='./assets/Github.svg' />
					</a>
					<a href='https://twitter.com/Vigasaurus'>
						<img className='h-8' src='./assets/Twitter.svg' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
