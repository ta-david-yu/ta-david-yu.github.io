// This config override file is made to address the error
// 'Module not found: Error: Can't resolve 'path' in 'D:\Code Project\Portfolio\ta-david-yu.github.io\node_modules\replace-ext'
// based on this video: https://youtu.be/_P7Czs_Ra9g
module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, { path: require.resolve("path-browserify") });
  config.resolve.fallback = fallback;
  return config;
};
