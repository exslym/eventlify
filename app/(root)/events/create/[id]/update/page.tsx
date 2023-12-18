import EventForm from '@/components/shared/EventForm';
import { auth } from '@clerk/nextjs';

const UpdateEvent = () => {
	const { sessionClaims } = auth();
	const userId = sessionClaims?.userId as string;

	return (
		<>
			<section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 px-0 xl:px-6'>
				<h3 className='wrapper h3-bold text-center sm:text-left'>Update Event</h3>
			</section>

			<section className=' my-8 px-0 xl:px-6'>
				<div className='wrapper'>
					<EventForm userId={userId} type='Update' />
				</div>
			</section>
		</>
	);
};

export default UpdateEvent;
