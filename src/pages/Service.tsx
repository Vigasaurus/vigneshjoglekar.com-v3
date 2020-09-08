import React, { useEffect, useState } from 'react';

const Service = () => {
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
			<div className='w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 bg-transparent mt-16 md:ml-16 lg:ml-40 pt-0 xs:mx-5 xs:px-4 pb-1/10'>
				<h1 className='text-text-primary lg:text-6xl text-5xl font-bold leading-none font-title space-y-0'>
					Service Projects
				</h1>
				<h3 className='text-text-secondary xs:text-md md:text-lg lg:text-xl text-lg font-thin mt-10 font-body'>
					One of the greatest ways I give back at the moment, and hope to
					continue in industry for the foreseeable future is through teaching
					and mentoring budding web developers. My current position as Vice
					President and Workshop Leader for the Aggie Web Developers
					organization at Texas A&amp;M affords me the opportunity to teach up
					and coming Aggies interested in web development. From web development
					basics, to large projects for non-profits and other organizations, we
					hope to further the good that a group of dedicated web developers can
					do. Additonally, with our platform, we strive to teach members about
					industry issues and hope to address them, from mental health to
					ethical business practices to just being a contributing member of
					industry. I hope to eventually further these goals in industry,
					whether by simply leading teams cognizant of industry-ailing issues,
					or by affecting true change in an effort to eradicate said issues.
				</h3>
				<div className='absolute left-0 w-3/4 lg:w-3/5 bg-background-quaternary service-background ' />
			</div>
		</div>
	);
};

export default Service;

/*
    Describe your volunteer work or ways you give back to your community
    May include areas you would like to contribute to if not already
*/
