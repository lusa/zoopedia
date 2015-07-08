module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            options: {
              transform: [ require('grunt-react').browserify ]
            },
            client: {
                src: ['components/*.js', 'components/*.jsx', '/api/*.js'],
                dest: 'public/js/bundle.js'
            }
        },
        less: {
            development: {
                options: {
                    compress: false,
                    cleancss: false,
                    optimization: 2,
                    dumpLineNumbers: 'false'
                },
                files: {
                    "public/css/app.css": "less/app.less"
                }
            }
        },

        watch: {
            options: {
                livereload: false,
            },
            components: {
                files: ['components/*.js', 'components/*.jsx'], // which files to watch
                tasks: ['browserify'],
                options: {
                    nospawn: true
                }
            },
            styles: {
                files: ['less/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['browserify', 'less', 'watch']);
};
