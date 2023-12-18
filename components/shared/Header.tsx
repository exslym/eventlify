import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import MobileNav from './MobileNav';
import NavItems from './NavItems';

const Header = () => {
	return (
		<header className='w-full border-b px-0 xl:px-6'>
			<div className='wrapper flex items-center justify-between'>
				<Link href='/' className='w-36'>
					<div className='flex items-center justify-start gap-[2px]'>
						<Image src='/assets/images/logo.png' alt='logo' width={36} height={36} />
						<h2 className='text-2xl font-semibold eventlify-text text-slate-700'>ventlify</h2>
					</div>
					{/* <div className='flex items-center justify-start gap-3'>
						<Image src='/assets/images/logo.png' alt='logo' width={36} height={36} />
						<h2 className='text-2xl font-semibold'>
							<span className='text-4xl font-normal leading-[0.9]'>e</span>ventlify
						</h2>
					</div> */}
				</Link>

				<SignedIn>
					<nav className='md:flex-between hidden w-full max-w-xs'>
						<NavItems />
					</nav>
				</SignedIn>

				<div className='flex w-32 justify-end gap-3'>
					<SignedIn>
						<UserButton afterSignOutUrl='/' />
						<MobileNav />
					</SignedIn>
					<SignedOut>
						<Button asChild className='rounded-full' size='lg'>
							<Link href='/sign-in'>Login</Link>
						</Button>
					</SignedOut>
				</div>
			</div>
		</header>
	);
};

export default Header;
