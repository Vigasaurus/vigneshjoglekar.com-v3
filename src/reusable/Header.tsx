import React, { useContext, useState, useEffect, MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { themeContext } from '../contexts/theme.context';
import { useScreenClass } from '../hooks/screenClass.hook';
import { HamburgerSliderReverse } from 'react-animated-burgers';

// Import Assets Required by this page
require('../assets/LogoDark.svg');
require('../assets/LogoLight.svg');

interface NavProps {
	to: string;
	children: string;
	active: boolean;
}

const dropdown: React.Ref<HTMLDivElement> = React.createRef();
const burger: React.Ref<HTMLDivElement> = React.createRef();

const Header: React.FC = () => {
	const { theme, swapCurrentTheme: swapTheme } = useContext(themeContext);
	const location = useLocation();
	const [localTheme, setLocalTheme] = useState(theme);
	const { screenClassIndex } = useScreenClass();
	const [dropdownShowing, setDropdownShowing] = useState(false);

	useEffect(() => {
		setTimeout(() => setLocalTheme(theme), 200);
	}, [theme]);

	const handleDocumentClick = (e: Event) => {
		if (
			dropdown?.current &&
			burger?.current &&
			e.target instanceof Node &&
			!dropdown.current.contains(e.target) &&
			!burger.current.contains(e.target)
		) {
			setDropdownShowing(false);
			document.removeEventListener('click', handleDocumentClick);
		}
	};

	const NavItem = (props: NavProps) =>
		props.active ? (
			<p
				className={`
					text-secondary mx-2 xs:text-lg md:text-md lg:text-lg font-body font-bold tw cursor-default
					${screenClassIndex <= 1 ? 'py-1' : ''}
				`}
				style={{ width: 'max-content' }}
			>
				{props.children}
			</p>
		) : (
			<Link
				to={props.to}
				className={`
					text-text-primary mx-2 xs:text-lg md:text-md lg:text-lg font-body font-bold hover:text-secondary tw
					${screenClassIndex <= 1 ? 'py-1' : ''}
				`}
				style={{ width: 'max-content' }}
				onClick={() => setDropdownShowing(false)}
			>
				{props.children}
			</Link>
		);

	const renderMenuItems = (): React.ReactNode => {
		return (
			<>
				<NavItem to='./about' active={location.pathname.endsWith('about')}>
					About
				</NavItem>
				<NavItem to='./skills' active={location.pathname.endsWith('skills')}>
					Skills
				</NavItem>
				<NavItem to='./works' active={location.pathname.endsWith('works')}>
					Works
				</NavItem>
				{/* <NavItem to='./service' active={location.pathname.endsWith('service')}>
					Service
				</NavItem> */}
				<NavItem to='./contact' active={location.pathname.endsWith('contact')}>
					Contact
				</NavItem>
				<div className='flex-grow md:block hidden' />
				<button
					title='Swap Site Theme'
					onClick={() => {
						swapTheme();
					}}
					className={`text-text-primary hover:text-tertiary ${
						screenClassIndex <= 1 ? 'absolute' : ''
					}`}
					style={{ right: screenClassIndex <= 1 ? '3rem' : '' }}
				>
					{localTheme === 'base' ? 'Swap Theme ☀' : 'Swap Theme 🌑'}
				</button>
			</>
		);
	};

	return (
		<div
			className={`w-full bg-background-primary flex m-0 justify-between items-center tw px-6 md:px-16 lg:px-24 max-h-16 py-4`}
		>
			<Link to='./' className='z-40'>
				<img
					className='h-full'
					src={
						localTheme === 'base'
							? './assets/LogoDark.svg'
							: './assets/LogoLight.svg'
					}
				/>
			</Link>
			<div className='flex-grow' />
			{screenClassIndex <= 1 && (
				<div
					className='cursor-pointer z-40'
					onClick={() => {
						if (!dropdownShowing) {
							setDropdownShowing(true);
							document.addEventListener('click', handleDocumentClick);
						} else {
							setDropdownShowing(false);
							document.removeEventListener('click', handleDocumentClick);
						}
					}}
					ref={burger}
				>
					<HamburgerSliderReverse
						isActive={dropdownShowing}
						barColor={localTheme === 'base' ? '#000' : '#fff'}
						buttonColor='transparent'
						buttonWidth={30}
					/>
				</div>
			)}

			<div
				className={`z-30 bg-background-quinary w-full absolute top-0 left-0 px-8 pt-20 pb-4 flex flex-col transform transition-transform duration-500 ${
					dropdownShowing ? 'translate-y-0' : '-translate-y-full'
				} ${screenClassIndex <= 1 ? '' : 'hidden'}`}
				ref={dropdown}
				tabIndex={screenClassIndex <= 1 && dropdownShowing ? 0 : -1}
			>
				{renderMenuItems()}
			</div>
			{screenClassIndex >= 2 && renderMenuItems()}
		</div>
	);
};

export default Header;
