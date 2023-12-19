import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import Image from 'next/image';
import React from 'react';
import NavItems from './NavItems';

const MobileNav = () => {
	return (
		<nav className='md:hidden flex flex-col justify-center w-8 lg:w-9 h-8 lg:h-9 rounded-full bg-slate-200 dark:bg-white/70'>
			<Sheet>
				<SheetTrigger className='align-middle m-auto'>
					<Image
						src='/assets/icons/menu.svg'
						alt='menu'
						width={22}
						height={22}
						className='cursor-pointer'
					/>
				</SheetTrigger>
				<SheetContent className='flex flex-col gap-2 bg-white dark:bg-gray-800 dark:border-gray-800 md:hidden h-[280px] rounded-md'>
					<div className='flex items-center justify-start gap-3'>
						<Image src='/assets/images/logo.png' alt='logo' width={36} height={36} />
						<h2 className='text-2xl font-semibold'>Eventlify</h2>
					</div>
					<Separator className='mt-4 border border-gray-50 dark:border-gray-600' />
					<NavItems />
				</SheetContent>
			</Sheet>
		</nav>
	);
};

export default MobileNav;
