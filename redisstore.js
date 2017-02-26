app.service('store', ['$http',  function($http){
    this.get = function(callback){
        $http({
            method: 'GET',
            url: 'http://localhost:1234/latest'
            }).then(function successCallback(response) {
                callback(response.data);
                console.log(response);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    };

    this.save = function(callback, data) {
        $http({
            method: 'PUT',
            url: 'http://localhost:1234/save',
            data: data,
            }).then(function successCallback(response) {
                console.log(response);
                callback(response.data);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    };

    this.saveAll = function(data) {
        $http({
            method: 'PUT',
            url: 'http://localhost:1234/saveAll',
            data: data,
            }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    };

    this.delete = function(callback,data) {
        $http({
            method: 'PUT',
            url: 'http://localhost:1234/qp',
            data: data,
            }).then(function successCallback(response) {
                console.log(response);
                callback();
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    };
}]);



// var storage = {
    
//     save: function(data) {
//         $http({
//             method: 'POST',
//             url: 'http://localhost:1234/save',
//             data: data,
//             }).then(function successCallback(response) {
//                 console.log(response);
//             }, function errorCallback(response) {
//                 // called asynchronously if an error occurs
//                 // or server returns response with an error status.
//             });
//     },
//     saveAll: function(data) {
//         $http({
//             method: 'PUT',
//             url: 'http://localhost:1234/saveAll',
//             data: data,
//             }).then(function successCallback(response) {
//                 console.log(response);
//             }, function errorCallback(response) {
//                 // called asynchronously if an error occurs
//                 // or server returns response with an error status.
//             });
//     },
//     delete: function(data) {
//         $http({
//             method: 'PUT',
//             url: 'http://localhost:1234/qp',
//             data: data,
//             }).then(function successCallback(response) {
//                 console.log(response);
//                 get();
//             }, function errorCallback(response) {
//                 // called asynchronously if an error occurs
//                 // or server returns response with an error status.
//             });
//     }
// } 