import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
	publicRoutes: [
		'/',
		'/events/:id',
		'/api/webhook/clerk',
		'/api/webhook/stripe',
		'/api/uploadthing',
	],
	// ignoredRoutes: ['/api/webhook/clerk', '/api/webhook/stripe', '/api/uploadthing'],
	debug: true,
});

// export const config = {
// 	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };

export const config = {
	matcher: ['/(.*?trpc.*?|(?!static|.*\\..*|_next|favicon.ico).*)', '/'],
};
