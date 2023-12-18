import EventForm from '@/components/shared/EventForm';
import { auth } from '@clerk/nextjs';

const CreateEvent = () => {
	const { sessionClaims } = auth();
	const userId = sessionClaims?.userId as string;

	// console.log(userId);

	return (
		<>
			<section className='bg-primary-50 dark:bg-inherit bg-dotted-pattern bg-cover bg-center py-5 md:py-10 px-0 xl:px-6'>
				<h3 className='wrapper h3-bold text-center sm:text-left'>Create Event</h3>
			</section>

			<section className=' my-8 px-0 xl:px-6'>
				<div className='wrapper'>
					<EventForm userId={userId} type='Create' />
				</div>
			</section>
		</>
	);
};

export default CreateEvent;
