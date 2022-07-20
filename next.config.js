/** @type {import('next').NextConfig} */

const intercept = require('intercept-stdout');

// Hidden duplicate atom key warnings from recoil
function interceptStdout(text) {
    if (text.includes('Duplicate atom key')) {
        return '';
    }
    return text;
}
intercept(interceptStdout);

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
};

module.exports = nextConfig;
