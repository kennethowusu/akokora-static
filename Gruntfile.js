
module.exports = function(grunt){

  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  //sass task
  sass: {
    dist: {
      options: {
        style: 'expanded'
      },
      files: {
        'css/style.css': 'build/sass/main.scss'
        //'widgets.css': 'widgets.scss'
      }
    }
  },

  //autoprefixer task
  autoprefixer:{
    options:{
        // We need to `freeze` browsers versions for testing purposes.
        browsers: ['opera 12', 'ff 15', 'chrome 25']
    },

     main_css: {
      src: 'css/style.css',
      dest: 'css/style.css'
    }
  },
  // Concat fiiles
 // concat: {
 //   options: {
 //     // separator: ';',
 //   },
 //   dist: {
 //     src: ['javascripts/*'],
 //     dest: 'javascripts/main.js',
 //   },
 // },

  // //process coffeescript to js
  // coffee:{
  //   compile:{
  //     files:{
  //       'javascripts/main.js':'build/coffee/main.coffee'
  //     }
  //   }
  // },
  //watch tasks
  watch: {
    options:{
      livereload:false
    },
    scss: {
      files: ['build/sass/**/*'],
      tasks: ['sass','autoprefixer']
    }
    // },
    // javascript:{
    //   files:['javascripts/**/*'],
    //   tasks:['concat']
    // }

  }
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-coffee');
grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask('default', ['watch']);
grunt.registerTask('call_sass', 'sass');
}
