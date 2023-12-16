import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className='border-t'>
			<div className='wrapper flex flex-col items-start justify-start'>
				<Link href='/'>
					<div className='flex items-center justify-start gap-3'>
						<Image src='/assets/images/logo.png' alt='logo' width={26} height={26} />
						<h2 className='text-xl font-semibold'>
							<span className='text-3xl font-normal leading-[0.9]'>e</span>ventlify
						</h2>
					</div>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
