import React, { useEffect, useState, useContext } from 'react';
import Project from '../components/Project';
import { projectCardContext } from '../contexts/projectCard.context';

const Works = () => {
	const [mounted, setMounted] = useState(false);
	const { activeCard, setActiveCard } = useContext(projectCardContext);

	useEffect(() => {
		setTimeout(() => setMounted(true), 50);
		return () => {
			setMounted(false);
			setActiveCard('');
		};
	}, [setActiveCard, setMounted]);

	return (
		<div
			className={`bg-background-primary flex-grow z-0 ${
				mounted ? 'opacity-100 tw' : 'tw-longer opacity-0'
			}`}
			onClick={(e) => {
				// ! This is terrible, but I'll change it later
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				let newTarget: any = e.target;
				let inCard = false;
				while (newTarget.parentNode && !inCard) {
					// console.log(newTarget);
					if (newTarget.classList.contains('projectItem')) {
						inCard = true;
					}
					newTarget = newTarget.parentNode;
				}
				if (!inCard) {
					// console.log('clearing card from Projects', e.target);
					setActiveCard('');
				}
			}}
		>
			<div className='md:w-11/12 lg:w-5/6 xl:w-9/12 bg-transparent mt-16 md:ml-8 lg:ml-24 xl:ml-40 pt-0 xs:mx-3 xs:px-2 pb-1/10'>
				<div className='flex md:items-end justify-between flex-col md:flex-row ml-2 '>
					<div className='w-1/2 flex-grow'>
						<h3 className='text-text-tertiary font-body font-bold mb-2'>
							PORTFOLIO
						</h3>
						<h1 className='text-text-primary lg:text-6xl text-5xl font-bold leading-none font-title space-y-0'>
							Recent Projects
						</h1>
					</div>
					<a
						className='text-accent-secondary text-xl md:mt-0 mt-3 mb-4 underline font-title'
						href='https://github.com/Vigasaurus'
						style={{ width: 'max-content' }}
						target='blank'
						rel='noopener noreferrer'
					>
						{'See all my work on Github 👉'}
					</a>
				</div>
				<div className='flex w-full flex-wrap justify-center'>
					<Project
						name='Potluck Party'
						logo='https://potluckparty.com/images/Logo_White.svg'
						gradient={['#0a7641', '#25c977']}
						contentWidthClass='w-1/2'
						link='https://potluckparty.com'
						description='Project manager and lead developer of startup Party Planning application, launching Q3 2020'
					/>
					<Project
						name='Secret Hitler'
						logo='https://secrethitler.io/images/banner-new.png'
						gradient={['#f2654b', '#f2654b']}
						contentWidthClass='w-full'
						link='https://secrethitler.io'
						source='https://github.com/cozuya/secret-hitler'
						description='Major contributor and maintainer of the online-adaptation of the hit board game'
					/>
					<Project
						name='Aggie Web Developers'
						logo='https://aggiedevelopers.com/images/AWD-logo.png'
						gradient={['#21145e', '#6548f2']}
						contentWidthClass='w-1/2'
						link='https://aggiedevelopers.com/'
						source='https://github.com/Aggie-Web-Developers/awd-website'
						description='Contributor and Vice President of organization aiming to empower budding web developers'
					/>
					<Project
						name='Lighthouse Report Generator'
						logo='https://raw.githubusercontent.com/Vigasaurus/Lighthouse-Report-Generator/master/src/images/logo_header.png'
						gradient={['#48f28f', '#10967e']}
						contentWidthClass='w-1/2'
						link='https://addons.mozilla.org/en-US/firefox/addon/lighthouse-report-generator/'
						source='https://github.com/Vigasaurus/Lighthouse-Report-Generator'
						description='Author of unofficial Google Lighthouse port for Firefox'
					/>
					<Project
						name='Portfolio Site V2'
						logo='https://raw.githubusercontent.com/Vigasaurus/vigneshjoglekar.com/master/public/icon/512x512.png'
						gradient={['#ed76ff', '#512155']}
						contentWidthClass='w-1/2'
						link='https://2019.vigneshjoglekar.com'
						source='https://github.com/Vigasaurus/vigneshjoglekar.com'
						description='Version 2 of my portfolio website, 2017-2020'
					/>
					<Project
						name='More is always on the way!'
						gradient={['#6b6b6b', '#393939']}
						contentWidthClass='w-3/4'
						description="I'm always working on new things! Check back soon to see what else I've done"
					/>
				</div>
				<div className='absolute right-0 w-4/5 bg-background-secondary projects-background' />
			</div>
		</div>
	);
};

export default Works;
