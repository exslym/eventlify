'use client';
import { useTheme } from 'next-themes';
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
				className={`flex shrink-0 justify-center items-center text-2xl w-8 lg:w-9 h-8 lg:h-9 rounded-full hover:scale-[1.00] active:scale-100 duration-200 bg-slate-200 dark:bg-white/70`}
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'light' ? (
					<img src='/assets/icons/sun.svg' alt='sun' className='w-2/3 h-2/3 opacity-80' />
				) : (
					<img src='/assets/icons/moon.svg' alt='moon' className='w-2/3 h-2/3' />
				)}
			</button>
		</>
	);
};
