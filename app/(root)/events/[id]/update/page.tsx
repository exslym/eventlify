import EventForm from '@/components/shared/EventForm';
import { getEventById } from '@/lib/actions/event.actions';
import { auth } from '@clerk/nextjs';

type UpdateEventProps = {
	params: {
		id: string;
	};
};

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
	const { sessionClaims } = auth();

	const userId = sessionClaims?.userId as string;
	const event = await getEventById(id);

	return (
		<>
			<section className='bg-primary-50  dark:bg-inherit bg-dotted-pattern bg-cover bg-center py-5 md:py-10 px-0 xl:px-6'>
				<h3 className='wrapper h3-bold text-center sm:text-left'>Update Event</h3>
			</section>

			<section className=' my-8 px-0 xl:px-6'>
				<div className='wrapper'>
					<EventForm type='Update' event={event} eventId={event._id} userId={userId} />
				</div>
			</section>
		</>
	);
};

export default UpdateEvent;
