
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

console.log(process.env.API_KEY);

const nextConfig = {
  experimental: {
    css: true,
    appDir: true
  },
};

module.exports = nextConfig;
