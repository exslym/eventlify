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
			<button
				className={`absolute  xl:right-[80px] lg:right-[120px] right-[120px] flex justify-center items-center text-2xl mt-[2px] w-[30px] lg:w-[32px] h-[30px] lg:h-[32px] rounded-md hover:scale-[1.00] active:scale-100 duration-200 bg-slate-200 dark:bg-gray-700`}
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'light' ? <p>&#9214;</p> : <p className='pt-1'>&#9788;</p>}
			</button>
		</>
	);
};
