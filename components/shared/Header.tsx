import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import MobileNav from './MobileNav';
import NavItems from './NavItems';
import { ThemeSwitcher } from './ThemeSwitcher';

const Header = () => {
	return (
		<header className='w-full border-b dark:border-gray-700 dark:bg-gray-800 px-0 xl:px-6'>
			<div className='wrapper relative flex items-center justify-between'>
				<Link href='/'>
					<div className='flex items-center justify-start gap-[2px]'>
						<Image src='/assets/images/logo.png' alt='logo' width={36} height={36} />
						<h2 className='text-2xl font-semibold eventlify-text text-slate-700 dark:text-slate-300'>
							ventlify
						</h2>
					</div>
				</Link>

				<SignedIn>
					<nav className='md:flex-between hidden w-full max-w-[300px]'>
						<NavItems />
					</nav>
				</SignedIn>

				<div className='flex justify-end items-center gap-5'>
					<ThemeSwitcher />
					<SignedIn>
						<MobileNav />
						<div className='hidden md:flex'>
							<UserButton afterSignOutUrl='/' />
						</div>
					</SignedIn>
					<SignedOut>
						<Button
							asChild
							className='rounded-full px-4 h-8 lg:h-9 lg:px-6 dark:text-white'
							size='lg'
						>
							<Link href='/sign-in'>Login</Link>
						</Button>
					</SignedOut>
				</div>
			</div>
		</header>
	);
};

export default Header;
