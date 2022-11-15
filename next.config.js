/** @type {import('next').NextConfig} */
const withMarkdoc = require('@markdoc/next.js');
module.exports = withMarkdoc(/* options */)({
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx']
});
const nextConfig = {  
  experimental: {    
    runtime: 'experimental-edge',
    },  
    reactStrictMode: true,  
    swcMinify: true,
  }
module.exports = nextConfig
