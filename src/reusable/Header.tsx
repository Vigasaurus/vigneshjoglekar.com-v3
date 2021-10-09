import React, { useContext, useState, useEffect, MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { themeContext } from '../contexts/theme.context';
import { useScreenClass } from '../hooks/screenClass.hook';
import { HamburgerSliderReverse } from 'react-animated-burgers';

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
				<div className='h-full text-text-primary tw'>
					<svg
						width='40'
						height='35'
						viewBox='0 0 40 35'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M26.8018 5.28339L24.6504 8.72562L22.0098 4.39499L24.5301 0.5H39.1326L24.9011 25.0706L13.3348 5.29595L13.19 5.04839H12.9032H9.54839H8.67684L9.11675 5.80076L22.7615 29.1371L19.7833 33.3916L0.864404 0.5H15.8367L24.3385 15.6001L24.7681 16.3632L25.2069 15.6054L30.8843 5.79891L31.3188 5.04839H30.4516H27.2258H26.9487L26.8018 5.28339Z'
							fill='currentColor'
							stroke='currentColor'
						/>
					</svg>
				</div>
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
