module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');

    grunt.registerTask('build', [
        'copy:default',
        'processhtml:default'
    ]);

    grunt.initConfig({
        copy: {
            default: {
                expand: true,
                src: [ './*.html'],
                dest: '_build/'
            }
        },
        processhtml: {
            default: {
                options: {
                    recursive: true
                },
                files: {
                    '_build/index.html': '_build/index.html'
                }
            }
        }
    });
}