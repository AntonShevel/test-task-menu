module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                browser: true,
                undef: true,
                unused: true,
                globals: {
                    console: true
                }
            },
            dev: {
                src: [
                    'js/menu.js'
                ]
            }
        },
        less: {
            dev: {
                files: {
                    'css/main.css': 'css/main.less'
                }
            }
        },
        connect: {
            static: {
                options: {
                    hostname: 'localhost',
                    port: 8001
                }
            }
        },
        watch: {
            html: {
                files: ['*.html', 'css/*.less'],
                tasks: ['less:dev'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('server', ['connect:static', 'watch']);
};