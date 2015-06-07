/* 
	API para consult 
	https://dribbble.com/api/deprecated
*/

'use strict';
app.service('dribbble', ['$http', function($http) {
    function load(path, params) {
        params = params || {};
        params.callback = "JSON_CALLBACK"
        return $http.jsonp('//api.dribbble.com' + path , {params: params})
    }

    return {
        list: function(type, params) {
            return load("/shots/" + type, params);
        },
        shot: function (id) {
            return load("/shots/" + id);
        }
    }
}]);
