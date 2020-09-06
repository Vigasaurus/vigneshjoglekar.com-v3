import React, { useEffect, useContext, useState } from 'react';
import { projectCardContext } from '../contexts/projectCard.context';

interface Props {
	name: string;
	logo?: string;
	gradient: Array<string>;
	contentWidthClass?: string;
	link?: string;
	source?: string;
	description: string;
}

const Project = (props: Props) => {
	const { activeCard, setActiveCard } = useContext(projectCardContext);

	return (
		<div
			className={`md:mx-4 my-4 xs:w-full sm:w-4/5 md:w-2/5 h-64 rounded-lg flex items-center justify-center projectItem relative overflow-y-hidden`}
			style={{
				backgroundColor: props.gradient[0],
				background: `linear-gradient(140deg, ${props.gradient[0]} 13%, ${props.gradient[1]} 84%)`,
			}}
			onClick={() => {
				setActiveCard(props.name);
			}}
		>
			<span
				className={`text-3xl font-bold text-center space-y-0 text-white font-title ${(props.contentWidthClass ??
					'w-3/4') ||
					props.contentWidthClass}`}
			>
				{props.logo ? (
					<img src={props.logo} className='w-full' alt={props.name} />
				) : (
					props.name
				)}
			</span>
			<span
				className={`absolute rounded-lg flex justify-around items-center flex-col projectHoverItem p-3 ${activeCard ===
					props.name && 'clicked'}`}
			>
				<p className='font-title text-white text-xl font-bold'>{props.name}</p>
				<p className='font-body text-white text-md text-center'>
					{props.description}
				</p>
				<div className='flex justify-around w-4/5 flex-wrap'>
					{!!props.link && (
						<a
							className='px-3 py-1 text-secondary bg-transparent border border-secondary rounded-md hover:text-tertiary hover:border-tertiary transition-colors mb-2'
							href={props.link}
							rel='noopener noreferrer'
							target='blank'
						>
							Open&nbsp;Project
						</a>
					)}
					{!!props.source && (
						<a
							className='px-3 py-1 text-secondary bg-transparent border border-secondary rounded-md hover:text-tertiary hover:border-tertiary transition-colors mb-2'
							href={props.source}
							rel='noopener noreferrer'
							target='blank'
						>
							Open&nbsp;Source
						</a>
					)}
				</div>
			</span>
		</div>
	);
};

export default Project;
