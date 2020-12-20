const withOptimizedImages = require("next-optimized-images");
const withTM = require('next-transpile-modules');


module.exports = withOptimizedImages(withTM({
    transpileModules: ['react-jinke-music-player']
}))
