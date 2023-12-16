import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const Header = () => {
	return (
		<header className='w-full border-b'>
			<div className='wrapper flex items-center justify-between'>
				<Link href='/' className='w-36'>
					<div className='flex items-center justify-start gap-3'>
						<Image src='/assets/images/logo.png' width={36} height={36} alt='logo' />
						<h2 className='text-2xl font-semibold'>Eventlify</h2>
					</div>
				</Link>

				<div className='flex w-32 justify-end gap-3'>
					<SignedIn>
						<UserButton afterSignOutUrl='/' />
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
