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
			<div className='md:w-6/12 lg:w-7/12 xl:w-7/12 bg-transparent mt-20 md:ml-40 pt-0 xs:mx-5 xs:px-4 pb-1/10'>
				<h1 className='text-text-primary lg:text-6xl text-5xl font-bold leading-none font-title space-y-0'>
					Hey, I'm&nbsp;<span className='text-secondary'>Vignesh</span>, web
					<br />
					developer and student
				</h1>
				<h3 className='text-text-tertiary font-body font-bold mt-2 mb-8'>
					NICE TO MEET YOU.
				</h3>
				<h3 className='text-text-secondary lg:text-xl text-lg font-thin mt-7 font-body md:block hidden'>
					I am a 20-year-old Full-Stack Javascript Developer from Coppell,
					Texas. I’m enrolled in Texas A&M Bachelor of Science in Computer
					Science, Class of '22 with minors in Cybersecurity and Business. A web
					developer for 5 years, I strive to create user-friendly, responsive,
					and privacy-first websites and applications. After working with
					clients big and small, with robust teams as well as individually, I
					strive to ensure security, privacy, and usability for all products.
					<br />
					<br />
					Over the past 2 years, I've worked to further my technical experience,
					creating user-first websites and apps, but also by working closely as
					a technical liaison for a design and branding agency, handling
					responsibilities from basic web security to complex user privacy and
					access decisions while developing and directing the creation of a web
					and mobile application to streamline food-event Party Planning. I've
					also successfully led teams to accomplish both technical and
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
				<div className='absolute left-0 w-3/5 bg-background-tertiary about-background' />
			</div>
			<div className='flex-grow bg-transparent md:block hidden' />
		</div>
	);
};

export default About;

/*

    Includes any interesting information that a prospective employer or organization would want to know
    Helps others see how you would fit on their team and in their corporate culture

		*/
