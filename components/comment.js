app.component('comment',  {
        bindings: {
            comment: '='
        },
        template:['<div class="comment">',
                    '<editable-textbox value="co.comment.description" is-editable="co.comment.isEditable" large="true"></editable-textbox>',
                    '<div class="user">{{co.comment.user.name}}<div>',
                    '<div class="save" ng-click="co.save()" ng-if="co.comment.isEditable">Save</div>',
                    '<div class="cancel" ng-click="co.cancel()" ng-if="co.comment.isEditable">Cancel</div>',
                    '</div>'].join(''),
        controller: function($scope){
            this.save = function(){
                this.comment.isEditable = false;
                $scope.$emit('saveyourself');
            };

            this.cancel = function(){
                this.comment = null;
            };
        },
        controllerAs: 'co'
});