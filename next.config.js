/** @type {import('next').NextConfig} */
const nextConfig = {
	// images: {
	// 	domains: ['utfs.io'],
	// 	remotePatterns: [
	// 		{
	// 			protocol: 'https',
	// 			hostname: 'utfs.io',
	// 			port: '',
	// 		},
	// 	],
	// },
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'utfs.io',
				// hostname: 'res.cloudinary.com',
				pathname: '**',
			},
		],
	},
};

module.exports = nextConfig;
