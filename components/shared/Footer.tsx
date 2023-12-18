import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className='border-t'>
			<div className='wrapper flex flex-col items-start justify-start'>
				<Link href='/'>
					<div className='flex items-center justify-start gap-2'>
						<Image src='/assets/images/logo.png' alt='logo' width={24} height={24} />
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
