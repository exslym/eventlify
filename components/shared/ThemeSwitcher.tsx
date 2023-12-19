'use client';
import { useTheme } from 'next-themes';
// import Image from 'next/image';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<>
			{/* <button
				className={`absolute  xl:right-[120px] lg:right-[160px] right-[120px] flex justify-center items-center text-2xl mt-[2px] w-[30px] lg:w-[32px] h-[30px] lg:h-[32px] rounded-md hover:scale-[1.00] active:scale-100 duration-200 bg-slate-200 dark:bg-gray-700`}
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'light' ? <p>&#9214;</p> : <p className='pt-1'>&#9788;</p>}
			</button> */}
			<button
				className={`flex shrink-0 justify-center items-center text-2xl w-8 lg:w-9 h-8 lg:h-9 rounded-full hover:scale-[1.00] active:scale-100 duration-200 bg-slate-200  dark:bg-gray-600/70`}
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'light' ? (
					// <p>&#9214;</p>
					<img src='/assets/icons/sun.svg' alt='sun' className='w-2/3 h-2/3 opacity-80' />
				) : (
					// <p className='pt-[3px] text-white leading-none'>&#9728;</p>
					<img src='/assets/icons/moon.svg' alt='moon' className='w-2/3 h-2/3' />
				)}
			</button>
		</>
	);
};
