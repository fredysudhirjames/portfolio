import getConfig from 'next/config';
const nextConfig = getConfig();

export const prefix = nextConfig?.publicRuntimeConfig?.basePath || '';
