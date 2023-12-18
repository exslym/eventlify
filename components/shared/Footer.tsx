import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<footer className='border-t dark:border-gray-700 dark:bg-inherit px-0 xl:px-6'>
			<div className='wrapper flex flex-col items-center justify-start'>
				<Link href='/'>
					<div className='flex items-center justify-center gap-2'>
						<p className='text-lg font-[400]'>&#169; {currentYear}</p>
						{/* <Image src='/assets/images/logo.png' alt='logo' width={24} height={24} /> */}
						<h2 className='text-lg font-[400]'>
							<span className='text-2xl font-[300] leading-[0.9]'>e</span>ventlify
						</h2>
					</div>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
