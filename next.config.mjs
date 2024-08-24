/** @type {import('next').NextConfig} */
let nextConfig = {
	images: {
		unoptimized: true, // Disable image optimization
	},
};

const isGithubActions = process.env.GITHUB_ACTIONS || false

if ( isGithubActions ) {

	nextConfig = {
		...nextConfig,
		output: "export",
		assetPrefix: '/portfolio/',
		basePath: '/portfolio',
		publicRuntimeConfig: {
			basePath: '/portfolio',
		},
	};
}

export default nextConfig;
