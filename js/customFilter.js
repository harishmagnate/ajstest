/**
 * Created by hbakthavatchalu on 6/12/2014.
 */

/**
 * @description
 * Create custom Filter Module
 * @type {module}
 */

var customFilterApp=angular.module("customFilterApp",["customFilterApp.filters"]);


/**
 * @description
 * Create the capitalize filter function and return the first
 * letter capitalized text
 *
 */

angular.module("customFilterApp.filters",[]).filter("capitalize",function(){
    return function(input){
        if(input){
            return input[0].toUpperCase() + input.slice(1);

        }
    }
});