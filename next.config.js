
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

const nextConfig = {
  experimental: {
    appDir: true
  },
};

module.exports = nextConfig;
