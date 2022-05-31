const withImages = require('next-images');
module.exports = withImages({
    webpack(config, options) {
        return config
    },
    env: {
        API_URL: 'https://api-lms.polytronx.com/api',
    },
});
