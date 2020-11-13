import React, { useEffect, useState } from 'react';

const About = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setTimeout(() => setMounted(true), 50);
		return () => {
			setMounted(false);
		};
	}, []);

	return (
		<div
			className={`bg-background-primary flex flex-grow md:flex-row xs:flex-col z-0 ${
				mounted ? 'opacity-100 tw' : 'tw-longer opacity-0'
			}`}
		>
			<div
				className='w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 pt-16 md:pl-32 md:pr-24 mt-8 md:mr-0 xs:mr-5 xs:pl-12 xs:pr-6 pb-16 mb-32 bg-background-tertiary'
				style={{
					borderTopRightRadius: '4rem',
					borderBottomRightRadius: '4rem',
				}}
			>
				<h1 className='text-text-primary lg:text-6xl text-5xl font-bold leading-none font-title space-y-0'>
					Hey, I'm&nbsp;<span className='text-secondary'>Vignesh</span>, web
					developer and student
				</h1>
				<h3 className='text-text-tertiary font-body font-bold mt-2 mb-8'>
					NICE TO MEET YOU.
				</h3>
				<h3 className='text-text-secondary xs:text-md md:text-lg lg:text-xl text-lg font-thin mt-7 font-body'>
					I am a 20-year-old Full-Stack Javascript Developer from Coppell,
					Texas. I’m enrolled in Texas A&M Bachelor of Science in Computer
					Science, Class of '22 with minors in Cybersecurity and Business. A web
					developer for 5 years, I strive to create user-friendly, responsive,
					and privacy-first websites and applications. After working with
					clients big and small, with robust teams as well as individually, I
					always strive to ensure security, privacy, and usability for all
					products.
					<br />
					<br />
					Over the past 2 years, I've worked to further my technical experience,
					creating user-first websites and apps, but also by working closely as
					a technical liaison for a design and branding agency. At first, only
					handling responsibilities like basic web security, and
					troubleshooting. Eventually transitioning to complex user privacy and
					experience decisions while developing and directing the creation of a
					web and mobile application to streamline food-event Party Planning.
					I've also successfully led teams to accomplish both technical and
					interpersonal goals in my past experiences and as a Senior Resident
					Advisor.
					<br />
					<br />
					In my work with open-source organizations and codebases, I worked
					towards, and have been the maintainer of an online adaptation of the
					hit social-deduction board game, Secret Hitler, for the past 2 years.
					With over 70,000 monthly active users over the past 6 months, growing
					3% month-over-month, upwards of 1250 games played daily and nearly 1
					million games played over the past three and a half years, we find it
					absolutely vital to continually find new ways to best serve our
					end-users, with the help of our devoted team of contributors and
					moderators.
					<br />
					<br />
					After my experience working with members of larger organizations,
					namely Google and Mozilla, I find myself to greatly enjoy working to
					reach long-term goals and establishing procedures to get there
					efficiently. With a passion for creating, evolving and ultimately
					perfecting user-first products that serve a real purpose in the world,
					I hope to continue my journey in web and application development in
					the years and decades to come. I am as comfortable working in a large
					team, as I am leading one - with deeply rooted principles of quality,
					tenacity, and free and open learning.
				</h3>
			</div>
		</div>
	);
};

export default About;
