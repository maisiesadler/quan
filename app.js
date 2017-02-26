var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', '$http', 'store', function($scope, $http, store) {
    var get = store.get.bind(this, function(data){{
        $scope.questionPages = data || [];
    }});
    get();

    $scope.changeView = function (viewname) {
        $scope.currentview = viewname;
    };

    $scope.changeView('viewall');

    $scope.viewQuestionPage = function(questionPage) {
        $scope.questionPage = questionPage;
        $scope.changeView('view');
    };

    var save = function(saveMe) {
        store.save(function(data){
            saveMe.id = data;
        }, saveMe);
    };

    var del = store.delete.bind(this, get);

    $scope.$on('saveme', function(evt, data){
        save(data);
    });
    $scope.$on('deleteme', function(evt, data){
        del(data);
        $scope.changeView('viewall');
    });
    $scope.$on('userupdated', function(evt, data){
        $scope.loggedin = data.loggedin;
    });
    
    $scope.saveNewQuestion = function(question){
        var qp = new questionPage(question);
        $scope.questionPages.push(qp);
        $scope.addNewQuestion = false;
        save(qp);
        $scope.viewQuestionPage(qp);
    };

    $scope.saveAll = function() {
        for(var i = 0; i< $scope.questionPages.length; i++){
            $scope.questionPages[i].showComments = false;
        }
        //pageStorer.set($scope.questionPages);
        saveAll($scope.questionPages);
    };
}]);