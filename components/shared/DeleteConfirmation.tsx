'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTransition } from 'react';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { deleteEvent } from '@/lib/actions/event.actions';

export const DeleteConfirmation = ({ eventId }: { eventId: string }) => {
	const pathname = usePathname();
	let [isPending, startTransition] = useTransition();

	return (
		<AlertDialog>
			<AlertDialogTrigger>
				<Image src='/assets/icons/delete.svg' alt='edit' width={20} height={20} />
			</AlertDialogTrigger>

			<AlertDialogContent className='bg-white  dark:bg-gray-800 dark:border-gray-600'>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
					<AlertDialogDescription className='p-regular-16 text-grey-600 dark:text-white/70'>
						This will permanently delete this event
					</AlertDialogDescription>
				</AlertDialogHeader>

				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>

					<AlertDialogAction
						onClick={() =>
							startTransition(async () => {
								await deleteEvent({ eventId, path: pathname });
							})
						}
						className='dark:text-white'
					>
						{isPending ? 'Deleting...' : 'Delete'}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
