import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import Image from 'next/image';
import React from 'react';
import NavItems from './NavItems';

const MobileNav = () => {
	return (
		<nav className='md:hidden'>
			<Sheet>
				<SheetTrigger className='align-middle'>
					<Image
						src='/assets/icons/menu.svg'
						alt='menu'
						width={24}
						height={24}
						className='cursor-pointer'
					/>
				</SheetTrigger>
				<SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
					<div className='flex items-center justify-start gap-3'>
						<Image src='/assets/images/logo.png' alt='logo' width={36} height={36} />
						<h2 className='text-2xl font-semibold'>Eventlify</h2>
					</div>
					<Separator className='border border-gray-50' />
					<NavItems />
				</SheetContent>
			</Sheet>
		</nav>
	);
};

export default MobileNav;
