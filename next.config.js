
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

const nextConfig = {
  experimental: {
    css: true,
    appDir: true
  },
};

module.exports = nextConfig;
