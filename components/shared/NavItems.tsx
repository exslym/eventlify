'use client';

import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItems = () => {
	const pathname = usePathname();

	return (
		<ul className='md:flex-between flex w-full flex-col items-start gap-3 md:flex-row'>
			{headerLinks.map(link => {
				const isActive = pathname === link.route;
				return (
					<li
						key={link.route}
						className={`${
							isActive && 'text-primary-500 dark:text-green-400/80'
						} header-dark flex-center p-medium-18 md:m-0 my-2 whitespace-nowrap`}
					>
						<Link href={link.route}>{link.label}</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default NavItems;
