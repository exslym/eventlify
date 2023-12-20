import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { UserButton } from '@clerk/nextjs';
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
						width={18}
						height={18}
						className='cursor-pointer'
					/>
				</SheetTrigger>
				<SheetContent className='flex flex-col gap-2 bg-white dark:bg-gray-800 dark:border-gray-700 md:hidden h-[280px] max-w-max sm:max-w-max min-w-[250px] pr-12 rounded-md'>
					<UserButton afterSignOutUrl='/' showName={true} />
					<Separator className='mt-4 border border-gray-50 dark:border-gray-600' />
					<NavItems />
				</SheetContent>
			</Sheet>
		</nav>
	);
};

export default MobileNav;
