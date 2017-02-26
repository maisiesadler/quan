app.component('currentUser',  {
        bindings: {
            user: '=',
            loggedIn: '='
        },
        template:['<div class="currentuser">',
                        '<div ng-click="cu.logOut()" ng-if="cu.loggedin" class="log-out">Log out</div>',
                        '<editable-textbox value="cu.user.name" is-editable="!cu.loggedin"></editable-textbox>',
                        '<input ng-model="cu.user.password" ng-if="!cu.loggedin" />',
                        '<div ng-click="cu.signin()" ng-if="!cu.loggedin">Sign In With Password</div>',
                        '<div ng-click="cu.register()" ng-if="!cu.loggedin">Register</div>',
                    '</div>'].join(''),
        controller: function($scope, $http){
            var me = this;
            
            this.register = function(){
                $http({
                    method: 'POST',
                    url: 'http://localhost:1234/register',
                    data: me.user,
                    }).then(function successCallback(response) {
                        var parts = response.data.split('|');
                        if(parts[0] === "true"){
                            ugs.set(parts[1]);
                            me.user.password = "";
                            username.set(me.user);
                            me.loggedin = true;
                        } else{
                            alert("error: " + parts[1]);
                            me.loggedin = false;
                        }
                        emituserupdated();
                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
            };

            this.signin = function(uk){
                var user = me.user;
                user.userkey = uk;
                $http({
                    method: 'POST',
                    url: 'http://localhost:1234/signin',
                    data: user,
                    }).then(function successCallback(response) {
                        var data = response.data.split('|');
                        if (data && data[0] === "True") {
                            me.loggedin = true;
                            me.user.password = "";
                            username.set(me.user);
                            if (data.length > 1) {
                                ugs.set(data[1]);
                            }
                        }
                        else if (data.length > 1){
                            alert("error: " + data[1]);
                        }
                        emituserupdated();
                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
            };

            this.logOut = function() {
                this.user = "";
                this.loggedin = false;
                emituserupdated();
            };

            var username = new localStore(storeType.username);
            me.user = username.get();
            var ugs = new localStore(storeType.userGuid);

            var userkey = ugs.get();
            if (userkey){
                this.signin(userkey); 
            }

            var emituserupdated = function() {
                $scope.$emit('userupdated', {
                    user: me.user,
                    loggedin: me.loggedin
                });
            };
        },
        controllerAs: 'cu'
});