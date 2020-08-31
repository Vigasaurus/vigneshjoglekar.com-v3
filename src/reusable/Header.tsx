import React, { useContext, useState, useEffect, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../contexts/theme.context';

// Import Assets Required by this page
require('../assets/LogoDark.svg');
require('../assets/LogoLight.svg');

interface NavProps {
	to: string;
	children: React.ReactChildren | string;
	onClick: (event: MouseEvent) => void;
}

const NavItem = (props: NavProps) => (
	<Link
		{...props}
		className='text-text-primary mx-4 text-lg font-body font-bold hover:text-secondary tw variant-smallcaps'
	>
		{props.children}
	</Link>
);

const dropdown: React.Ref<any> = React.createRef();

const Header: React.FC = () => {
	const { theme, swapCurrentTheme: swapTheme } = useContext(themeContext);

	const [localTheme, setLocalTheme] = useState(theme);
	const [dropdownShowing, setDropdownShowing] = useState(false);

	useEffect(() => {
		setTimeout(() => setLocalTheme(theme), 200);
	}, [theme]);

	const handleDocumentClick = (e: Event) => {
		if (!dropdown || !dropdown.current.contains(e.target)) {
			setDropdownShowing(false);
			document.removeEventListener('click', handleDocumentClick);
		}
	};

	return (
		<div
			className={`w-full bg-background-primary flex m-0 justify-between items-center tw md:px-24 px-12  py-4`}
		>
			<Link to='./'>
				<img
					className='md:w-10 h-full'
					src={
						localTheme === 'base'
							? '../assets/LogoDark.svg'
							: '../assets/LogoLight.svg'
					}
				/>
			</Link>
			<div className='flex-grow' />
			<NavItem to='./about' onClick={() => console.log('about')}>
				About
			</NavItem>
			<NavItem to='./qualifications' onClick={() => console.log('about')}>
				Expertise
			</NavItem>
			<NavItem to='./projects' onClick={() => console.log('about')}>
				Works
			</NavItem>
			<NavItem to='./service' onClick={() => console.log('about')}>
				Service
			</NavItem>
			<NavItem to='./contact' onClick={() => console.log('about')}>
				Contact
			</NavItem>
			<div className='flex-grow md:block hidden' />
			<button
				title='Swap Site Theme'
				onClick={() => {
					swapTheme();
				}}
				className='text-text-primary hover:text-tertiary'
			>
				Swap Theme
			</button>
		</div>
	);
};

export default Header;
