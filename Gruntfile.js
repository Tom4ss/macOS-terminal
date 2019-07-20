module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // postcss - autoprefixer
    autoprefixer: {
      options: {
        browsers: ['last 3 versions', 'ios 6', 'ie 7', 'ie 8', 'ie 9']
      },
      style: {
        src: 'style.css',
        dest: 'style.css'
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Do the task
  grunt.registerTask('default', ['autoprefixer']);
};
