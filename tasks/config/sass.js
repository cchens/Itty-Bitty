/**
 * Compiles SASS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.scss` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-sass
 */
module.exports = function(grunt) {

  grunt.config.set('sass', {
    dev: {
      options: {
        style: 'compressed'
      },
      files: [{
        expand: true,
        cwd: 'assets/styles/',
        src: ['importer.scss'],
        dest: '.tmp/public/styles/',
        ext: '.css'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.config.set('autoprefixer', {
    dev: {
      options: {
        browsers: ['last 2 versions', '> 5%', 'ie 9']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: '.tmp/public/styles/*.css',
        dest: '.tmp/public/styles/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
};
