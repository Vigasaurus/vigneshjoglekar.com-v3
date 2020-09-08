import React, { useEffect, useState } from 'react';

// Import Assets Required by this page
// TODO: Import better
// Front-End
require('../assets/skills/Front.png');
require('../assets/skills/React.svg');
require('../assets/skills/Figma.svg');
require('../assets/skills/Sass.svg');
require('../assets/skills/Tailwind.svg');
require('../assets/skills/Gatsby.svg');
// Back-End
require('../assets/skills/Back.png');
require('../assets/skills/Typescript.svg');
require('../assets/skills/Node.svg');
require('../assets/skills/MySQL.svg');
require('../assets/skills/Mongo.svg');
require('../assets/skills/Express.svg');
// DevOps
require('../assets/skills/DevOps.png');
require('../assets/skills/AWS.svg');
require('../assets/skills/Nginx.svg');
require('../assets/skills/Docker.svg');
require('../assets/skills/PM2.svg');
// Maintenance
require('../assets/skills/Security.png');
require('../assets/skills/Postman.svg');
require('../assets/skills/Jest.svg');
require('../assets/skills/ESLint.svg');
require('../assets/skills/Prettier.svg');

const Skills = () => {
	const [mounted, setMounted] = useState(false);
	const expertiseBase =
		'w-full md:w-2/5 min-h-56 py-4 bg-background-primary flex flex-col mx-2 md:mx-8 tw';
	const expertiseStyle = {
		borderRadius: '1rem',
		boxShadow: '0px 0px 50px -10px var(--color-accent-trans)',
	};

	useEffect(() => {
		setTimeout(() => setMounted(true), 50);
		return () => {
			setMounted(false);
		};
	}, []);

	const ToolLogo = (props: { src: string; title: string }) => {
		return (
			<img
				className='w-12 h-12'
				src={`./assets/${props.src}.svg`}
				title={props.title}
			/>
		);
	};

	return (
		<div
			className={`bg-background-primary flex flex-grow md:flex-row xs:flex-col z-0 ${
				mounted ? 'opacity-100 tw' : 'tw-longer opacity-0'
			}`}
		>
			<div className='w-full md:w-11/12 lg:w-11/12 xl:w-11/12 bg-transparent xs:mt-8 md:mt-16 md:ml-8 lg:ml-24 xl:ml-40 pt-0 xs:px-4 pb-1/10'>
				<div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 bg-transparent px-4 md:px-0'>
					<h3 className='text-text-tertiary font-body font-bold mb-2'>
						SKILLS
					</h3>
					<h1 className='text-text-primary lg:text-6xl text-5xl font-bold leading-none font-title space-y-0'>
						My Expertise
					</h1>
					<h3 className='text-text-secondary xs:text-md md:text-lg lg:text-xl text-lg font-thin mt-7 font-body'>
						Below are the areas of web-development that I involve myself in, as
						well as the technologies I'm most experienced in for each of them.
						Check out my{' '}
						<a href='./Vignesh Joglekar.pdf' className='text-secondary'>
							resume
						</a>{' '}
						for more of what I've done!
					</h3>
				</div>
				<div className='flex w-full flex-wrap align-center'>
					<div className={`${expertiseBase} mt-8`} style={expertiseStyle}>
						<div className='w-full px-8 flex items-center h-16'>
							<img className='w-12' src='./assets/Front.png' />
							<p className='text-text-primary font-title text-2xl font-bold pl-2 self-end'>
								Front-End
							</p>
						</div>
						<div className='w-full px-8'>
							<p className='text-text-primary font-body text-lg'>
								As much as we all love using CLIs and writing our own network
								requests, a front-end is at the very least a nice-to-have for an
								end user, and an accessible, beautiful and extensible one is
								just icing.
							</p>
						</div>
						<div className='w-full px-4 md:px-8 flex flex-row h-12 justify-around mt-5'>
							<ToolLogo src='React' title='React.js' />
							<ToolLogo src='Figma' title='Figma' />
							<ToolLogo src='Tailwind' title='Tailwind.css' />
							<ToolLogo src='Sass' title='Sass' />
							<ToolLogo src='Gatsby' title='Gatsby' />
						</div>
					</div>
					<div className={`${expertiseBase} mt-8`} style={expertiseStyle}>
						<div className='w-full px-8 flex items-center h-16'>
							<img className='w-12' src='./assets/Back.png' />
							<p className='text-text-primary font-title text-2xl font-bold pl-2 self-end'>
								Back-End
							</p>
						</div>
						<div className='w-full px-8'>
							<p className='text-text-primary font-body text-lg'>
								Whether it's producing fault and attack resistant APIs or simply
								ensuring our application has every endpoint a user may ever need
								- back-end development ultimately powers every app, ever.
							</p>
						</div>
						<div className='w-full px-4 md:px-8 flex flex-row h-12 justify-around mt-5'>
							<ToolLogo src='Node' title='Node.js' />
							<ToolLogo src='Typescript' title='Typescript' />
							<ToolLogo src='Express' title='Express' />
							<ToolLogo src='MySQL' title='MySQL' />
							<ToolLogo src='Mongo' title='Mongo' />
						</div>
					</div>
					<div className={`${expertiseBase} mt-8 mb-8`} style={expertiseStyle}>
						<div className='w-full px-8 flex items-center h-16'>
							<img className='w-12' src='./assets/DevOps.png' />
							<p className='text-text-primary font-title text-2xl font-bold pl-2 self-end'>
								DevOps
							</p>
						</div>
						<div className='w-full px-8'>
							<p className='text-text-primary font-body text-lg'>
								Between deploying production applications to edges worldwide, to
								ensuring development/monitoring environments are secure and
								accessible to my team - DevOps drives the backbone of any
								development cycle.
							</p>
						</div>
						<div className='w-full px-4 md:px-8 flex flex-row h-12 justify-around mt-5'>
							<ToolLogo src='AWS' title='Amazon Web Services' />
							<ToolLogo src='Nginx' title='Nginx' />
							<ToolLogo src='PM2' title='PM2' />
							<ToolLogo src='Docker' title='Docker' />
						</div>
					</div>
					<div
						className={`${expertiseBase} md:mt-8 mb-8`}
						style={expertiseStyle}
					>
						<div className='w-full px-8 flex items-center h-16'>
							<img className='w-12' src='./assets/Security.png' />
							<p className='text-text-primary font-title text-2xl font-bold pl-2 self-end'>
								Maintenance
							</p>
						</div>
						<div className='w-full px-8'>
							<p className='text-text-primary font-body text-lg'>
								Everything from Security to Testing to Code Quality - some of
								the least appreciated aspects of web development, but some of my
								all-time favorite.
							</p>
						</div>
						<div className='w-full px-4 md:px-8 flex flex-row h-12 justify-around mt-5'>
							<ToolLogo src='Postman' title='Postman' />
							<ToolLogo src='Prettier' title='Prettier' />
							<ToolLogo src='ESLint' title='ESLint' />
							<ToolLogo src='Jest' title='Jest' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;

/*
    Displays your technical skills
    Discuss what areas of Computer Science you like
    Includes your resume (PDF format preferred but HTML acceptable)
*/
